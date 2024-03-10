import { object, string, ref } from "yup";

export const signupSchema = object().shape({
  email: string().required("El Email es requerido").email("Email invalido"),
  password: string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Las contraseñas no son iguales")
    .required(),
});