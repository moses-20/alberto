import React from "react";
import { View, ScrollView } from "react-native";
import Card from "lib/Card";
import fruits from "data";

function Home({ navigation }) {
  return (
    <ScrollView style={{ paddingHorizontal: 20 }}>
      {fruits.map((fruit) => (
        <View key={fruit.id}>
          <Card fruit={fruit} navigation={navigation} />
        </View>
      ))}
    </ScrollView>
  );
}

export default Home;
