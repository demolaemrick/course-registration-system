import { useState, FormEvent } from "react";
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Card from "../UI/Card/Card";
import { RegisterFormData } from "../../types/user";
import { register } from "../../store/user/user-actions";
import { RootState } from "../../store";
import FormErrorMessage from "../UI/FormErrorMessage";

const SignUp = () => {
  const error = useSelector(
    (state: RootState) => state.userReducer.registerValidationError
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: "",
    lastName: "",
    email: "",
    matricNo: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(register(formData, history));
  };
  return (
    <Center>
      <Card width="30%">
        <VStack spacing={4}>
          <Text fontSize="4xl">Sign Up</Text>

          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              focusBorderColor="teal.200"
              placeholder="Enter your first name"
              size="sm"
              name="firstName"
              onChange={handleChange}
              isInvalid={!!error?.firstName}
            />
            <FormErrorMessage>{error?.firstName}</FormErrorMessage>
          </FormControl>
          <FormControl id="secondName" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              focusBorderColor="teal.200"
              placeholder="Enter your last name"
              size="sm"
              name="lastName"
              onChange={handleChange}
              isInvalid={!!error?.lastName}
            />
            <FormErrorMessage>{error?.lastName}</FormErrorMessage>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              focusBorderColor="teal.200"
              placeholder="Enter your email address"
              size="sm"
              name="email"
              onChange={handleChange}
              isInvalid={!!error?.email}
            />

            <FormErrorMessage>{error?.email}</FormErrorMessage>
          </FormControl>
          <FormControl id="matricNo" isRequired>
            <FormLabel>Matric Number</FormLabel>
            <Input
              type="text"
              focusBorderColor="teal.200"
              placeholder="Enter your matric number"
              size="sm"
              name="matricNo"
              onChange={handleChange}
              isInvalid={!!error?.matricNo}
            />
            <FormErrorMessage>{error?.matricNo}</FormErrorMessage>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              focusBorderColor="teal.200"
              placeholder="Enter your password"
              size="sm"
              name="password"
              onChange={handleChange}
              isInvalid={!!error?.password}
            />

            <FormErrorMessage>{error?.password}</FormErrorMessage>
          </FormControl>
          <FormControl id="passwordConfirm" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              focusBorderColor="teal.200"
              placeholder="Confirm your password"
              size="sm"
              name="passwordConfirm"
              onChange={handleChange}
              isInvalid={!!error?.passwordConfirm}
            />

            <FormErrorMessage>{error?.passwordConfirm}</FormErrorMessage>
          </FormControl>

          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Link to="/login">
            <p style={{ color: "blue" }}>Already have an account?</p>
          </Link>
        </VStack>
      </Card>
    </Center>
  );
};

export default SignUp;
