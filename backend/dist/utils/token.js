"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Token {
    constructor() {
        this.secret = process.env.SECRET || 'defaultsupersecret';
    }
    async generateToken(payload) {
        return jsonwebtoken_1.default.sign(payload, this.secret, { expiresIn: '1h' });
    }
    ;
    async verifyToken(token) {
        try {
            return await jsonwebtoken_1.default.verify(token, this.secret);
        }
        catch (error) {
            throw new Error("Token inválido");
        }
    }
    ;
}
exports.default = Token;
