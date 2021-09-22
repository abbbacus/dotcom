import React from "react";
import {
  Flex,
} from "@chakra-ui/react";
import Header from "../header/Header";

function PageLayout({hasHeader = true, headerTitle = '', headerActions, children}: {
  children: React.ReactNode,
  hasHeader?: boolean,
  headerActions?: React.ReactNode,
  headerTitle?: string,
}) {
  return (
    <Flex direction="column" height="full">
      {hasHeader && <Header title={headerTitle} actions={headerActions} />}
      {children}
    </Flex>
  );
}

export default PageLayout;
