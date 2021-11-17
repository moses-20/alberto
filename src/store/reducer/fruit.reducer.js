import Axios from "axios";
import { fruitActions, fruitTypes } from "store/actions/fruit.actions";

export default function fruitReducer(state, action) {
  switch (action.type) {
    case fruitTypes.UPDATE_FRUITS:
      return [...action.payload];
    default:
      return state;
  }
}
