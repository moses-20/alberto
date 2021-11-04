import React, { useReducer, useState } from "react";
import { Box, Button, Input, Text, TextArea } from "native-base";
import fruits from "store";
import fruitReducer from "store/reducer/fruit.reducer";
import { fruitActions } from "store/actions/fruit.actions";

export default function Create({ navigation }) {
  const [newFruit, setNewFruit] = useState({
    image: "add your image name here",
    title: "add your title here",
    para: "enter the description of your fruit here",
  });

  const [state, dispatch] = useReducer(fruitReducer, fruits);

  const handleImgChange = (value) => {
    setNewFruit((prev) => ({
      ...prev,
      image: value,
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

  const handlePress = () => {
    dispatch(fruitActions.add(newFruit.title, newFruit.para, newFruit.image));
    navigation.navigate("Home");
  };

  return (
    <Box px={15} pt={20}>
      <Text> Enter the details:</Text>

      <Input
        value={newFruit.image}
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
        variant="subtle"
        colorScheme="secondary"
        onPress={handlePress}
      >
        ADD
      </Button>
    </Box>
  );
}
