import React, { useContext } from "react";
import {
  EMenuItemType,
  IMenuItemButtonProps,
} from "../../types/menu";
import {
  Box,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import MenuContext from "../../context/MenuContext";

function MenuButton({
  icon,
  text,
  type = EMenuItemType.primary,
  onClick,
}: IMenuItemButtonProps) {
  const { appMenuExpanded } = useContext(MenuContext);

  return (
    type === EMenuItemType.secondary ? (
      <Box as="button" width="full" onClick={onClick} aria-label={text}>
        <HStack color="whisper.600" spacing={4} fontWeight="medium" paddingX={6} paddingY={3} fontSize="sm" width="full">
          <Icon as={icon} boxSize={5} />
          <Text display={appMenuExpanded ? "block" : "none"}>{text}</Text>
        </HStack>
      </Box>
    ) : (
      <Box as="button" width="full" onClick={onClick} aria-label={text}>
        <HStack spacing={4} fontWeight="medium" paddingX={6} paddingY={3} width="full">
          <Icon as={icon} boxSize={6} color="whisper.600" />
          <Text display={appMenuExpanded ? "block" : "none"}>{text}</Text>
        </HStack>
      </Box>
    )
  );
}

export default MenuButton;
