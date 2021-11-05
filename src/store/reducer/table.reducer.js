import { tableActionTypes } from "store/actions/table.actions";

export default function tableReaducer(state, action) {
  switch (action.type) {
    case tableActionTypes.DELETE:
      function removeRow() {
        let newArr = [];
        let target = state.tableData[action.payload];
        for (let value of state.tableData) {
          if (value == target) continue;
          newArr.push(value);
        }

        return newArr;
      }

      return {
        ...state,
        tableData: removeRow(),
      };
    default:
      return state;
  }
}
