import { useRef } from "react";
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { login } from "../../store/user/user-actions";
import { RootState } from "../../store";

import Card from "../UI/Card/Card";
import FormErrorMessage from "../UI/FormErrorMessage";

const Auth = () => {
  const { loginValidationError: validationError, authError } = useSelector(
    (state: RootState) => state.userReducer
  );

  const matricNoRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    const enteredMatricNo = matricNoRef.current!.value;
    const enteredPassword = passwordRef.current!.value;

    const credentials = {
      matricNo: enteredMatricNo,
      password: enteredPassword,
    };

    dispatch(login(credentials, history));
  };

  return (
    <Center h="600">
      <Card width="30%">
        <VStack spacing={4}>
          <Text fontSize="4xl">Log In</Text>
          <Text fontSize="lg" color="red.500">
            {authError}
          </Text>
          <FormControl id="matricNo">
            <FormLabel>Matric Number</FormLabel>
            <Input
              type="text"
              focusBorderColor="teal.200"
              placeholder="Enter your matric number"
              size="sm"
              ref={matricNoRef}
              isInvalid={!!validationError?.matricNo}
            />
            <FormErrorMessage>{validationError?.matricNo}</FormErrorMessage>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              focusBorderColor="teal.200"
              placeholder="Enter your password"
              size="sm"
              ref={passwordRef}
              isInvalid={!!validationError?.password}
            />
            <FormErrorMessage>{validationError?.password}</FormErrorMessage>
          </FormControl>
          <Button
            onClick={handleSubmit}
            mt={4}
            colorScheme="teal"
            type="submit"
          >
            Sign In
          </Button>
          <Link to="/register">
            <p style={{ color: "blue" }}>Create new account?</p>
          </Link>
        </VStack>
      </Card>
    </Center>
  );
};

export default Auth;
