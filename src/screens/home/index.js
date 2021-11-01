import React, { useReducer } from "react";
import Card from "lib/Card";
import fruits from "store";
import { View, FlatList } from "react-native";
import { fruitActions } from "store/actions/fruit.actions";
import fruitReducer from "store/reducer/fruit.reducer";

function Home({ navigation }) {
  const [state, dispatch] = useReducer(fruitReducer, fruits);

  const handleCardPress = (id) => {
    dispatch(fruitActions.delete(id));
  };

  const showPeople = ({ item }) => {
    return (
      <Card
        fruit={item}
        navigation={navigation}
        handleCardPress={handleCardPress}
      />
    );
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <FlatList
        data={state}
        renderItem={showPeople}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

export default Home;
