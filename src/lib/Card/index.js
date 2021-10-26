import React from "react";
import { Button, Image, Text, View } from "react-native";
import styles from "./styles";
import { images } from "assets";
import fruits from "data";

export default function Card() {
  return (
    <View>
      {fruits.map((fruit) => (
        <View style={styles.card} key={fruit.id}>
          <Image source={images[fruit.img]} style={styles.cardImg} />
          <View style={styles.cardContent}>
            <Text style={styles.title}> {fruit.title}</Text>
            <Text style={styles.para}>{fruit.para}</Text>
            <Button
              title="Click me!"
              color="red"
              style={styles.btn}
              onPress={() => {
                console.log("You clicked on the mango button");
              }}
            />
          </View>
        </View>
      ))}
    </View>
  );
}
