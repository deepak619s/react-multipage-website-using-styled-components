//? 1. Create a Context
//? 2. Provider
//? 3. Consumer -> useContext()

import React, { useContext } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ fname: "Deepak Sinha", age: 21 }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
