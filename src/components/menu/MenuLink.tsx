import React, {
  useContext,
} from "react";
import ERoutes from "../../routes";
import MenuContext from "../../context/MenuContext";
import { EMenuItemType, IMenuItemProps } from "../../types/menu";
import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function MenuLink({
  icon,
  path,
  text,
  type = EMenuItemType.primary
}: IMenuItemProps) {
  const { appMenuExpanded } = useContext(MenuContext);

  return (
    type === EMenuItemType.secondary ? (
      <LinkWrapper path={path}>
        <HStack color="whisper.600" spacing={4} fontWeight="medium" paddingX={6} paddingY={3} fontSize="sm" width="full">
          <Icon as={icon} boxSize={5} />
          <Text display={appMenuExpanded ? "block" : "none"}>{text}</Text>
        </HStack>
      </LinkWrapper>
    ) : (
      <LinkWrapper path={path}>
        <HStack spacing={4} fontWeight="medium" paddingX={6} paddingY={3} width="full">
          <Icon as={icon} boxSize={6} color="whisper.600" />
          <Text display={appMenuExpanded ? "block" : "none"}>{text}</Text>
        </HStack>
      </LinkWrapper>
    )
  );
}

function LinkWrapper({
  path,
  children,
}: {
  path: ERoutes,
  children: React.ReactNode
}) {
  return (
    <Link
      exact={path === ERoutes.dashboard}
      as={NavLink}
      to={path}
      position="relative"
      width="full"
      _activeLink={{
        "&::after": {
          display: "block",
        }
      }}
      _after={{
        borderRightColor: "brand.secondary",
        borderRightWidth: 3,
        content: "''",
        display: "none",
        height: "calc(100% - 24px)",
        position: "absolute",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      _hover={{
        textDecoration: "none",
      }}
    >{children}</Link>
  );
}

export default MenuLink;
