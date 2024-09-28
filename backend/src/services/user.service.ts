import { User } from "@prisma/client";
import { SaveUserRequest, UpdateUserRequest } from "../dto/userDTO";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(request: SaveUserRequest) {
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
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private validateCpf(cpf: string) {
        return cpf;
    }

    private async checkEmailExists(email: string) {
        const user = await this.userRepository.getUserByEmail(email);

        if(user){
            throw new Error("Este email já está cadastrado!");
        }
    }

    private async checkUsernameExists(username: string) {
        const user = await this.userRepository.getUserByUsername(username);

        if(user){
            throw new Error("Este usuário já está cadastrado!");
        }
    } 

    private async checkCpfExists(cpf: string) {
        const user = await this.userRepository.getUserByCpf(cpf);

        if(user){
            throw new Error("Este CPF já está cadastrado!");
        }
    }

    private validateUsername(username: string) {
        if(!username){
            throw new Error("O login é obrigatório");
        }
        
        if (username.length < 8) {
            throw new Error("O username precisa ter no mínimo 8 caracteres.");
        }
    
        return username; 
    }
    
    private validatePassword(password: string) {
        if(!password){
            throw new Error("A senha é obrigatória");
        }

        if(password.length <= 5) {
            throw new Error("A senha precisa possuir no mínimo 6 caracteres");
        }
    
        return password;
    }

    async listUsers() {
        try {
            const users = await this.userRepository.getUsers();
    
            return users;
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao listar os usuários.");
        }
    }

    async updateUser(id: number, request: UpdateUserRequest) {
        try {
            const username = this.validateUsername(request.username);
            const password = this.validatePassword(request.password);
            const email = request.email;
            
            const userDB = await this.userRepository.getUserById(id);

            if(!userDB){
                throw new Error("Usuário não encontrado!");
            }

            await this.checkEmailExists(request.email);
            await this.checkUsernameExists(request.username);

            const updatedUser = {
                email,
                password,
                username,
                name: request.name,
            }

            const user = await this.userRepository.updateUser(id, updatedUser);
            
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteUser(id: number) {
        try {
            const userDB = await this.userRepository.getUserById(id);
            
            if(!userDB){
                throw new Error("Usuário não encontrado!");
            }
            
            if(userDB?.administrator){
                throw new Error("Não é possível excluir este usuário!");
            }
            
            await this.userRepository.deleteUser(id);

            return;
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao tentar excluir usuário!");
        }
    }
}