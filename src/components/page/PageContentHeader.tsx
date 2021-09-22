import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";

type TPageContentHeaderProps = {
  children?: React.ReactNode,
  title: string,
}

function PageContentHeader({title, children}: TPageContentHeaderProps) {
  return (
    <Grid alignItems="center" templateColumns="repeat(2, 1fr)" marginBottom="10">
      <GridItem>
        <Text textStyle="h2">{title}</Text>
      </GridItem>
      <GridItem display="grid" justifyItems="end">
        {children}
      </GridItem>
    </Grid>
  );
}

export default PageContentHeader;