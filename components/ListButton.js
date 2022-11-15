import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../contants";

const ListButton = ({ text, icon, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          justifyContent: icon ? "flex-start" : "center",
        },
      ]}
      onPress={onPress}
    >
      {icon && <Image style={styles.icon} source={icon} />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ListButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.white,
    opacity: 0.8,
  },
  icon: {
    resizeMode: "contain",
    height: 30,
    width: 30,
    tintColor: COLORS.primary,
    marginLeft: 30,
  },
});
