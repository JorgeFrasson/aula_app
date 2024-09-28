"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = AuthController;
const auth_service_1 = require("../services/auth.service");
const authService = new auth_service_1.AuthService();
const login = async (request, reply) => {
    try {
        const data = await authService.login(request.body);
        return reply.status(200).send(data);
    }
    catch (error) {
        return reply.status(401).send(error.message);
    }
};
async function AuthController(fastify, options) {
    fastify.post('/login', login);
}
