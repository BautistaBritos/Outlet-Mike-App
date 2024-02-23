import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  return (
    <Card style={styles.container}>
      <Pressable
        onPress={() => {
          dispatch(setCategorySelected(category));
          navigation.navigate("ItemListCategories", { category });
        }}
      >
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
