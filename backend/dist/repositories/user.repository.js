"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const client_1 = __importDefault(require("../../prisma/client"));
class UserRepository {
    async createUser(user) {
        return await client_1.default.user.create({ data: user });
    }
    async getUsers() {
        return client_1.default.user.findMany();
    }
    async getUserById(id) {
        return await client_1.default.user.findUnique({
            where: { id },
        });
    }
    async getUserByEmail(email) {
        return await client_1.default.user.findUnique({
            where: { email },
        });
    }
    async getUserByUsername(username) {
        return await client_1.default.user.findUnique({
            where: { username },
        });
    }
    async getUserByCpf(cpf) {
        return await client_1.default.user.findUnique({
            where: { cpf },
        });
    }
    async deleteUser(id) {
        return await client_1.default.user.delete({
            where: { id },
        });
    }
    async updateUser(id, userUpdated) {
        return await client_1.default.user.update({
            where: { id },
            data: userUpdated,
        });
    }
}
exports.UserRepository = UserRepository;
