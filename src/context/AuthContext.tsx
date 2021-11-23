import React, { useState } from "react";
import { IUser } from "../types/auth";

type TContextProps = {
  login: () => void;
  logout: () => void;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  user: IUser | null;
};

type TProviderProps = {
  children: React.ReactNode;
};


const AuthContext = React.createContext<TContextProps>({} as TContextProps)

export const AuthProvider = ({ children }: TProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const login = (): void => {
    // todo - in case we want to save a token or something
  };

  const logout = (): void => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      setUser,
      user,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;