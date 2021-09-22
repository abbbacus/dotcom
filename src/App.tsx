import * as React from "react";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import {
  BrowserRouter,
} from "react-router-dom";
import {
  MenuProvider,
} from "./context/MenuContext";
import AppLayout from "./AppLayout";
import appTheme from "./theme/theme";

export const App = () => (
  <ChakraProvider theme={appTheme}>
    <BrowserRouter>
      <MenuProvider>
        <AppLayout />
      </MenuProvider>
    </BrowserRouter>
  </ChakraProvider>
);
