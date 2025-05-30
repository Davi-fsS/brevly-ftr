import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../../db";
import { schema } from "../../db/schemas";
import { eq, sql } from 'drizzle-orm'
import { Upload } from '@aws-sdk/lib-storage'
import { format } from "fast-csv";
import { r2 } from "../../storage/client";
import { env } from "../../../../env";
import { PassThrough } from "stream";

export const getCsvFile : FastifyPluginAsyncZod = async(server) => {
    server.get("/csv-file", 
        {
            schema: {
                summary: "get csv file",
                response: {
                    200: z.object({ url: z.string(), name: z.string() }),
                    400: z.object({ message: z.string() })
                }
            }
        }, async (request, reply) => {
            const getAll = await db.select({
                id: schema.links.id,
                originalLink: schema.links.originalLink,
                shortLink: schema.links.shortLink,
                accessCount: schema.links.accessCount,
                createdAt: schema.links.createdAt
            })
                .from(schema.links)

            if(getAll.length == 0){
                return reply.status(204) 
            }

            const passThrough = new PassThrough();
            const csvStream = format({headers: true})

            csvStream.pipe(passThrough);

            getAll.forEach(item => {
                csvStream.write(item)
            });

            csvStream.end();

            const timestamp = Date.now().toString(36);
            const randomString = Math.random().toString(36).slice(2, 7);
            const uniqueName = `${timestamp}-${randomString}.csv`;

            const upload = new Upload({
                client: r2,
                params: {
                  Key: uniqueName,
                  Bucket: env.CLOUDFLARE_BUCKET,
                  Body: passThrough,
                  ContentType: "text/csv",
                },
              })
            
            await upload.done()

            return reply.status(200).send({ url: new URL(uniqueName, env.CLOUDFLARE_PUBLIC_URL).toString(), name: uniqueName })
        }
    )
}