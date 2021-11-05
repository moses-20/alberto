import React, { useContext, useReducer } from "react";
import Card from "lib/Card";
// import { View, FlatList } from "react-native";
import { fruitActions } from "store/actions/fruit.actions";
import { FruitsContext } from "contexts/fruits.context";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component-2";
import { table } from "store";
import tableReaducer from "store/reducer/table.reducer";
import { tableActions } from "store/actions/table.actions";

function Home({ navigation }) {
  const { state, dispatch } = useContext(FruitsContext);
  const [tableState, tableDispatch] = useReducer(tableReaducer, table);
  // console.log(state);
  const handleCardPress = (id) => {
    dispatch(fruitActions.delete(id));
  };

  // const showPeople = ({ item }) => {
  //   return (
  //     <Card
  //       fruit={item}
  //       navigation={navigation}
  //       handleCardPress={handleCardPress}
  //     />
  //   );
  // };
  const handleRowDelete = (index) => {
    tableDispatch(tableActions.delete(index));
  };

  const element = (data, index) => (
    <TouchableOpacity onPress={() => handleRowDelete(index)}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>button</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 50 }}>
      <View style={styles.container}>
        <Table borderStyle={{ borderColor: "transparent" }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {tableState.tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element(cellData, index) : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  btn: { width: 58, height: 18, backgroundColor: "#78B7BB", borderRadius: 2 },
  btnText: { textAlign: "center", color: "#fff" },
});

export default Home;
