"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../repositories/user.repository");
class UserService {
    constructor() {
        this.userRepository = new user_repository_1.UserRepository();
    }
    async createUser(request) {
        try {
            const username = this.validateUsername(request.username);
            const password = this.validatePassword(request.password);
            const cpf = this.validateCpf(request.cpf);
            const email = request.email;
            await this.checkCpfExists(request.cpf);
            await this.checkEmailExists(request.email);
            await this.checkUsernameExists(request.username);
            let user = {
                name: request.name,
                email,
                password,
                username,
                cpf
            };
            user = await this.userRepository.createUser(user);
            return user;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    validateCpf(cpf) {
        return cpf;
    }
    async checkEmailExists(email) {
        const user = await this.userRepository.getUserByEmail(email);
        if (user) {
            throw new Error("Este email já está cadastrado!");
        }
    }
    async checkUsernameExists(username) {
        const user = await this.userRepository.getUserByUsername(username);
        if (user) {
            throw new Error("Este usuário já está cadastrado!");
        }
    }
    async checkCpfExists(cpf) {
        const user = await this.userRepository.getUserByCpf(cpf);
        if (user) {
            throw new Error("Este CPF já está cadastrado!");
        }
    }
    validateUsername(username) {
        if (!username) {
            throw new Error("O login é obrigatório");
        }
        if (username.length < 8) {
            throw new Error("O username precisa ter no mínimo 8 caracteres.");
        }
        return username;
    }
    validatePassword(password) {
        if (!password) {
            throw new Error("A senha é obrigatória");
        }
        if (password.length <= 5) {
            throw new Error("A senha precisa possuir no mínimo 6 caracteres");
        }
        return password;
    }
    async listUsers() {
        try {
            const users = await this.userRepository.getUsers();
            return users;
        }
        catch (error) {
            console.log(error);
            throw new Error("Erro ao listar os usuários.");
        }
    }
    async updateUser(id, request) {
        try {
            const username = this.validateUsername(request.username);
            const password = this.validatePassword(request.password);
            const email = request.email;
            const userDB = await this.userRepository.getUserById(id);
            if (!userDB) {
                throw new Error("Usuário não encontrado!");
            }
            await this.checkEmailExists(request.email);
            await this.checkUsernameExists(request.username);
            const updatedUser = {
                email,
                password,
                username,
                name: request.name,
            };
            const user = await this.userRepository.updateUser(id, updatedUser);
            return user;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteUser(id) {
        try {
            const userDB = await this.userRepository.getUserById(id);
            if (!userDB) {
                throw new Error("Usuário não encontrado!");
            }
            if (userDB?.administrator) {
                throw new Error("Não é possível excluir este usuário!");
            }
            await this.userRepository.deleteUser(id);
            return;
        }
        catch (error) {
            console.log(error);
            throw new Error("Erro ao tentar excluir usuário!");
        }
    }
}
exports.UserService = UserService;
