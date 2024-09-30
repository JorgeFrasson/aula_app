import { PATHS } from "../../../routes/paths";
import RegisterForm from "./register-form";

export default function RegisterPage(){

    return (
        <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Cadastre-se
            </h2>
            <p className="text-center text-gray-600 mb-6">
                Insira as informações necessárias para se cadastrar
            </p>

            <RegisterForm />

            <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                    Já possui uma conta?{' '}
                    <a href={PATHS.auth.login} className="text-blue-500 font-bold">
                        Entrar
                    </a>
                </p>
            </div>
        </>
    );
}