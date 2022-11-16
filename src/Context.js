import { createContext, useContext, useState } from "react";

const UserAuth = createContext();

export const ContextProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <UserAuth.Provider
      value={{
        isClicked,
        setIsClicked,
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </UserAuth.Provider>
  );
};

export const useAuth = () => {
  return useContext(UserAuth);
};
