import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import { serializerCompiler, validatorCompiler, hasZodFastifySchemaValidationErrors, jsonSchemaTransform } from 'fastify-type-provider-zod'
import { createLink } from './routes/create-link'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { deleteLink } from './routes/delete-link'
import { getLinkByShort } from './routes/get-link-by-shor'
import { getAllLink } from './routes/get-all-link'
import { incrementAccessLink } from './routes/increment-access-link'

const server = fastify()

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.setErrorHandler((error, request, reply) => {
	if(hasZodFastifySchemaValidationErrors(error)){
		return reply.status(400).send({
			message: "Validation error",
			issues: error.validation
		})
	}

	console.log(error)

	return reply.status(500).send({
		nessage: "Internal server error"
	})
})

server.register(fastifySwagger, {
	openapi: {
		info: {
			title: "brevly",
			version: "1.0.0"
		}
	},
	transform: jsonSchemaTransform,
})

server.register(fastifySwaggerUi, {
	routePrefix: "/docs"
})

server.register(fastifyCors, { origin: '*' })

server.register(createLink)
server.register(deleteLink)
server.register(getLinkByShort)
server.register(getAllLink)
server.register(incrementAccessLink)

server
	.listen({ port: 3333, host: '0.0.0.0' })
	.then(() => console.log('HTTP server running!'))
