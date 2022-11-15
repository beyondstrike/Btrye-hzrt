import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { IMAGES } from "../contants";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const LoginScreen = () => {
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [remember, setRemember] = useState(false);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : ""}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerBorder}>
            <View style={styles.container}>
              <View style={styles.body}>
                <View style={styles.bannerContainer}>
                  <Text style={styles.title}>LOGIN</Text>
                  <Image style={styles.banner} source={IMAGES.login} />
                </View>
                <View>
                  <View>
                    <TextInput
                      style={styles.inputText}
                      placeholder="Email"
                      value={email}
                      onChangeText={setEmail}
                    />
                    <TextInput
                      style={styles.inputText}
                      placeholder="Password"
                      value={pass}
                      onChangeText={setPass}
                      secureTextEntry={true}
                    />
                    <View style={styles.rememberME}>
                      <BouncyCheckbox
                        size={15}
                        fillColor="lightgray"
                        unfillColor="#FFFFFF"
                        text="Remember me"
                        iconStyle={{
                          borderColor: "lightgray",
                          padding: 0,
                          margin: 0,
                          borderRadius: 2,
                        }}
                        textStyle={{
                          textDecorationLine: "none",
                          fontWeight: "bold",
                          fontSize: 12,
                          marginLeft: -10,
                        }}
                        innerIconStyle={{ borderWidth: 2, borderRadius: 2 }}
                        isChecked={remember}
                        disableBuiltInState
                        onPress={() => setRemember((prev) => !prev)}
                      />
                      <TouchableOpacity>
                        <Text style={styles.recover}>Recover Password</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.termsContainer}>
                    <BouncyCheckbox
                      size={20}
                      fillColor="lightgreen"
                      unfillColor="#FFFFFF"
                      text="I agree to the"
                      iconStyle={{ borderColor: "lightgreen" }}
                      textStyle={{
                        textDecorationLine: "none",
                      }}
                      innerIconStyle={{ borderWidth: 2 }}
                      isChecked={agree}
                      disableBuiltInState
                      onPress={() => setAgree((prev) => !prev)}
                    />
                    <TouchableOpacity>
                      <Text style={styles.termsClick}>Terms of Use</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.buttonContainer}>
                <LinearGradient
                  // Button Linear Gradient
                  colors={["#F26969", "#FD6B68"]}
                  style={styles.button}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={styles.text}>Sign In</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerBorder: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  bannerContainer: {
    height: 300,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  banner: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#F1F1F8",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  body: {
    flex: 5,
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },

  inputText: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "white",
    margin: 7,
    borderRadius: 10,
    fontSize: 14,
    fontWeight: "400",
  },
  termsContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  termsClick: {
    color: "dodgerblue",
    fontWeight: "bold",
    marginLeft: 5,
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
  rememberME: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "flex-start",
    marginBottom: 20,
  },
  recover: {
    fontSize: 11,
    fontWeight: "bold",
    color: "darkgray",
    textAlign: "right",
  },
  rememberMEText: {},
});
