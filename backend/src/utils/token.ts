import jwt from 'jsonwebtoken';

export default class Token {
    private secret: string;

    constructor() {
        this.secret = process.env.SECRET || 'defaultsupersecret';    
    }

    public async generateToken(payload: object) {
        return jwt.sign(payload, this.secret, { expiresIn: '1h' });
    };
    
    public async verifyToken(token: string) {
        try {
            return await jwt.verify(token, this.secret);
        } catch (error) {
            throw new Error("Token inválido");
        }
    };
}
