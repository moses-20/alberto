export const tableActionTypes = {
  DELETE: "DELETE",
};

export const tableActions = {
  delete: (id) => ({ type: tableActionTypes.DELETE, payload: id }),
};
