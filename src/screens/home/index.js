import React, { useContext } from "react";
import Card from "lib/Card";
import Axios from "axios";
import { View, FlatList } from "react-native";
import { fruitActions } from "store/actions/fruit.actions";
import { FruitsContext } from "context/fruits.context";

function Home({ navigation }) {
  const { state, dispatch } = useContext(FruitsContext);

  async function deleteItem(id) {
    try {
      let result = await Axios({
        method: "DELETE",
        url: "http://localhost:8000/fruits",
        data: { id },
      });

      dispatch(fruitActions.update(result.data));
    } catch (error) {
      console.log(error.message);
    }
  }

  const showFruits = ({ item }) => {
    return (
      <Card fruit={item} navigation={navigation} deleteItem={deleteItem} />
    );
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <FlatList
        data={state}
        renderItem={showFruits}
        keyExtractor={(item) => String(item._id)}
      />
    </View>
  );
}

export default Home;
