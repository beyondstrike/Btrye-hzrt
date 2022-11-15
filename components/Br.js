import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../contants";

const Br = () => {
  return <View style={styles.container} />;
};

export default Br;

const styles = StyleSheet.create({
  container: {
    height: 1.5,
    width: "100%",
    backgroundColor: COLORS.primary,
  },
});
