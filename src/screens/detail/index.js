import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { images } from "assets";

function Detail({ route }) {
  const { imageSrc, id } = route.params;
  console.log(imageSrc);
  return (
    <View style={styles.container}>
      <View style={styles.imgCont}>
        <Image source={images[imageSrc]} style={styles.cardImg} />
      </View>
      <Text>{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgCont: {
    width: 300,
  },
  cardImg: {
    height: 320,
    width: undefined,
  },
});

export default Detail;
