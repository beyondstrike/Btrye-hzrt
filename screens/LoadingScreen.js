import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { ICONS } from "../contants";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={{ height: 300, width: 300 }}
        source={ICONS.loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default LoadingScreen;
