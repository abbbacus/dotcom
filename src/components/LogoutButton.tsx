import React from "react";
import {
  Icon,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiDoorLockFill } from "react-icons/ri";

function LogoutButton() {
  const iconColor = useColorModeValue("whisper.600", "whiteAlpha.900");

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
    />
  );
}

export default LogoutButton;
