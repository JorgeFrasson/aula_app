import { LoginRequest } from "../models/auth";
import { UserRepository } from "../repositories/user.repository";
import Token from "../utils/token";

export class AuthService {
    private userRepository: UserRepository;
    private token: Token;

    constructor() {
        this.userRepository = new UserRepository();
        this.token = new Token();
    }

    async login(request: LoginRequest) {
        const user = await this.userRepository.getUserByUsername(request.username);

        if(!user){
            throw new Error("Usuário não encontrado!");
        }
        
        if(request.password != user.password){
            throw new Error("Senha inválida!");
        }

        const token = await this.token.generateToken({ userId: user.id });

        return { token }
    }
}