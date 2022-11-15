import { Image, StyleSheet, View } from "react-native";
import React from "react";
import List from "../components/List";
import { THEME } from "../contants";

const ListScreenTemplate = ({ data, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.cover} source={image} />
      <List data={data} />
    </View>
  );
};

export default ListScreenTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cover: {
    resizeMode: "contain",
    width: THEME.screenWidth,
    height: THEME.screenWidth,
    position: "absolute",
    left: 0,
    bottom: 0,
  },
});
