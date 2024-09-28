import fastify from "fastify";
import { UserController } from "./controller/user.controller";
import { AuthController } from "./controller/auth.controller";
import fastifyEnv from "@fastify/env";
import { configDotenv } from "dotenv";

// Carregar variáveis de ambiente
configDotenv();

const PORT = Number(process.env.PORT) || 4000;

// Mova a inicialização do servidor para uma função assíncrona
function start() {
    // Set Fastify APP
    const app = fastify({ logger: true });

    // Controllers
    app.register(UserController, { prefix: '/users' });
    app.register(AuthController, { prefix: '/auth' });

    return app;
}

const app = start();

app.listen({ port: PORT, host: '0.0.0.0' }, (err: Error | null, address: string) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`Server is running on ${address}`);
});
