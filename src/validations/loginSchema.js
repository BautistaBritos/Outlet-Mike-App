import { object, string } from "yup";

export const loginSchema = object().shape({
  email: string().required("Se requiere un email").email("Email invalido"),
  password: string()
    .required("Se requiere la contraseña")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});