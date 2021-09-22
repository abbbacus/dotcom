import React, { useContext } from "react";
import {
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Activity from "./components/grid/Activity";
import Menu from "./components/grid/Menu";
import MenuContext from "./context/MenuContext";
import Navigator from "./components/grid/Navigator";

function AppLayout() {
  const { appMenuExpanded } = useContext(MenuContext);

  return (
    <Center height="100vh" width="100vw">
      <Grid
        height="full"
        width="full"
        templateColumns={appMenuExpanded ? "250px auto 275px 48px" : "68px auto 275px 48px"}
        templateRows="minmax(675px, 100%)"
      >
        <Menu />
        <GridItem>
          <Navigator />
        </GridItem>
        <Activity />
        <GridItem />
      </Grid>
    </Center>
  );
}

export default AppLayout;
