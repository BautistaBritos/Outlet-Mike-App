import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation()
  const { localId } = useSelector((state) => state.authReducer.value);

   const confirmCart = ()=> {
    triggerPost( {localId , total, cartItems, user: "loggedUser"})
  }

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
      <View>
        <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(cartItem) => cartItem.id}
          />
          <Text style={styles.total}>Total: ${total}</Text>
          <Pressable onPress={confirmCart}>
            <Text>Confirm</Text>
          </Pressable>
      </View>
      ) : (
        <Text>No hay productos agregados</Text>
      )}
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
