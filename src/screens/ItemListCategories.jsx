import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet} from "react-native";
import ProductItem from "../components/ProductItem";
import { colors } from "../global/colors";
import Search from "../components/Search";
import { useSelector } from "react-redux";

function ItemListCategories({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const productsFilteredByCategory = useSelector(
    (state) => state.shopReducer.value.productsFilteredByCategory
  );

  useEffect(() => {
    const productsFiltered = productsFilteredByCategory.filter((product)=> product.title.includes(keyword))
    setProducts(productsFiltered)
  }, [productsFilteredByCategory, keyword]);

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation}/>}
        keyExtractor={(item) => item.id}
        style={{marginTop: "5%"}}
      />
    </View>
  );
}

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.seashell
  },
});