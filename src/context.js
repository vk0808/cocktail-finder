import React, { useState, useEffect, useContext } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
