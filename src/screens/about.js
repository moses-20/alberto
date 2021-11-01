import React from "react";
import { View, Text } from "react-native";

export default function About() {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
          color: "red",
        }}
      >
        Hello Drawer Navigation
      </Text>
    </View>
  );
}
