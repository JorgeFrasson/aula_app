"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("../repositories/user.repository");
const token_1 = __importDefault(require("../utils/token"));
class AuthMiddleware {
    constructor() {
        this.tokenUtil = new token_1.default();
        this.userRepository = new user_repository_1.UserRepository();
    }
    async validateToken(request, reply) {
        try {
            const authHeader = request.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1]; // Pega o token do header "Authorization"
            if (!token) {
                return reply.status(401).send({ message: 'Token é obrigatório' });
            }
            const decoded = await this.tokenUtil.verifyToken(token);
            const userId = decoded['userId'];
            const user = await this.userRepository.getUserById(userId);
            if (!user) {
                return reply.status(401).send({ message: "Usuário não encontrado!" });
            }
            return reply.auth = { user };
        }
        catch (err) {
            return reply.status(403).send({ message: 'Token inválido' });
        }
    }
}
exports.default = AuthMiddleware;
