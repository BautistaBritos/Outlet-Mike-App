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
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: "20%",
    marginBottom: "5%"
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
    backgroundColor: "gray",
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
    fontSize: 18,
    fontFamily: "MuktaRegular",
    color: "white",
  },
  counter: {
    backgroundColor: "white",
    fontWeight: "bold",
  }
});