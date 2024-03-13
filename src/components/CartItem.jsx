import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/shop/cartSlice";

const CartItem = ({ item }) => {

  const dispatch = useDispatch()

  const onRemoveItem = () => {
    dispatch(removeItem({id: item.id}));
    console.log(item.id);
  };

  return (
    <View>
      <View style={styles.container}>
        <Image source={{ uri: item.images[0] }} style={styles.image} />
        <Text>{item.title}</Text>
        <Text>{item.quantity} Uds</Text>
        <Text>${item.price}</Text>
        <Pressable onPress={onRemoveItem}>
          <Entypo name="trash" size={26} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    minHeight: 100,
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    marginVertical: "4%",
  },
  image: {
    width: "25%",
    height: "50%",
  },
});
