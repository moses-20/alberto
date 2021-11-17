export const fruitTypes = {
  UPDATE_FRUITS: "UPDATE_FRUITS",
};

export const fruitActions = {
  update: (arr) => ({ type: fruitTypes.UPDATE_FRUITS, payload: arr }),
};
