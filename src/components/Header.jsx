import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function Header({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.burnt_sienna,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 60,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontFamily: "MuktaBold",
    marginHorizontal: "30%"
  },
});