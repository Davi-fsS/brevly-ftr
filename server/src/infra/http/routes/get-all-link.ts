import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../../db";
import { schema } from "../../db/schemas";

export const getAllLink : FastifyPluginAsyncZod = async(server) => {
    server.get("/all", 
        {
            schema: {
                summary: "get all links",
                response: {
                    200: z.array(z.object({
                        id: z.string(),
                        originalLink: z.string(),
                        shortLink: z.string(),
                        accessCount: z.number()
                    })),
                    400: z.object({ message: z.string() })
                }
            }
        }, async (request, reply) => {
            const getAll = await db.select({
                id: schema.links.id,
                originalLink: schema.links.originalLink,
                shortLink: schema.links.shortLink,
                accessCount: schema.links.accessCount
            })
                .from(schema.links)
            
            return reply.status(200).send(getAll)
        }
    )
}