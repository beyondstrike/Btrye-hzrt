import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { useModal } from "../context/ModalContext";
import { COLORS } from "../contants";
import * as ImagePicker from "expo-image-picker";

const PickImageModal = ({ setImage }) => {
  const { setShowModal } = useModal();

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    try {
      const permissionResult =
        await ImagePicker.requestCameraPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your camera!");
        return;
      }

      const result = await ImagePicker.launchCameraAsync();

      if (!result.cancelled) {
        setImage(result.uri);
      }
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your photos!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        setImage(result.uri);
      }
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button style={styles.button} title="Gallery" onPress={showImagePicker} />
      <Button style={styles.button} title="Camera" onPress={openCamera} />
    </View>
  );
};

export default PickImageModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: 300,
    height: 200,
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
