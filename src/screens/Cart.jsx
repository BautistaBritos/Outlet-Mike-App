import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
} from "react-native";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import {  usePostOrderMutation } from "../services/shopService";
import { clearCart } from "../features/shop/cartSlice";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation();
  const { localId } = useSelector((state) => state.authReducer.value);
  const [modal, setModal] = useState(false);

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
    dispatch(clearCart(cartItems));
    setModal(false);
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
            <Text style={styles.total}>Total: ${total}</Text>
          </View>
          <View style={styles.containerButtons}>
            <View style={styles.containerConfirm}>
              <Pressable onPress={handleClearCart}>
                <Text style={styles.clearCartt}>Vaciar carrito</Text>
              </Pressable>
              <Pressable onPress={() => setModal(true)}>
                <Text style={styles.confirm}>Confirmar compra</Text>
              </Pressable>
            </View>
          </View>
          <Modal visible={modal}>
            <ImageBackground
              source={{
                uri: "https://img.freepik.com/foto-gratis/vista-superior-zapatillas-deporte-sobre-fondo-blanco-ropa-equipo-fitness-deporte-moda-accesorios-deporte-sport-healthy-concepto-copia-espacio-concepto-estilo-vida-saludable-deporte-dieta-equipo-deporte_1391-723.jpg",
              }}
              style={styles.container}
              resizeMode="cover"
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    ¿Quieres confirmar la compra?
                  </Text>
                  <View>
                    <View style={styles.buttonModal}>
                      <Pressable style={styles.button} onPress={confirmCart}>
                        <Text style={styles.textStyle}>Confirmar</Text>
                      </Pressable>
                    </View>
                    <View>
                      <Pressable
                        style={styles.button2}
                        onPress={() => setModal(false)}
                      >
                        <Text style={styles.textStyle2}>Cancelar</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </Modal>
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
    justifyContent: "center",
    alignItems: "center",
  },
  containerButtons: {
    height: "15%",
    marginTop: "5%",
  },
  textContainer: {
    fontSize: 18,
    fontFamily: "MuktaBold",
    paddingLeft: "10%",
    paddingBottom: "10%",
  },
  listContainer: {
    height: "65%",
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
    height: "70%",
  },
  total: {
    backgroundColor: "white",
    height: "8%",
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
    textAlign: "center",
  },
  clearCartt: {
    borderRadius: 10,
    color: "white",
    fontSize: 18,
    fontFamily: "MuktaBold",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: colors.burnt_sienna,
    width: "35%",
    height: "62%",
    marginLeft: "33%"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    textAlign: "center",
    fontSize: 18,
  },
  button: {
    borderWidth: 2,
    borderColor: colors.redwood,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: colors.rossy_brown,
    color: colors.burnt_sienna,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  buttonModal: {
    marginVertical: "8%",
  },
  button2: {
    borderWidth: 2,
    borderColor: colors.redwood,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "white",
    color: colors.redwood,
  },
  textStyle2: {
    color: colors.burnt_sienna,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
