export type SaveUserRequest = {
    name: string;
    email: string;
    cpf: string;
    password: string;
    username: string;
}

export type UpdateUserRequest = {
    name: string;
    email: string;
    password: string;
    username: string;
}