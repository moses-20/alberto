import React, { createContext, useState, useEffect, useReducer } from "react";
import fruitReducer from "store/reducer/fruit.reducer";
import { fruitActions } from "store/actions/fruit.actions";
import Axios from "axios";

export const FruitsContext = createContext();

export default function FruitsContextProvider({ children }) {
  const fruits = [];
  const [state, dispatch] = useReducer(fruitReducer, fruits);

  useEffect(() => {
    async function loadFruits() {
      let result = await Axios({
        method: "GET",
        url: "http://localhost:8000/fruits",
      });

      dispatch(fruitActions.update(result.data));
    }

    loadFruits();
  }, []);

  return (
    <FruitsContext.Provider value={{ state, dispatch }}>
      {children}
    </FruitsContext.Provider>
  );
}
