"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = UserController;
const user_service_1 = require("../services/user.service");
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const userService = new user_service_1.UserService();
const authMiddleware = new auth_middleware_1.default();
const authRequest = async (req, res) => {
    return await authMiddleware.validateToken(req, res);
};
const createUser = async (request, reply) => {
    try {
        const data = await userService.createUser(request.body);
        return reply.status(200).send(data);
    }
    catch (error) {
        return reply.status(400).send(error.message);
    }
};
const listUsers = async (request, reply) => {
    try {
        const data = await userService.listUsers();
        return reply.status(200).send(data);
    }
    catch (error) {
        return reply.status(400).send(error.message);
    }
};
const updateUser = async (request, reply) => {
    try {
        const id = Number(request.params.id);
        const data = await userService.updateUser(id, request.body);
        return reply.status(200).send(data);
    }
    catch (error) {
        return reply.status(400).send(error.message);
    }
};
const deleteUser = async (request, reply) => {
    try {
        const id = Number(request.params.id);
        await userService.deleteUser(id);
        return reply.status(200).send();
    }
    catch (error) {
        reply.status(400).send(error.message);
    }
};
async function UserController(fastify, options) {
    fastify.post("/create", { preHandler: [authRequest] }, createUser);
    fastify.get("/list", { preHandler: [authRequest] }, listUsers);
    fastify.put("/update/:id", { preHandler: [authRequest] }, updateUser);
    fastify.delete("/delete/:id", { preHandler: [authRequest] }, deleteUser);
}
