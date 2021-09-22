import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { RiMoonFill } from "react-icons/ri";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("whisper.600", "whiteAlpha.900");
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(RiMoonFill, RiMoonFill);

  return (
    <IconButton
      size="sm"
      fontSize={20}
      variant="ghost"
      color={iconColor}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      height="auto"
      minWidth="0"
      {...props}
    />
  );
}
