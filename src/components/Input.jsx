import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";

export const Input = ({inputValue, setInputValue, cartItems, setCartItems,}) => {
  const handleInputChange = (value) => setInputValue(value);

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleInputChange}
        value={inputValue}
        style={styles.input}
        placeholder="Ingrese un producto"
      />
      <Pressable onPress={addItem}>
        <Text style={{ fontSize: 40 }}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { flexDirection: "row", justifyContent: "space-around"},
  input: {
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "90%",
  },
});
