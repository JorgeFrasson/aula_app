"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const user_controller_1 = require("./controller/user.controller");
const auth_controller_1 = require("./controller/auth.controller");
const fastifyEnv = __importStar(require("@fastify/env"));
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
    app.register(fastifyEnv, options);
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
