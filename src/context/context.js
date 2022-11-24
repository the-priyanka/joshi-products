import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState("/");

  const handleLinks = (url) => {
    setActiveNav(url);
  };

  return (
    <AppContext.Provider value={{ activeNav, handleLinks }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
