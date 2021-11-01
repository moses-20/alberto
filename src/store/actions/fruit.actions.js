export const fruitTypes = {
  ADD_FRUIT: "ADD_FRUIT",
  DELETE_FRUIT: "DELETE_FRUIT",
};

export const fruitActions = {
  add: (title, para, img) => ({
    type: fruitTypes.ADD_FRUIT,
    payload: { title, para, img },
  }),
  delete: (id) => ({ type: fruitTypes.DELETE_FRUIT, payload: id }),
};
