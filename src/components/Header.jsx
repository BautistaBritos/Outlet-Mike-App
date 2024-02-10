import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";
import { AntDesign } from '@expo/vector-icons';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Outlet Mike</Text>
      <AntDesign name="shoppingcart" size={28} color="black" />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: "8%",
    width: "100%",
    backgroundColor: colors.burnt_sienna,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 23,
    fontFamily: "MuktaBold",
    marginHorizontal: "30%"
  },
});