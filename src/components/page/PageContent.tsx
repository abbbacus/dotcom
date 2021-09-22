import React from "react";
import {
  Box,
} from "@chakra-ui/react";

function PageContent({children}: {
  children: React.ReactNode,
}) {
  return (
    <Box flexGrow={1} padding={10} overflow="scroll" boxShadow="inner">
      {children}
    </Box>
  );
}

export default PageContent;
