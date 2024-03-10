import { FlatList, StyleSheet, View, ImageBackground } from "react-native";
import CategoryItem from "./CategoryItem";
import fondo from "../../assets/fondo-app2.jpg";
import Counter from "./Counter";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/shopService";

function Categories({ navigation }) {
  //const categories = useSelector((state) => state.shopReducer.value.categories);

  const { data, isLoading, error } = useGetCategoriesQuery();

  return (
    <View>
      <ImageBackground source={fondo} style={styles.container} resizeMode="repeat">
        <Counter />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CategoryItem navigation={navigation} category={item} />
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
