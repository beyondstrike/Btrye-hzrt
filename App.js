import { StyleSheet, Platform, SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ReportScreen from "./screens/ReportScreen";
import ModalContext from "./context/ModalContext";
import Modal from "./components/modal";
import ReportDetails from "./screens/ReportDetails";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ModalContext>
      <SafeAreaView style={styles.droidSafeArea}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="ReportDetails"
          >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ReportScreen" component={ReportScreen} />
            <Stack.Screen name="ReportDetails" component={ReportDetails} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <Modal />
    </ModalContext>
  );
};

export default App;

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
