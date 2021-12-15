import React, { useContext } from "react";
import {
  Box,
  Divider,
  Flex,
  GridItem,
  HStack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  RiBarChartGroupedLine,
  RiLayoutMasonryLine,
  RiLayoutLeftFill,
  RiSettings4Line,
} from "react-icons/ri";
import {
  TiFlowChildren,
} from "react-icons/ti";
import {
  EMenuItemType,
} from "../../types/menu";
import ERoutes, { ERouteNames } from "../../routes";
import MenuLink from "../menu/MenuLink";
import MenuButton from "../menu/MenuButton";
import MenuContext from "../../context/MenuContext";
import { Logo } from "../../Logo";

function Menu() {
  const { appMenuExpanded, setAppMenuExpanded } = useContext(MenuContext);

  return (
    <GridItem layerStyle="gridDark" overflow="hidden" borderRightWidth="1px">
      <Flex direction="column" height="full">
        <Box flexGrow={1}>
          <HStack
            align="center"
            justify={appMenuExpanded ? "flex-start" : "center"}
            paddingBottom={12}
            paddingTop={6}
            paddingX={appMenuExpanded ? 6 : 3}
            spacing={4}
          >
            <Box boxSize={10}>
              <Logo fit="cover" />
            </Box>
            <Text fontWeight="semibold" display={appMenuExpanded ? "block" : "none" }>
              Aye Six Ess Co.
            </Text>
          </HStack>

          <VStack align="flex-start" divider={<StackDivider />}>
            <VStack spacing={0} width="full" align="flex-start">
              <MenuLink icon={RiLayoutMasonryLine} text={ERouteNames.dashboard} path={ERoutes.dashboard} />
              <MenuLink icon={TiFlowChildren} text={ERouteNames.pipelines} path={ERoutes.pipelines} />
              <MenuLink icon={RiBarChartGroupedLine} text={ERouteNames.rankers} path={ERoutes.rankers} />
            </VStack>
            <VStack spacing={0} width="full" align="flex-start">
              <MenuButton icon={RiSettings4Line} text="Settings" />
            </VStack>
          </VStack>
        </Box>

        <Box>
          <Divider />
          <MenuButton
            icon={RiLayoutLeftFill}
            text={appMenuExpanded ? "Collapse Menu": "Expand Menu"}
            type={EMenuItemType.secondary}
            onClick={setAppMenuExpanded.toggle}
          />
        </Box>
      </Flex>
    </GridItem>
  );
}

export default Menu;
