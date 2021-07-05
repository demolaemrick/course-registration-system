import {
  Center,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";

import Card from "../UI/Card/Card";

const SignUp = () => {
  return (
    <Center h="650">
      <Card width="30%">
        <VStack spacing={4}>
          <Text fontSize="4xl">Sign Up</Text>
          <FormControl id="firstName">
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              focusBorderColor="teal.200"
              placeholder="Enter your first name"
              size="sm"
            />
          </FormControl>
          <FormControl id="secondName">
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              focusBorderColor="teal.200"
              placeholder="Enter your last name"
              size="sm"
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              focusBorderColor="teal.200"
              placeholder="Enter your email address"
              size="sm"
            />
          </FormControl>
          <FormControl id="matricNo">
            <FormLabel>Matric Number</FormLabel>
            <Input
              type="text"
              focusBorderColor="teal.200"
              placeholder="Enter your matric number"
              size="sm"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              focusBorderColor="teal.200"
              placeholder="Enter your password"
              size="sm"
            />
          </FormControl>
          <FormControl id="passwordConfirm">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              focusBorderColor="teal.200"
              placeholder="Confirm your password"
              size="sm"
            />
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Sign Up
          </Button>
        </VStack>
      </Card>
    </Center>
  );
};

export default SignUp;
