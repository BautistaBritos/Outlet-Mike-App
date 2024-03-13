import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import { clearCart } from "../features/shop/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation();
  const { localId } = useSelector((state) => state.authReducer.value);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart(cartItems));
  };

  const confirmCart = () => {
    const createdAt = Date.now();
    triggerPost({
      localId,
      total,
      cartItems,
      localId: localId,
      createdAt: createdAt,
      orderId: Math.ceil(Math.random(1, 10) * 1000),
    });
    dispatch(clearCart(cartItems))
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <View>
          <Text style={styles.textContainer}>Tus Productos seleccionados</Text>
          <View style={styles.listContainer}>
            <FlatList
              data={cartItems}
              renderItem={({ item }) => <CartItem item={item} />}
              keyExtractor={(cartItem) => cartItem.id}
            />
          </View>
          <View style={styles.containerButtons}>
            <View style={styles.containerConfirm}>
              <Pressable onPress={handleClearCart}>
                <Text style={styles.clearCartt}>Vaciar carrito</Text>
              </Pressable>
              <Text style={styles.total}>Total: ${total}</Text>
            </View>
            <View>
              <Pressable onPress={confirmCart}>
                <Text style={styles.confirm}>Confirmar compra</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ) : (
        <Text style={styles.noProductSelected}>No hay productos agregados</Text>
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
  containerButtons: {
    height: "15%",
    alignItems: "center",
  },
  textContainer: {
    fontSize: 18,
    fontFamily: "MuktaBold",
    paddingLeft: "10%",
    paddingTop: "7%",
    paddingBottom: "5%",
  },
  listContainer: {
    height: "65%",
  },
  containerConfirm: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  confirm: {
    borderRadius: 10,
    color: "white",
    fontSize: 18,
    fontFamily: "MuktaBold",
    alignSelf: "center",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: colors.redwood,
    height: "85%",
  },
  total: {
    backgroundColor: "white",
    height: "40%",
    borderRadius: 10,
    color: colors.burnt_sienna,
    fontSize: 18,
    fontFamily: "MuktaBold",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: colors.redwood,
    width: "40%",
    textAlign: "center",
    textAlignVertical: "center",
  },
  noProductSelected: {
    fontFamily: "MuktaRegular",
    fontSize: 20,
    marginVertical: "10%",
    textAlign: "center"
  },
  clearCartt: {
    borderRadius: 10,
    color: "white",
    fontSize: 18,
    fontFamily: "MuktaBold",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: colors.redwood,
    width: "100%",
    height: "40%",
  },
});
