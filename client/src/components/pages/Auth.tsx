import React from "react";
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";

const Auth = () => {
  return (
    <Center>
      <VStack spacing={4} w="30%" style={{textAlign: 'left'}}>
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
        <Button
          mt={4}        
          colorScheme="teal"          
          type="submit"
        >
          Submit
        </Button>
      </VStack>
    </Center>
  );
};

export default Auth;
