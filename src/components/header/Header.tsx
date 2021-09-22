import React from "react";
import {
  Box,
  Divider,
  Text,
} from "@chakra-ui/react";
import {
  IHeaderProps,
} from "../../types/header";

function Header({title}: IHeaderProps) {
  return (
    <>
      <Box height={20} padding={6} paddingBottom={4}>
        <Text fontSize="2xl" fontWeight="semibold">{title}</Text>
      </Box>
      <Divider marginY={2} />
    </>
  );
}

export default Header;
