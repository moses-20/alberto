import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import Home from "./src/screens/home";

export default function App() {
  const [loadFonts] = useFonts({
    Poppins: require("./src/assets/fonts/Poppins-Regular.ttf"),
    PoppinsLight: require("./src/assets/fonts/Poppins-Light.ttf"),
    PoppinsBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loadFonts) return null;

  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
