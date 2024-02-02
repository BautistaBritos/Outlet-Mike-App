import { Image, Text, View, StyleSheet } from "react-native";
import cartLogo from "../../assets/cart.png";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text>CARRITO</Text>
      <Image style={styles.image} source={cartLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
