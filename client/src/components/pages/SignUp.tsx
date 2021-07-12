import { useState, FormEvent } from "react";
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Card from "../UI/Card/Card";
import { userFormData } from "../../types/user";
import { register } from "../../store/user/user-actions";
import { RootState } from "../../store";

const SignUp = () => {
  const errors = useSelector((state: RootState) => state.userReducer.errors);
  console.log(errors);
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState<userFormData>({
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
    <Center h="650">
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
              isInvalid={!!errors.firstName}
            />
            <p>{errors.firstName}</p>
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
            />
            {errors.lastName && (
              <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            )}
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
            />
            {errors.email && (
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            )}
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
            />
            {errors.matricNo && (
              <FormErrorMessage>{errors.matricNo}</FormErrorMessage>
            )}
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
            />
            {errors.password && (
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            )}
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
            />
            {errors.passwordConfirm && (
              <FormErrorMessage>{errors.passwordConfirm}</FormErrorMessage>
            )}
          </FormControl>

          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </VStack>
      </Card>
    </Center>
  );
};

export default SignUp;
