import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../../db";
import { schema } from "../../db/schemas";
import { eq, sql } from 'drizzle-orm'

export const incrementAccessLink : FastifyPluginAsyncZod = async(server) => {
    server.put("/increment-access", 
        {
            schema: {
                summary: "increment access link",
                querystring: z.object({
                    id: z.string()
                }),
                response: {
                    200: z.object({ message: z.string() }),
                    400: z.object({ message: z.string() })
                }
            }
        }, async (request, reply) => {
            const { id } = request.query

            const [getLinkByShortLink] = await db.select()
                .from(schema.links)
                .where(eq(schema.links.id, id))
                .limit(1)

            if(!getLinkByShortLink){
                return reply.status(400).send({ message: 'Cannot found' })
            }

            await db
                .update(schema.links)
                .set({ accessCount: sql`${schema.links.accessCount} + 1` })
                .where(eq(schema.links.id, id))

            return reply.status(200).send({ message: "Increment access link successfully updated" })
        }
    )
}