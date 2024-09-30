import { FormProvider, useForm } from "react-hook-form";
import TextField from "../../../components/form/text-field";
import CheckboxField from "../../../components/form/checkbox-field";
import { useCallback, useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { register } from "../../../api/auth";
import { useRouter } from "../../../hooks/use-router";
import { PATHS } from "../../../routes/paths";


export default function RegisterForm(){
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const registerSchema = Yup.object({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string().email("Informe um email válido").required("O email é obrigatório"),
        cpf: Yup.string().required("O CPF é obrigatório"),
        username: Yup.string().required("O login é obrigatório"),
        password: Yup.string().required("A senha é obrigatória"),
        confirmPassword: Yup.string()
            .test('passwords-match', 'As senhas devem ser iguais', function(value){
                return this.parent.password === value
            }),
        termsAccept: Yup.bool().oneOf([true], "Aceitar os termos é obrigatório para se cadastrar")
    });

    const methods = useForm({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            name: "",
            cpf: "",
            email: "",
            password: "",
            termsAccept: false,
            confirmPassword: "",
            username: ""
        }
    });

    const handleSubmit = useCallback(async (data: any) => {
        const res = await register(data);

        if(res && res.status && res.status == 400){
            setErrorMessage(res.data.message);
        } 

        if(res && res.status && res.status == 200){
            router.push(PATHS.auth.login);
        } 

    }, [methods]);

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
                <TextField name="name" id="name" label="Nome Completo" placeholder="Nome completo"/>            
                <TextField name="username" id="username" label="Login" placeholder="name.example"/>            
                <TextField name="cpf" id="cpf" label="CPF" placeholder="***.***.***-**"/>
                <TextField name="email" id="email" label="Email" placeholder="example@email.com"/>
                <TextField name="password" id="password" type="password" label="Senha" placeholder="••••••••"/>
                <TextField name="confirmPassword" id="confirmPassword" type="password" label="Confirmar Senha" placeholder="••••••••"/>
                <CheckboxField name="termsAccept" id="termsAccept" label="Aceito os termos propostos"/>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md font-bold hover:bg-blue-600 transition duration-300"
                >
                    Cadastrar
                </button>

                { errorMessage &&
                    <p className="text-red-500 text-xs italic mt-1">
                        {errorMessage}
                    </p>
                }
            </form>
        </FormProvider>
    );
}