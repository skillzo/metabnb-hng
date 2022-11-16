import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <userContext.Provider
      value={{
        isClicked,
        setIsClicked,
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(userContext);
};
