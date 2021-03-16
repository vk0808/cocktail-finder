import React, { useState, useEffect, useContext } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])
  return <AppContext.Provider value={{
    loading, searchTerm, cocktails, setSearchTerm
  }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
