import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { loginSchema } from "../validations/loginSchema";
import { useLoginMutation } from "../services/authService";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { insertSession } from "../db/";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerLogin, result] = useLoginMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken,
      })
        .then((result) => console.log(result))
        .catch((err) => console.log(err.message));
    }
  }, [result]);

  const onSubmit = () => {
    try {
      setErrorMail("");
      setErrorPassword("");
      loginSchema.validateSync({ password, email });
      triggerLogin({ email, password });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  return (
    <ImageBackground
      source={{
        uri: "https://img.freepik.com/foto-gratis/vista-superior-zapatillas-deporte-sobre-fondo-blanco-ropa-equipo-fitness-deporte-moda-accesorios-deporte-sport-healthy-concepto-copia-espacio-concepto-estilo-vida-saludable-deporte-dieta-equipo-deporte_1391-723.jpg",
      }}
      style={styles.container}
      resizeMode="cover"
    >
      <View>
        <Text style={styles.textRegister}>Outlet Mike</Text>
        <Text style={styles.textRegister2}>¡Los mejores precios para vos!</Text>
        <View style={styles.backgroundInput}>
          <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
          <InputForm
            label={"Contraseña"}
            error={errorPassword}
            onChange={setPassword}
            isSecure={true}
          />
        </View>
        {result.isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <View style={styles.buttonContainer}>
            <SubmitButton title={"Entrar"} onPress={onSubmit} />
          </View>
        )}
        <View style={styles.containerRegister}>
          <Text style={styles.textAccount}>¿No tienes cuenta?</Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.textAccount2}>Registrate aqui!</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textRegister: {
    fontFamily: "MuktaRegular",
    fontSize: 30,
    textAlign: "center",
    marginTop: "3%",
    color: colors.redwood,
    fontWeight: "bold",
  },
  textRegister2: {
    fontFamily: "MuktaRegular",
    fontSize: 18,
    textAlign: "center",
    marginBottom: "10%",
    marginTop: "2%",
    color: colors.redwood,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "9%",
  },
  buttonLogin: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "5%",
  },
  textLogin: {
    fontSize: 16,
  },
  containerRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: "5%",
  },
  textAccount: {
    fontSize: 16,
    marginRight: "2%",
  },
  textAccount2: {
    fontSize: 16,
    color: "blue",
  },
  backgroundInput: {
    backgroundColor: "white",
    width: "80%",
    marginHorizontal: "10%",
    borderRadius: 15,
    height: "35%",
    justifyContent: "center",
  }
});
