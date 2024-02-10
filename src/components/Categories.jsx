import { FlatList, StyleSheet, View, ImageBackground } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import fondo from "../../assets/fondo-app2.jpg";

function Categories({ setCategorySelected }) {
  return (
    <View>
      <ImageBackground source={fondo} style={styles.container} resizeMode="repeat">
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryItem
              setCategorySelected={setCategorySelected}
              category={item}
            />
          )}
          keyExtractor={(category) => category}
        />
      </ImageBackground>
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
