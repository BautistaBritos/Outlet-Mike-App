import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  increment,
  decrement,
  reset,
} from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../global/colors";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.value);

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable  onPress={()=> dispatch(decrement())} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.counter}>{count}</Text>
        <Pressable onPress={()=> dispatch(increment())} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.resetContainer}>
        <Pressable onPress={()=> dispatch(reset())}>
          <Text style={styles.resetText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "gray",
  },
  span: {
    width: "43%",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "MuktaRegular",
  },
  spanInput: {
    width: "43%",
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "MuktaRegular",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "MuktaRegular",
    color: "white",
  },
  resetText: {
    fontSize: 18,
    fontFamily: "MuktaRegular",
    fontWeight: "bold",
  },
  resetContainer: {
    backgroundColor: colors.champagne_pink,
    height: 40,
    width: 70,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
  },
  counter: {
    backgroundColor: "white",
    fontWeight: "bold",
  }
});