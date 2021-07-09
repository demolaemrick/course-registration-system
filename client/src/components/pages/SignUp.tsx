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
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Card from "../UI/Card/Card";
import { userFormData } from "../../types/user";
import { register } from "../../store/user/user-actions";

const SignUp = () => {
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
    console.log(formData);
    dispatch(register(formData, history));
  };
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
              name="firstName"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="secondName">
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              focusBorderColor="teal.200"
              placeholder="Enter your last name"
              size="sm"
              name="lastName"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              focusBorderColor="teal.200"
              placeholder="Enter your email address"
              size="sm"
              name="email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="matricNo">
            <FormLabel>Matric Number</FormLabel>
            <Input
              type="text"
              focusBorderColor="teal.200"
              placeholder="Enter your matric number"
              size="sm"
              name="matricNo"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              focusBorderColor="teal.200"
              placeholder="Enter your password"
              size="sm"
              name="password"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="passwordConfirm">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              focusBorderColor="teal.200"
              placeholder="Confirm your password"
              size="sm"
              name="passwordConfirm"
              onChange={handleChange}
            />
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
