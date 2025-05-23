import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../../db";
import { schema } from "../../db/schemas";
import { eq } from 'drizzle-orm'

export const createLink : FastifyPluginAsyncZod = async(server) => {
    server.post("/link", 
        {
            schema: {
                summary: "create link",
                body: z.object({
                    originalLink: z.string().url(),
                    shortLink: z.string()
                }),
                response: {
                    201: z.object({ message: z.string() }),
                    400: z.object({ message: z.string() })
                }
            }
        }, async (request, reply) => {
            const { originalLink, shortLink } = request.body;

            const isValidShortCode = /^[a-zA-Z0-9_-]{4,12}$/.test(shortLink)

            if(!isValidShortCode){
                return reply.status(400).send({ message: 'Invalid short link format' })
            }

            const getLinkByShortLink = await db.select()
                .from(schema.links)
                .where(eq(schema.links.shortLink, shortLink))
                .limit(1)

            if(getLinkByShortLink?.length > 0){
                return reply.status(400).send({ message: 'Short link already added' })
            }

            await db.insert(schema.links).values({
                originalLink: originalLink,
                shortLink: shortLink
            })

            return reply.status(201).send({ message: "Short link successfully created" })
        }
    )
}