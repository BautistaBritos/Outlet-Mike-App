import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet} from "react-native";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import { colors } from "../global/colors";
import Search from "../components/Search";

function ItemListCategories({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { category } = route.params;

  useEffect(() => {
    if (category) {
      const products = allProducts.filter((product) => product.category === category);
      const filteredProducts = products.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    }
  }, [category, keyword]);

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