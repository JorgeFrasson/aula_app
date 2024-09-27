import { SaveUserRequest } from "../models/user";
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
            const email = request.email;
    
            const user = this.userRepository.createUser({
                name: request.name,
                email,
                password,
                username
            });
            
            return user;
        } catch (error) {
            console.log(error);
            throw error;
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
}