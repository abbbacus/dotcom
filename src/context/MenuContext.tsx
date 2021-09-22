import React from 'react';
import { useBoolean } from '@chakra-ui/hooks';

type TContextProps = {
  appMenuExpanded: boolean,
  setAppMenuExpanded: {
    readonly on: () => void,
    readonly off: () => void,
    readonly toggle: () => void,
  }
};

type TMenuProviderProps = {
  children: React.ReactNode;
};

const MenuContext = React.createContext<TContextProps>({} as TContextProps)

export const MenuProvider = ({ children }: TMenuProviderProps) => {
  const [appMenuExpanded, setAppMenuExpanded] = useBoolean(true);

  return (
    <MenuContext.Provider value={{
      appMenuExpanded,
      setAppMenuExpanded,
    }}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuContext;