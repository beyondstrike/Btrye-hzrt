import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../contants";
import { LinearGradient } from "expo-linear-gradient";

const PopupWithButtons = ({ text, buttons }) => {
  const [serialNumber, setSerialNumber] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <Text style={styles.title}>{text}</Text>
        <TextInput
          style={styles.input}
          value={serialNumber}
          onChangeText={setSerialNumber}
        />
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map(({ text, onPress }, i) => (
          <TouchableOpacity
            key={i.toString()}
            onPress={onPress}
            style={{ padding: 10, flex: 1 }}
            disabled={serialNumber.length === 0}
          >
            <LinearGradient
              // Button Linear Gradient
              colors={
                serialNumber.length === 0
                  ? ["#7D7D7D", "#696969"]
                  : ["#92E3A9", "#92E3A9"]
              }
              style={styles.button}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.text}>{text}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PopupWithButtons;

const styles = StyleSheet.create({
  container: { height: 300, width: 300, backgroundColor: COLORS.white },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#323232",
    textAlign: "center",
    marginTop: 50,
    marginHorizontal: 20,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    flex: 0.5,
    backgroundColor: COLORS.primary,
    padding: 10,
    opacity: 0.7,
    margin: 10,
    marginTop: 30,
  },
});
