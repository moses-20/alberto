import React from "react";
import { useFonts } from "expo-font";
import AppStack from "routes/stack.route";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [loadFonts] = useFonts({
    Poppins: require("./src/assets/fonts/Poppins-Regular.ttf"),
    PoppinsLight: require("./src/assets/fonts/Poppins-Light.ttf"),
    PoppinsBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loadFonts) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
