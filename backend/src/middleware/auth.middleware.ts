import { UserRepository } from "../repositories/user.repository";
import Token from "../utils/token";

export default class AuthMiddleware {
    private tokenUtil: Token;
    private userRepository: UserRepository; 

    constructor() {
        this.tokenUtil = new Token();
        this.userRepository = new UserRepository();        
    }

    public async validateToken(request: any, reply: any) {
        try {
            const authHeader = request.headers['authorization'];
            
            const token = authHeader && authHeader.split(' ')[1]; // Pega o token do header "Authorization"
            
            if (!token) {
                return reply.status(401).send({ message: 'Token é obrigatório' });
            }

            const decoded = await this.tokenUtil.verifyToken(token);
            
            const userId = decoded['userId'];

            const user = await this.userRepository.getUserById(userId);
            
            if(!user){
                return reply.status(401).send({ message: "Usuário não encontrado!" });
            }

            return reply.auth = { user };
        } catch (err) {
            return reply.status(403).send({ message: 'Token inválido' });
        }
    }
}