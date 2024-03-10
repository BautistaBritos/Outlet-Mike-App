import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import { useGetOrdersQuery } from "../services/shopService";

const OrderItem = ({ item }) => {
  const total = item.items.reduce(
    (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Numero de orden: {item.id}</Text>
      <Text>Fecha: {new Date(item.createdAt).toLocaleString()}</Text>
      <Text>Valor: ${total}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 15,
  },
  container: {
    marginVertical: "6%",
    backgroundColor: colors.seashell,
    borderRadius: 30,
    height: 80,
    justifyContent: "center",
    paddingLeft: "10%",
  }
});