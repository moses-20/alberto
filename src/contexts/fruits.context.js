import React, { createContext, useEffect, useReducer } from "react";
import fruitReducer from "store/reducer/fruit.reducer";
import { fruits } from "store";
import { fruitActions } from "store/actions/fruit.actions";
import Axios from "axios";

export const FruitsContext = createContext();

export default function FruitsContextProvider({ children }) {
  const [state, dispatch] = useReducer(fruitReducer, fruits);

  useEffect(() => {
    async function fetchFruits() {
      let response = await Axios({
        method: "GET",
        url: "http://localhost:8000/fruits",
      });
      dispatch(fruitActions.setFruits(response.data));
    }

    fetchFruits();
  }, []);

  return (
    <FruitsContext.Provider value={{ state, dispatch }}>
      {children}
    </FruitsContext.Provider>
  );
}
