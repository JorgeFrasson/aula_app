"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const user_repository_1 = require("../repositories/user.repository");
const token_1 = __importDefault(require("../utils/token"));
class AuthService {
    constructor() {
        this.userRepository = new user_repository_1.UserRepository();
        this.token = new token_1.default();
    }
    async login(request) {
        const user = await this.userRepository.getUserByUsername(request.username);
        if (!user) {
            throw new Error("Usuário não encontrado!");
        }
        if (request.password != user.password) {
            throw new Error("Senha inválida!");
        }
        const token = await this.token.generateToken({ userId: user.id });
        return { token };
    }
}
exports.AuthService = AuthService;
