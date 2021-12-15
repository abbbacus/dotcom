import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import { LogoMark } from "../Logo";
import illustration from "../example_illustration.svg";

function LoginPage() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="viewH"
      minH="750px"
    >
      <Container
        bgColor="gray.800"
        centerContent
        height="80vh"
        maxW="container.lg"
        minHeight="650px"
        shadow="2xl"
        padding="0"
        width="90%"
      >
        <Grid
          height="full"
          templateColumns={["", "", "repeat(2, 1fr)"]}
          width="full"
        >
          <VStack
            display={["none", "", "flex"]}
            justifyContent="center"
            color="whiteAlpha.800"
            textAlign="center"
            spacing={6}
          >
            <chakra.img src={illustration} width="60%" />
            <Box paddingX={10}>
                <Text fontSize="2xl" fontWeight="semibold">Lorem ipsum dolor</Text>
                <Text fontSize="md" fontWeight="light" marginTop={4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellat, error at iusto fugit quam.
                </Text>
            </Box>
          </VStack>
          <Grid
            backgroundColor="white"
            color="brand.primary"
            gridTemplateRows="100px auto"
            paddingX={[8,8,8,16]}
            paddingY={16}
          >
            <HStack height="25px">
              <LogoMark height="100%" />
              <Text fontSize="md" fontWeight="bold">Abbbacus</Text>
            </HStack>
            <LoginForm />
          </Grid>
        </Grid>
      </Container>
    </Flex>
  )
}

export default LoginPage;
