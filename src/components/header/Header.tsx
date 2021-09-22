import React from "react";
import {
  Divider,
  Grid,
  Flex,
  Text,
} from "@chakra-ui/react";
import capitalize from "lodash/capitalize";

function Header({title, actions}:  {
  title: string,
  actions?: React.ReactNode,
}) {
  return (
    <>
      <Grid 
        height={20}
        padding={6}
        paddingBottom={4}
        flexShrink={0}
        templateColumns="auto auto"
      >
        <Flex align="center">
          <Text fontSize="2xl" fontWeight="semibold">{capitalize(title)}</Text>
        </Flex>
        {actions && (
          <Flex align="center" justify="flex-end">
            {actions}
          </Flex>
        )}
      </Grid>
      <Divider marginTop={2} />
    </>
  );
}

export default Header;
