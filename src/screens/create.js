import React, { useContext, useState } from "react";
import { Box, Button, Input, Text, TextArea, useToast } from "native-base";
import Axios from "axios";
import { FruitsContext } from "context/fruits.context";
import { fruitActions } from "store/actions/fruit.actions";

export default function Create({ navigation }) {
  const { dispatch } = useContext(FruitsContext);
  const toast = useToast();
  const [newFruit, setNewFruit] = useState({
    img: "",
    title: "",
    para: "",
  });

  const handleImgChange = (value) => {
    setNewFruit((prev) => ({
      ...prev,
      img: value,
    }));
  };

  const handleTitleChange = (value) => {
    setNewFruit((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleParaChange = (value) => {
    setNewFruit((prev) => ({
      ...prev,
      para: value,
    }));
  };

  const handlePress = async () => {
    if (!newFruit.img || !newFruit.title || !newFruit.para) {
      toast.show({
        title: "Oops!... ",
        status: "error",
        description: "there is nothing to add",
        placement: "top-right",
      });

      return;
    }

    let result = await Axios({
      method: "POST",
      url: "http://localhost:8000/fruits",
      data: newFruit,
    });

    dispatch(fruitActions.update(result.data));

    setTimeout(() => {
      toast.show({
        title: "Yay!... ",
        status: "success",
        description: "your item was added!",
        duration: 2000,
        placement: "top-right",
      });
    }, 1000);

    setTimeout(() => {
      navigation.navigate("Home");
    }, 3500);
  };

  return (
    <Box px={15} pt={20}>
      <Text> Enter the details:</Text>

      <Input
        value={newFruit.img}
        onChangeText={handleImgChange}
        variant="filled"
        placeholder="Image"
        mb={5}
      />

      <Input
        value={newFruit.title}
        onChangeText={handleTitleChange}
        variant="filled"
        placeholder="Title"
        mb={5}
      />

      <TextArea
        value={newFruit.para}
        onChangeText={handleParaChange}
        h={20}
        placeholder="Para"
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
        ADD
      </Button>
    </Box>
  );
}
