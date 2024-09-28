import { FastifyInstance } from "fastify";
import { UserService } from "../services/user.service";
import AuthMiddleware from "../middleware/auth.middleware";

const userService = new UserService();
const authMiddleware = new AuthMiddleware();

const authRequest = async (req, res) => {
    return await authMiddleware.validateToken(req, res);
} 

const createUser = async (request, reply) => {
    try {
        const data = await userService.createUser(request.body);
        return reply.status(200).send(data);
    } catch (error) {        
        return reply.status(400).send(error.message);
    }
}

const listUsers = async (request, reply) => {
    try {
        console.log(reply.auth);
        const data = await userService.listUsers();
        return reply.status(200).send(data);
    } catch (error) {
        return reply.status(400).send(error.message);        
    }
}

export async function UserController(fastify: FastifyInstance, options) {
    fastify.post("/create", { preHandler: [authRequest] }, createUser);
    fastify.get("/list", { preHandler: [authRequest] }, listUsers);
}