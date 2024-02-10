import { Image, StyleSheet, Text, View } from "react-native";
import Card from "./Card";

const ProductItem = ({ product }) => {
  return (
    <>
      <Card style={styles.container}>
        <Text style={styles.text}>{product.title}</Text>
        <Image source={{ uri: product.images[0]}} style={styles.image}/>
      </Card>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: "MuktaRegular",
  },
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    height: 130,
    backgroundColor: "white",
    borderRadius: 35
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "black"
  },
});
