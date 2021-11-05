export const fruitTypes = {
  ADD_FRUIT: "ADD_FRUIT",
  DELETE_FRUIT: "DELETE_FRUIT",
  SET_FRUITS: "FETCH_FRUITS",
};

function genID() {
  return Math.random() * 121;
}

export const fruitActions = {
  add: (title, para, img) => ({
    type: fruitTypes.ADD_FRUIT,
    payload: { id: genID, title, para, img },
  }),
  delete: (id) => ({ type: fruitTypes.DELETE_FRUIT, payload: id }),
  setFruits: (fruits) => ({ type: fruitTypes.SET_FRUITS, payload: fruits }),
};
