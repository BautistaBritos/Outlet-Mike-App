import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/auth/authSlice";
import { usePostProfileImageMutation } from "../services/shopService";
import { colors } from "../global/colors";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  const confirmImage = () => {
    dispatch(setCameraImage(image));
    triggerSaveProfileImage({ localId, image });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.textsContainer}>
            <Pressable onPress={pickImage} style={styles.space}>
              <Text style={styles.textPhoto}>Tomar otra foto</Text>
            </Pressable>
            <Pressable onPress={confirmImage} style={styles.space}>
              <Text style={styles.textPhoto}>Confirmar foto</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <>
          <View style={styles.noPhotoContainer}>
            <Text style={styles.noPhotoText}>Ninguna foto para mostrar</Text>
          </View>
          <View style={styles.takePhoto}>
            <Pressable onPress={pickImage}>
              <Text style={styles.textTakePhoto}>Tomar foto</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  image: {
    width: "50%",
    height: "35%",
    borderRadius: 150,
  },
  noPhotoContainer: {
    width: "55%",
    height: "35%",
    borderWidth: 2,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
  },
  takePhoto: {
    backgroundColor: colors.redwood,
    width: "32%",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  textTakePhoto: {
    color: "white",
    fontFamily: "MuktaBold",
    fontSize: 18,
  },
  noPhotoText: {
    fontSize: 15,
  },
  textsContainer: {
    flexDirection: "row",
    marginTop: "5%",
  },
  space: {
    marginHorizontal: "5%",
    backgroundColor: colors.redwood,
    width: "33%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  textPhoto: {
    color: "white",
    fontFamily: "MuktaBold",
    fontSize: 16,
  },
});
