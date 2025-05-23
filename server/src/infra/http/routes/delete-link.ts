import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../../db";
import { schema } from "../../db/schemas";
import { eq } from 'drizzle-orm'

export const deleteLink : FastifyPluginAsyncZod = async(server) => {
    server.delete("/link", 
        {
            schema: {
                summary: "delete link",
                querystring: z.object({
                    id: z.string()
                }),
                response: {
                    204: z.object({}),
                    400: z.object({ message: z.string() })
                }
            }
        }, async (request, reply) => {
            const { id } = request.query

            const getLinkByShortLink = await db.select()
                .from(schema.links)
                .where(eq(schema.links.id, id))
                .limit(1)

            if(getLinkByShortLink?.length === 0){
                return reply.status(400).send({ message: 'Cannot found' })
            }

            await db.delete(schema.links).where(eq(schema.links.id, id))

            return reply.status(204).send()
        }
    )
}