import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "../../hooks/use-router";
import { PATHS } from "../../routes/paths";
import * as Yup from "yup";
import TextField from "../../components/form/text-field";
import { useCallback } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../api/auth";

export default function LoginPage(){
    const router = useRouter();
    
    const loginSchema = Yup.object({
        username: Yup.string().required("O login é obrigatório"),
        password: Yup.string().required("A senha é obrigatória")
    });
    
    const methods = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    const handleSubmit = useCallback(async (data: any) => {
        const res = await login(data);
        if(res?.status == 200){
            console.log(res.data);
            router.push(PATHS.dashboard.root);
        }
    }, [methods]);

    return (
        <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Entrar
            </h2>
            <p className="text-center text-gray-600 mb-6">
                Por favor insira o usuário e senha para efetuar login
            </p>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleSubmit)}>
                    <TextField name="username" id="username" type="text" placeholder="meu.usuario" label="Login"/>
                    <TextField name="password" id="password" type="password" placeholder="••••••••" label="Senha"/>
                
                    <div className="flex justify-start mb-4">
                        <input
                            id={"remember-password"}
                            type="checkbox"
                            className="mr-2 leading-tight"
                        />
                        <label className="text-gray-700 text-sm font-bold" htmlFor={"remember-password"}>
                            Lembrar minha senha
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md font-bold hover:bg-blue-600 transition duration-300"
                    >
                        Entrar
                    </button>
                </form>
            </FormProvider>

            <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                    Deseja se cadastrar?{' '}
                    <span 
                        onClick={() => router.push(PATHS.auth.register)}
                        className="text-blue-500 font-bold cursor-pointer"
                    >
                        Registrar
                    </span>
                </p>
            </div>
        </>
    );
}