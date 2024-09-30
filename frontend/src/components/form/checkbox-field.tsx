import { useFormContext } from 'react-hook-form';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  validationRules?: object; // Regras de validação do react-hook-form
}

export default function CheckboxField({
  id,
  label,
  validationRules = {},
  ...inputProps // Usa o operador spread para incluir todas as props adicionais
}: CheckboxProps) {
  // Obtenha o register e errors do contexto do useFormContext
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="mb-4 flex-col">
      <div className="flex justify-start">
        <input
          id={id}
          type="checkbox"
          {...register(id, validationRules)} // Conecta o campo com o react-hook-form
          className="mr-2 leading-tight"
          {...inputProps} // Passa todas as props adicionais para o input
          />
        <label className="text-gray-700 text-sm font-bold" htmlFor={id}>
          {label}
        </label>
      </div>
      {errors[id] && (
        <p className="text-red-500 text-xs italic mt-1">
            {typeof errors[id]?.message === "string" ? errors[id]?.message : ''}
        </p>
      )}
    </div>
  );
}