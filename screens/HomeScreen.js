import React from "react";
import { ICONS, IMAGES, THEME } from "../contants";
import ListScreenTemplate from "./ListScreenTemplate";

const DATA = [
  {
    text: "דיווח חשבוניות",
    icon: ICONS.document,
    onPress: () => console.log("Pressed"),
  },
  {
    text: "ההחזרים שלי",
    icon: ICONS.repeat,
    onPress: () => console.log("Pressed"),
  },
  { text: "עזרה", icon: ICONS.fix, onPress: () => console.log("Pressed") },
  {
    text: "התנתקות",
    icon: ICONS.logout,
    onPress: () => console.log("Pressed"),
  },
];

const HomeScreen = () => {
  return <ListScreenTemplate data={DATA} image={IMAGES.home} />;
};

export default HomeScreen;
