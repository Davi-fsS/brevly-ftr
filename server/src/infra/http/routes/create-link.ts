import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const createLink : FastifyPluginAsyncZod = async(server) => {
    server.post("/link", 
        {
            schema: {
                summary: "create link",
                body: z.object({
                    original_url: z.string().url()
                }),
                response: {
                    201: z.object({ linkId: z.number() }),
                    400: z.object({ message: z.string() }).describe("link already exists"),
                }
            }
        }, async (request, reply) => {
        return reply.status(201).send({linkId: 1})
    })
}