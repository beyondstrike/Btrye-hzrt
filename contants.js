import { Dimensions } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const IMAGES = {
  login: require("./assets/images/login.png"),
  home: require("./assets/images/home.png"),
  report: require("./assets/images/report.png"),
  reportDetails: require("./assets/images/reportDetails.png"),
};

const ICONS = {
  document: require("./assets/icons/document.png"),
  repeat: require("./assets/icons/repeat.png"),
  fix: require("./assets/icons/fix.png"),
  logout: require("./assets/icons/logout.png"),
  loading: require("./assets/icons/loading.gif"),
  calendar: require("./assets/icons/calendar.png"),
  message: require("./assets/icons/message.png"),
  close: require("./assets/icons/close.png"),
};

const COLORS = {
  primary: "#92E3A9",
  white: "white",
  lightgray: "lightgray",
  lightgreen: "lightgreen",
  darkgray: "#2F4F4F",
};

const THEME = {
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,
};

export { IMAGES, ICONS, THEME, COLORS };
