import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import AppStack from "routes/stack.route";
import FruitsContextProvider from "contexts/fruits.context";

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
        <NativeBaseProvider>
          <FruitsContextProvider>
            <AppStack />
          </FruitsContextProvider>
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
