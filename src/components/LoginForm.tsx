import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { 
  Box,
  Button,
  FormControl,
  FormErrorMessage, 
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  LightMode,
  Text,
} from "@chakra-ui/react";
import {
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";
import AuthContext from "../context/AuthContext";
import useApi from "../hooks/useApi";

type FormData = {
  email: string,
  password: string,
};

function LoginForm() {
  const { formState: { errors }, handleSubmit, register } = useForm<FormData>();
  const { setUser } = useContext(AuthContext);
  const api = useApi();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setShowPassword(false);
    setLoading(true);

    try {
      // setTimeout to simulate waiting for a response, can be removed later
      setTimeout(async () => {
        const response = await api.post("/sessions", data);
        setUser(response.data.data);    
        setLoading(false);
      }, 3000);
    } catch (error) {
      // handle error
    }
  };

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="extrabold">Log In</Text>
      <Text fontSize="sm" marginTop={4}>Enter your email and password to login to the dashboard.</Text>

      <Box 
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        marginTop={8}
      >
        <FormControl isInvalid={Boolean(errors.email)}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <LightMode>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              focusBorderColor="brand.primary"
              borderColor="gray.200"
              size="lg"
              sx={{
                "::placeholder": {
                  color: "gray.400"
                }
              }}
              {...register("email", {
                required: "This field is required.",
              })}
            />
            {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
          </LightMode>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.password)}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <LightMode>
            <InputGroup>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                focusBorderColor="brand.primary"
                borderColor="gray.200"
                size="lg"
                sx={{
                  "::placeholder": {
                    color: "gray.400"
                  }
                }}
                {...register("password", {
                  required: "This field is required.",
                })}
              />
              <InputRightElement height="full">
                <IconButton
                  size="sm"
                  fontSize={20}
                  variant="ghost"
                  icon={<Icon as={showPassword ? RiEyeOffFill : RiEyeFill} />}
                  aria-label="Log out"
                  height="auto"
                  minWidth="0"
                  onClick={() => setShowPassword(!showPassword)}
                  _active={{ bg: "transparent" }}
                  _hover={{ bg: "transparent" }}
                />
              </InputRightElement>
            </InputGroup>
            {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
          </LightMode>
        </FormControl>
 
        <LightMode>
          <Button
            type="submit"
            isFullWidth
            isLoading={loading}
            marginTop="8"
            size="lg"
          >
            Sign In
          </Button>
        </LightMode>
      </Box>
    </Box>
  )
}

export default LoginForm;