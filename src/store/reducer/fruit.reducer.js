import { fruitTypes } from "store/actions/fruit.actions";

export default function fruitReducer(state, action) {
  switch (action.type) {
    case fruitTypes.ADD_FRUIT:
      return state.push(action.payload);
    case fruitTypes.DELETE_FRUIT:
      return state.filter((item) => item._id !== action.payload);
    case fruitTypes.SET_FRUITS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
