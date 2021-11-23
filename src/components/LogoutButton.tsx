import React, { useContext } from "react";
import {
  Icon,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiDoorLockFill } from "react-icons/ri";
import AuthContext from "../context/AuthContext";

function LogoutButton() {
  const { logout } = useContext(AuthContext);
  const iconColor = useColorModeValue("whisper.600", "whisper.600");

  return (
    <IconButton
      size="sm"
      fontSize={20}
      variant="ghost"
      color={iconColor}
      icon={<Icon as={RiDoorLockFill} />}
      aria-label="Log out"
      height="auto"
      minWidth="0"
      onClick={() => logout()}
    />
  );
}

export default LogoutButton;
