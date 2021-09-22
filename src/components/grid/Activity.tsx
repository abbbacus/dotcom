import React, { useState } from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ColorModeSwitcher,
} from "../ColorModeSwitcher";
import LogoutButton from "../LogoutButton";

function Activity() {
  const [user] = useState<Record<string, string>>({
    "name": "Jackson Marshall",
    "email": "marsh.jackson@example.com",
  });

  return (
    <GridItem layerStyle="gridDark" overflow="hidden" borderLeftWidth="1px" borderRightWidth="1px">
      <Flex direction="column" height="full">
        <VStack divider={<StackDivider />} flexGrow={1}>
          <HStack spacing={4} align="flex-start" justify="flex-start" padding={6} paddingBottom={4} width="full" height={20}>
            <Avatar src="https://i.pravatar.cc/100?img=60" size="sm" name={user.name}>
              <AvatarBadge bg="brand.secondary" borderColor="whisper.100" boxSize="0.8em" borderWidth="thin" />
            </Avatar>
            <Box overflow="hidden">
              <Text fontWeight="bold" fontSize="sm" isTruncated>{user.name}</Text>
              <Text fontSize="xs" isTruncated>{user.email}</Text>
            </Box>
          </HStack>
          <HStack flexGrow={1}>
            <Center fontStyle="italic" color="whisper.500" fontWeight="semibold">Modules</Center>
          </HStack>
        </VStack>
        
        <Divider />
        
        <Grid templateColumns="auto auto auto">
          <Box paddingX={6} paddingY={3} justifyContent="center" display="flex">
            <ColorModeSwitcher />
          </Box>
          <Box paddingX={6} paddingY={3} justifyContent="center" display="flex" borderLeftWidth="1px" borderRightWidth="1px"></Box>
          <Box paddingX={6} paddingY={3} justifyContent="center" display="flex">
            <LogoutButton />
          </Box>
        </Grid>
      </Flex>
    </GridItem>
  );
}

export default Activity;
