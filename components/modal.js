import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { useModal } from "../context/ModalContext";

const Modal = () => {
  const {
    modalContent,
    showModal,
    setShowModal,
    setModalContent,
    modalType,
    closeModal,
  } = useModal();

  const handleModalClose = () => {
    if (!modalType) closeModal();
  };

  useEffect(() => {
    const backAction = () => {
      setShowModal(false);
      setModalContent();
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  if (!showModal) return null;
  return (
    <View style={styles.modalConainer}>
      <TouchableWithoutFeedback onPress={handleModalClose}>
        <View style={styles.modalConainer}></View>
      </TouchableWithoutFeedback>
      {modalContent}
    </View>
  );
};

const styles = StyleSheet.create({
  modalConainer: {
    flex: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.1)",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Modal;
