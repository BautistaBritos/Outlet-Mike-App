import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";
import { colors } from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/shop/cartSlice";
import Counter from "../components/Counter";
import { reset } from "../features/counter/counterSlice";

const ItemDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState(null);

  const { id } = route.params;

  const count = useSelector((state) => state.counterReducer.value);

  const dispatch = useDispatch();

  const onAddCart = () => {
    dispatch(addItem({ ...product, quantity: count }));
    dispatch(reset());
  };

  useEffect(() => {
    const productFinded = allProducts.find((product) => product.id === id);
    setProduct(productFinded);
  }, [id]);

  return (
    <View style={styles.main}>
      {product ? (
        <View style={styles.container}>
          <Image
            source={{ uri: product.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.descriptionText}>{product.title}</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <Text style={styles.descriptionText}>Stock: {product.stock}</Text>
            <Text style={styles.descriptionTextPrice}>${product.price}</Text>
            <Counter />
            <View style={styles.buyContainer}>
              <Pressable style={styles.buy} onPress={onAddCart}>
                <Text style={styles.buyText}>Comprar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Text>Cargando...</Text>
        </View>
      )}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "35%",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  descriptionText: {
    fontFamily: "MuktaRegular",
    fontSize: 21,
    color: "black",
    paddingVertical: "1%",
  },
  descriptionTextPrice: {
    fontFamily: "MuktaRegular",
    fontSize: 25,
    color: "black",
    paddingVertical: "1%",
  },
  buy: {
    padding: "2%",
    borderRadius: 6,
    backgroundColor: colors.redwood,
  },
  buyText: {
    fontFamily: "MuktaBold",
    fontSize: 22,
    color: "white",
  },
  buyContainer: {
    alignSelf: "center"
  }
});
