import { FastifyInstance } from "fastify";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

const login = async (request, reply) => {
    try {
        const data = await authService.login(request.body);
        return reply.status(200).send(data);
    } catch (error) {        
        return reply.status(401).send(error.message);
    }
}

const register = async (request, reply) => {
    try {
        const data = await authService.register(request.body);
        return reply.status(200).send(data);
    } catch (error) {        
        return reply.status(401).send(error.message);
    }
}

export async function AuthController(fastify: FastifyInstance, options) {
    fastify.post('/login', login);
    fastify.post('/register', register);
}