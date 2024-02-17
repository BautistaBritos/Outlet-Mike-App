import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import Card from "./Card";

const ProductItem = ({ product, navigation }) => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (height > width) {
      setIsPortrait(true);
      setIsLandscape(false);
    } else {
      setIsPortrait(false);
      setIsLandscape(true);
    }
  }, [width, height]);

  return (
    <>
      <Pressable
        onPress={() => navigation.navigate("ItemDetail", { id: product.id })}
      >
        <Card style={styles.container}>
          <Text style={width < 350 ? styles.textMin : styles.text}>{product.title}</Text>
          <Image source={{ uri: product.images[0] }} style={styles.image} />
        </Card>
      </Pressable>
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
    borderRadius: 35,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
  textMin: {
    fontSize: 17,
    fontFamily: "MuktaRegular",
  }
});
