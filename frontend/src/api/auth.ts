import { AxiosError } from "axios";
import { axiosInstance, setAxiosAuthorization } from "./axios";

export async function register(data: RegisterRequest){
    try {
        const request = JSON.stringify(data);

        const res = await axiosInstance.post("/auth/register", request, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        if(res.status == 200){
            return {
                status: 200,
                data: {
                    message: "Usuário cadastrado com sucesso!"
                }

            };
        }
    } catch (err) {
        const error = err as AxiosError;

        return {
            status: 400,
            data: {
                message: error.response?.data as string
            }
        }
    }
} 

export async function login(data: LoginRequest){
    try {
        const request = JSON.stringify(data);

        const res = await axiosInstance.post("/auth/login", request, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        if(res.status == 200){
            setAxiosAuthorization(res.data.token);
            return {
                status: 200,
                data: {
                    message: "Login efetuado com sucesso!",
                    token: res.data.token
                }

            };
        }
    } catch (err) {
        const error = err as AxiosError;

        return {
            status: 400,
            data: {
                message: error.response?.data as string
            }
        }
    }
} 

export type RegisterRequest = {
    name: string;
    email: string;
    cpf: string;
    password: string;
    confirmPassword: string;
    termsAccept: boolean;
}

export type LoginRequest = {
    username: string;
    password: string;
}