import React from "react";
import { Button, Image, Text, View } from "react-native";
import styles from "./styles";
import { images } from "assets";

export default function Card({ fruit, navigation }) {
  return (
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
            navigation.navigate("Detail", {
              imageSrc: fruit.img,
              id: fruit.id,
            });
          }}
        />
      </View>
    </View>
  );
}
