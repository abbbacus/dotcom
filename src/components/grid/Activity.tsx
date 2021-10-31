import React, { useContext, useEffect, useState } from "react";
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
  Text,
} from "@chakra-ui/react";
import {
  ColorModeSwitcher,
} from "../ColorModeSwitcher";
import LogoutButton from "../LogoutButton";
import AuthContext from "../../context/AuthContext";

function Activity() {
  const [name, setName] = useState<string>('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) return;
    setName(user.firstName + ' ' + user.lastName);
  }, [user, setName]);

  return (
    <GridItem layerStyle="gridDark" overflow="hidden" borderLeftWidth="1px" borderRightWidth="1px">
      <Flex direction="column" height="full">
        <Flex direction="column" flexGrow={1}>
          <HStack spacing={4} align="flex-start" justify="flex-start" padding={6} paddingBottom={4} width="full" height={20} flexShrink={0}>
            <Avatar src="https://i.pravatar.cc/100?img=60" size="sm" name={name}>
              <AvatarBadge bg="brand.secondary" borderColor="whisper.100" boxSize="0.8em" borderWidth="thin" />
            </Avatar>
            <Box overflow="hidden">
              <Text fontWeight="bold" fontSize="sm" isTruncated>{name}</Text>
              <Text fontSize="xs" isTruncated>{user?.email}</Text>
            </Box>
          </HStack>
          <Divider marginTop={2} />
          <HStack flexGrow={1} boxShadow="inner" width="full">
            <Center fontStyle="italic" color="whisper.500" fontWeight="semibold" width="100%">Modules</Center>
          </HStack>
        </Flex>
        
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
