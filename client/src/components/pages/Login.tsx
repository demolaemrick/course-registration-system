import {
  Center,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Text
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom"

import Card from "../UI/Card/Card";

const Auth = () => {
  const history = useHistory()

  return (
    <Center h="600">
      <Card width="30%">
        <VStack spacing={4}>
        <Text fontSize="4xl">Log In</Text>
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
          <Button onClick={() => history.push('/')} mt={4} colorScheme="teal" type="submit">
            Sign In
          </Button>
        </VStack>
      </Card>
    </Center>
  );
};

export default Auth;
