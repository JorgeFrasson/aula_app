import { UserRepository } from "../repositories/user.repository";
import { LoginRequest, SignupRequest } from "../models/auth";
import Token from "../utils/token";
import { SaveUserRequest } from "../dto/userDTO";
import { UserService } from "./user.service";

export class AuthService {
    private userService: UserService;
    private userRepository: UserRepository;
    private token: Token;

    constructor() {
        this.userRepository = new UserRepository();
        this.userService = new UserService();
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

    async register(request: SaveUserRequest) {
        const user = await this.userService.createUser(request);

        return user;
    }
}