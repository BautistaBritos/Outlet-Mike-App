import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export const List = ({ cartItems, setModalVisible, setItemSelected }) => {
  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
  };

  return (
    <View style={styles.productList}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Text style={styles.product}>{item.name}</Text>
            <Pressable onPress={() => handleModal(item.id)}>
              <Text style={{ fontSize: 20 }}>🗑️</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    productList: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
    },
    product: {
      fontSize: 16,
      fontWeight: "bold",
      padding: 4,
    },
    list: {
      width: 300,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
  
