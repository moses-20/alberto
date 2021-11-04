import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "screens/home";
import Detail from "screens/detail";
import CreateButton from "lib/createBtn";
import Create from "screens/create";

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "left",
          headerRight: () => <CreateButton />,
        }}
      />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
}

export default AppStack;
