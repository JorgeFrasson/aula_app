import fastify from "fastify";
import { UserController } from "./controller/user.controller";
import { AuthController } from "./controller/auth.controller";
import * as fastifyEnv from "@fastify/env";

const schema = {
    type: 'object',
    required: [ 'DATABASE_URL', 'SECRET' ],
    properties: {
        PORT: {
            type: 'string',
            default: 3000
        },
        SECRET: {
            type: 'string',
            default: 'defaultsupersecret'
        }
    }
}

const options = {
    dotenv: true,
    schema: schema,
    data: process.env
}

// Mova a inicialização do servidor para uma função assíncrona
async function start() {
    // Set Fastify APP
    const app = fastify({ logger: true });

    // Set Environment variables
    app.register(fastifyEnv, options);
    await app.after(); // await dentro da função

    // Controllers
    app.register(UserController, { prefix: '/users' });
    app.register(AuthController, { prefix: '/auth' });

    // Servier configuration
    app.listen({ port: 3333 }, (err: Error | null, address: string) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        console.log(`Server is running on ${address}`);
    });
}

// Iniciar o servidor
start().catch((err) => {
    console.error('Error starting the server:', err);
    process.exit(1);
});