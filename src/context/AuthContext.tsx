import React, { useState } from "react";
import { IUser } from "../types/auth";

type TContextProps = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

type TProviderProps = {
  children: React.ReactNode;
};


const AuthContext = React.createContext<TContextProps>({} as TContextProps)

export const AuthProvider = ({ children }: TProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;