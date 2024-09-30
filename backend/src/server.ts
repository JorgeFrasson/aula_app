import fastify from "fastify";
import { UserController } from "./controller/user.controller";
import { AuthController } from "./controller/auth.controller";
import fastifyEnv from "@fastify/env";
import { configDotenv } from "dotenv";
import cors from "@fastify/cors";

// Carregar variáveis de ambiente
configDotenv();

// Especifica a porta
const PORT = Number(process.env.PORT) || 4000;

// Config necessária para adequação do deploy no render (padrão 0.0.0.0)
const host = '0.0.0.0';

// Set Fastify APP
const app = fastify({ logger: true });
app.register(cors, { origin: "*" }); // Necessário para chamar via frontend local

// Registra os controllers
app.register(UserController, { prefix: '/users' });
app.register(AuthController, { prefix: '/auth' });

// Iniciar o server
app.listen({ port: PORT, host }, (err: Error | null, address: string) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`Servidor sendo executado em ${address}`);
});
