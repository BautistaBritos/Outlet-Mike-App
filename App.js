import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import RemoveModal from "./src/components/RemoveModal";
import { Header } from "./src/components/Header";
import { Input } from "./src/components/Input";
import { List } from "./src/components/List";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />
      <Header />
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <List cartItems={cartItems} setModalVisible={setModalVisible} setItemSelected={setItemSelected}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ededed",
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight,
  },
  modalContainer: {
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
