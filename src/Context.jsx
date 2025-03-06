//? 1. Create a Context
//? 2. Provider
//? 3. Consumer -> useContext()

import React, { useContext, useReducer } from "react";
import { reducer } from "./Reducer";

export const AppContext = React.createContext();

const initialState = {
  name: "",
  image: "",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Deepak Sinha",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Deep",
        image: "./images/about1.svg",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
  {
    /* <AppContext.Provider value={{ fname: "Deepak Sinha", age: 21 }}> */
  }
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
