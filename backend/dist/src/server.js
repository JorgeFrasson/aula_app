"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const user_controller_1 = require("./controller/user.controller");
const auth_controller_1 = require("./controller/auth.controller");
const dotenv_1 = require("dotenv");
// Carregar variáveis de ambiente
(0, dotenv_1.configDotenv)();
const PORT = Number(process.env.PORT) || 4000;
// Mova a inicialização do servidor para uma função assíncrona
function start() {
    // Set Fastify APP
    const app = (0, fastify_1.default)({ logger: true });
    // Controllers
    app.register(user_controller_1.UserController, { prefix: '/users' });
    app.register(auth_controller_1.AuthController, { prefix: '/auth' });
    return app;
}
const app = start();
app.listen({ port: PORT }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is running on ${address}`);
});
