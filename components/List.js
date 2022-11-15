import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ListButton from "./ListButton";
import Br from "./Br";

const List = ({ data }) => {
  return (
    <>
      {data.map(({ text, icon, onPress }, i) => (
        <View key={i.toString()}>
          <ListButton text={text} icon={icon} onPress={onPress} />
          {i !== data.length - 1 && <Br />}
        </View>
      ))}
    </>
  );
};

export default List;

const styles = StyleSheet.create({});
