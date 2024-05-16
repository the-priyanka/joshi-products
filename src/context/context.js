import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState("");
  const [navbar, setNavbar] = useState(false);

  const handleLinks = (url) => {
    setActiveNav(url);
  };

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <AppContext.Provider
      value={{ activeNav, handleLinks, navbar, setNavbar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
