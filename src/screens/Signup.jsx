import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authService";
import SubmitButton from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import { colors } from "../global/colors";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    try {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      signupSchema.validateSync({ password, confirmPassword, email });
      triggerSignup({ email, password });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result]);

  return (
    <ImageBackground
      source={{
        uri: "https://img.freepik.com/foto-gratis/vista-superior-zapatillas-deporte-sobre-fondo-blanco-ropa-equipo-fitness-deporte-moda-accesorios-deporte-sport-healthy-concepto-copia-espacio-concepto-estilo-vida-saludable-deporte-dieta-equipo-deporte_1391-723.jpg",
      }}
      style={styles.container}
      resizeMode="cover"
    >
      <View>
        <Text style={styles.textRegister}>Registro</Text>
        <View style={styles.backgroundInput}>
          <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
          <InputForm
            label={"Contraseña"}
            error={errorPassword}
            onChange={setPassword}
            isSecure={true}
          />
          <InputForm
            label={"Confirmar contraseña"}
            error={errorConfirmPassword}
            onChange={setConfirmPassword}
            isSecure={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <SubmitButton title={"Registro"} onPress={onSubmit} />
        </View>
        <View style={styles.login}>
          <Text style={styles.textLogin}>¿Ya te registraste?</Text>
          <Pressable
            style={styles.buttonLogin}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.textLogin2}>Logueate aqui!</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textRegister: {
    fontFamily: "MuktaRegular",
    fontSize: 30,
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "8%",
    color: colors.redwood,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "9%",
  },
  textLogin: {
    fontSize: 16,
    marginRight: "2%",
  },
  textLogin2: {
    fontSize: 16,
    color: "blue",
  },
  login: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: "5%",
  },
  backgroundInput: {
    backgroundColor: "white",
    width: "80%",
    marginHorizontal: "10%",
    borderRadius: 15,
    height: "50%",
    justifyContent: "center",
  },
});
