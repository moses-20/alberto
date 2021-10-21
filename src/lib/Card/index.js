import React from "react";
import { Button, Image, Text, View } from "react-native";
import styles from "./styles";
import { images } from "../../assets";

export default function Card() {
  return (
    <View style={styles.card}>
      <Image source={images.mango} style={styles.cardImg} />
      <View style={styles.cardContent}>
        <Text style={styles.title}> This is a Mango</Text>
        <Text style={styles.para}>
          Ex proident nisi velit deserunt excepteur reprehenderit id do. Nulla
          fugiat qui fugiat culpa consectetur minim. Lorem irure in do esse
          excepteur aute qui.
        </Text>
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
  );
}
