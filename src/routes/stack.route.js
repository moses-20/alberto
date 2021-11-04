import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "screens/home";
import Detail from "screens/detail";
import CreateButton from "lib/createBtn";
import Create from "screens/create";

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        children={({ navigation }) => <Home navigation={navigation} />}
        options={{
          headerRight: () => <CreateButton />,
        }}
      />
      <Stack.Screen
        name="Detail"
        children={({ navigation }) => <Detail navigation={navigation} />}
      />
      <Stack.Screen
        name="Create"
        children={({ navigation }) => <Create navigation={navigation} />}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
