import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <Card style={styles.container}>
      <Pressable onPress={() => setCategorySelected(category)}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    minHeight: 100,
    width: "95%",
    height: "auto",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: colors.champagne_pink,
  },
  text: {
    fontSize: 25,
    fontFamily: "MuktaBold",
    alignSelf: "center",
    color: colors.redwood,
    fontWeight: "bold",
  },
});
