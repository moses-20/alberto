import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { images } from "assets";
import { Button } from "native-base";

function Detail({ route, navigation }) {
  const { imageSrc } = route.params;
  console.log(imageSrc);
  return (
    <View style={styles.container}>
      <View style={styles.imgCont}>
        <Image source={images[imageSrc]} style={styles.cardImg} />
      </View>
      <Button onPress={() => navigation.goBack()}> Go Back Home </Button>
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
