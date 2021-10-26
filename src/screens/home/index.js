import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "lib/Card";

function Home() {
  return (
    <View>
      <Card />
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Home;
