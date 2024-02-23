import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import allCartItems from "../data/cart.json";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = allCartItems.reduce(
      (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
      0
    );
    setTotal(total);
    setCartItems(allCartItems);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => <CartItem item={item} />}
          keyExtractor={(cartItem) => cartItem.id}
        />
      </View>
      <View style={styles.total}>
        <Text style={styles.text}>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.seashell,
  },
  total: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    backgroundColor: "#D8D3D2",
    marginHorizontal: "35%",
    height: "7%",
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15
  }
});
