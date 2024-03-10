import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

const MyProfile = ({ navigation }) => {
  const { profileImage, imageCamera } = useSelector((state) => state.authReducer.value);

  return (
    <View style={styles.container}>
      {profileImage || imageCamera ? (
        <Image
          source={{ uri: profileImage || imageCamera }}
          resizeMode="cover"
          style={styles.image}
        />
      ) : (
        <>
          <Image
            source={require("../../assets/imageProfile.webp")}
            style={styles.image}
            resizeMode="cover"
          />
        </>
      )}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Image Selector")}
      >
        <Text style={styles.text}>Añadir foto de perfil</Text>
      </Pressable>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: "42%",
    height: "45%",
    borderRadius: 80
  },
  button: {
    width: "80%",
    elevation: 10,
    backgroundColor: colors.redwood,
    justifyContent: "center",
    alignItems: "center",
    padding: "3%",
    borderRadius: 15
  },
  text: {
    fontFamily: "MuktaRegular",
    fontSize: 18,
    color: "white",
  },
});