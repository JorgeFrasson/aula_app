"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const user_controller_1 = require("./controller/user.controller");
const auth_controller_1 = require("./controller/auth.controller");
const env_1 = __importDefault(require("@fastify/env"));
const schema = {
    type: 'object',
    required: ['DATABASE_URL', 'SECRET'],
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
};
const options = {
    dotenv: true,
    schema: schema,
    data: process.env
};
// Mova a inicialização do servidor para uma função assíncrona
async function start() {
    // Set Fastify APP
    const app = (0, fastify_1.default)({ logger: true });
    // Set Environment variables
    app.register(env_1.default, options);
    await app.after(); // await dentro da função
    // Controllers
    app.register(user_controller_1.UserController, { prefix: '/users' });
    app.register(auth_controller_1.AuthController, { prefix: '/auth' });
    // Servier configuration
    app.listen({ port: 3333 }, (err, address) => {
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
