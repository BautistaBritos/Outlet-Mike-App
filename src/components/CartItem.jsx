import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.images[0]}} style={styles.image}/>
      <Text>{item.title}</Text>
      <Text>{item.quantity} Uds</Text>
      <Text>${item.price}</Text>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    minHeight: 100,
    width: "95%",
    height: "30%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "space-evenly"
  },
  image: {
    width: "25%",
    height: "50%",
  }
})