import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../../db";
import { schema } from "../../db/schemas";
import { eq } from 'drizzle-orm'

export const getLinkByShort : FastifyPluginAsyncZod = async(server) => {
    server.get("/link-by-short", 
        {
            schema: {
                summary: "get link by short",
                querystring: z.object({
                    shortLink: z.string()
                }),
                response: {
                    200: z.object({
                        id: z.string(),
                        originalLink: z.string(),
                        shortLink: z.string(),
                        accessCount: z.number()
                    }),
                    400: z.object({ message: z.string() })
                }
            }
        }, async (request, reply) => {
            const { shortLink } = request.query

            const isValidShortCode = /^[a-zA-Z0-9_-]{4,12}$/.test(shortLink)

            if(!isValidShortCode){
                return reply.status(400).send({ message: 'Invalid short link format' })
            }

            const [getLinkByShortLink] = await db.select({
                id: schema.links.id,
                originalLink: schema.links.originalLink,
                shortLink: schema.links.shortLink,
                accessCount: schema.links.accessCount
            })
                .from(schema.links)
                .where(eq(schema.links.shortLink, shortLink))
                .limit(1)

            if(!getLinkByShortLink){
                return reply.status(400).send({ message: 'Cannot found' })
            }

            return reply.status(200).send({
                id: getLinkByShortLink.id,
                originalLink: getLinkByShortLink.originalLink,
                shortLink: getLinkByShortLink.shortLink,
                accessCount: getLinkByShortLink.accessCount
            })
        }
    )
}