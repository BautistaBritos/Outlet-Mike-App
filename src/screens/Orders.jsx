import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import OrderItem from "../components/OrderItem";
import { useGetOrdersQuery } from "../services/shopService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { colors } from "../global/colors";

const Orders = () => {
  const { localId } = useSelector((state) => state.authReducer.value);
  const { data, isLoading, error } = useGetOrdersQuery(localId);
  const [orderData, setOrderData] = useState([]);
  const [orderIdSelected, setOrderIdSelected] = useState("");
  const [orderSelected, setOrderSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (data) {
      const orderData = Object.values(data);
      setOrderData(orderData);
    }
  }, [data, isLoading]);

  useEffect(() => {
    const orderSelected = orderData.find(
      (order) => order.orderId === orderIdSelected
    );
    setOrderSelected(orderSelected);
  }, [orderIdSelected]);

  const renderOrderItem = ({ item }) => {
    return (
      <OrderItem
        order={item}
        setOrderId={setOrderIdSelected}
        setModalVisible={setModalVisible}
      />
    );
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <>
          <Text style={styles.titleOrders}>Tus ordenes de compra</Text>
          <FlatList data={orderData} renderItem={renderOrderItem} />
          <Modal visible={modalVisible}>
            <ImageBackground
              source={{
                uri: "https://i.pinimg.com/170x/20/49/be/2049bef9a5ebc93e128350b545c51c8a.jpg",
              }}
              style={styles.container}
              resizeMode="cover"
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Numero de orden: {orderIdSelected}
                  </Text>
                  <Text style={styles.modalText}>
                    Total: ${orderSelected?.total}
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.textStyle}>Cerrar</Text>
                  </Pressable>
                </View>
              </View>
            </ImageBackground>
          </Modal>
        </>
      )}
    </>
  );
};

export default Orders;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
  },
  modalView: {
    margin: "7%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "9%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2,
  },
  button: {
    borderRadius: 20,
    padding: "4%",
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: colors.burnt_sienna,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: "6%",
    textAlign: "center",
    fontFamily: "MuktaBold",
    fontSize: 16,
  },
  titleOrders: {
    paddingVertical: "7%",
    fontSize: 18,
    fontFamily: "MuktaBold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: colors.seashell,
    justifyContent: "center",
    alignItems: "center",
  },
});
