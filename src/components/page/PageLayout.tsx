import React from "react";
import {
  Flex,
} from "@chakra-ui/react";
import Header from "../header/Header";

function PageLayout({hasHeader = true, headerTitle = '', children}: {
  children: React.ReactNode,
  hasHeader?: boolean,
  headerTitle?: string,
}) {
  return (
    <Flex direction="column" height="full">
      {hasHeader && <Header title={headerTitle} />}
      {children}
    </Flex>
  );
}

export default PageLayout;
