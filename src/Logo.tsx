import * as React from "react";
import {
  chakra,
  ImageProps,
  forwardRef,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import logo from "./logo.svg";
import logoDark from "./logoDark.svg";
import logoMark from "./logoMark.svg";

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  const { colorMode } = useColorMode();
  return <chakra.img src={colorMode === 'light' ? logo : logoDark} ref={ref} {...props} />
});

export const LogoMark = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={logoMark} ref={ref} {...props} />
});