import React from "react";
import { Button, Image, Text, View } from "react-native";
import styles from "./styles";
import { images } from "assets";
import { Pressable } from "native-base";

export default function Card({ fruit, navigation, deleteItem }) {
  return (
    <View style={styles.card}>
      <Pressable onPress={() => deleteItem(fruit._id)}>
        <Image source={images[fruit.img]} style={styles.cardImg} />
      </Pressable>
      <View style={styles.cardContent}>
        <Text style={styles.title}> {fruit.title}</Text>
        <Text style={styles.para}>{fruit.para}</Text>
        <Button
          title="Click me!"
          color="red"
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Detail", {
              fruit: fruit,
            });
          }}
        />
      </View>
    </View>
  );
}
