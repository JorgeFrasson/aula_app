import { FastifyInstance } from "fastify";
import { UserService } from "../services/user.service";

const userService = new UserService();

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
        const data = await userService.listUsers();
        return reply.status(200).send(data);
    } catch (error) {
        return reply.status(400).send(error.message);        
    }
}

export async function UserController(fastify: FastifyInstance, options) {
    fastify.post("/users", createUser);
    fastify.get("/users", listUsers);
}