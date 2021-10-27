import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "screens/home";
import Detail from "screens/detail";

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default AppStack;
