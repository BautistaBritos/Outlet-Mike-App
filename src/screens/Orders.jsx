import { FlatList, StyleSheet, Text, View } from "react-native";
import orders from "../data/orders.json";
import OrderItem from "../components/OrderItem";

const Orders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tus Compras</Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={(order) => order.id}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: "8%",
  },
  text: {
    fontSize: 20,
    marginBottom: "7%",
    textDecorationLine: "underline"
  }
});