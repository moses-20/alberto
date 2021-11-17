import React, { useState, useContext } from "react";
import Axios from "axios";
import { View, StyleSheet, Image } from "react-native";
import { images } from "assets";
import { Button, Text, Input, TextArea } from "native-base";
import { FruitsContext } from "context/fruits.context";
import { fruitActions } from "store/actions/fruit.actions";

function Detail({ route, navigation }) {
  const { fruit } = route.params;
  const { dispatch } = useContext(FruitsContext);
  const [editFruit, setEditFruit] = useState({
    _id: fruit._id,
    img: "",
    title: "",
    para: "",
  });

  const handleImgChange = (value) => {
    setEditFruit((prev) => ({
      ...prev,
      img: value,
    }));
  };

  const handleTitleChange = (value) => {
    setEditFruit((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleParaChange = (value) => {
    setEditFruit((prev) => ({
      ...prev,
      para: value,
    }));
  };

  const handlePress = async () => {
    if (!editFruit.img || !editFruit.title || !editFruit.para) {
      toast.show({
        title: "Oops!... ",
        status: "error",
        description: "there is nothing to add",
        placement: "top-right",
      });

      return;
    }

    let result = await Axios({
      method: "PUT",
      url: "http://localhost:8000/fruits",
      data: editFruit,
    });

    console.log("here is your update", result.data);

    dispatch(fruitActions.update(result.data));

    setTimeout(() => {
      navigation.navigate("Home");
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgCont}>
        <Image source={images[fruit.img]} style={styles.cardImg} />
      </View>
      <View mb={5}>
        <Text> Edit the details:</Text>

        <Input
          value={editFruit.img}
          onChangeText={handleImgChange}
          variant="filled"
          placeholder={fruit.img}
          mb={5}
        />

        <Input
          value={editFruit.title}
          onChangeText={handleTitleChange}
          variant="filled"
          placeholder={fruit.title}
          mb={5}
        />

        <TextArea
          value={editFruit.para}
          onChangeText={handleParaChange}
          h={20}
          placeholder={fruit.para}
          variant="filled"
          mb={5}
        />

        <Button
          size="sm"
          onPress={handlePress}
          style={{
            backgroundColor: "red",
          }}
        >
          UPDATE DETAILS
        </Button>
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
