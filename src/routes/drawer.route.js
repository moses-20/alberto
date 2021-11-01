import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppStack from "./stack.route";
import About from "screens/about";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="App" component={AppStack} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
