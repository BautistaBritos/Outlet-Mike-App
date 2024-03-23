import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  increment,
  decrement,
} from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../global/colors";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.value);

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Text style={styles.units}>Unidades: </Text>
      <View style={styles.buttonsContainer}>
        <Pressable  onPress={()=> dispatch(decrement())} style={styles.button1}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.counter}>{count}</Text>
        <Pressable onPress={()=> dispatch(increment())} style={styles.button}>
          <Text style={styles.buttonText2}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: "5%",
    marginHorizontal: "25%",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginBottom: "2%",
  },
  button: {
    padding: "3%",
    color: "black",
    paddingVertical: 1
  },
  span: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "MuktaRegular",
  },
  spanInput: {
    width: "43%",
    padding: "2%",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "MuktaRegular",
  },
  buttonText: {
    fontSize: 32,
    fontFamily: "MuktaBold",
    color: "black",
    textAlign: "center",
  },
  counter: {
    backgroundColor: "white",
    fontWeight: "bold",
  },
  buttonText2: {
    fontSize: 30,
    fontFamily: "MuktaRegular",
    color: "black"
  },
  button1: {
    padding: "3%",
    color: "black",
    paddingVertical: 1,
    height: 55,
    width: 35
  },
  units: {
    fontFamily: "MuktaBold",
    fontSize: 18,
    color: colors.redwood,
    textDecorationLine: "underline"
  }
});