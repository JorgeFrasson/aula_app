import { useFormContext } from 'react-hook-form';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  validationRules?: object; // Regras de validação do react-hook-form
}

export default function TextField({
  id,
  label,
  type = "text",
  placeholder,
  validationRules = {},
  ...inputProps
}: TextFieldProps) {
  // Obtenha o register e errors do contexto do useFormContext
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, validationRules)} // Conecta o campo com o react-hook-form
        className={`w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[id] ? 'border-red-500' : ''}`}
        {...inputProps}
      />
      {errors[id] && (
        <p className="text-red-500 text-xs italic mt-1">
            {typeof errors[id]?.message === "string" ? errors[id]?.message : ''}
        </p>
      )}
    </div>
  );
}