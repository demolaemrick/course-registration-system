import { useState, FormEvent, ChangeEvent } from "react";

import {
  Paper,
  FormControl,
  FormLabel,
  OutlinedInput,
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(register(formData, history));
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "600px",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 4,
          minWidth: "30%",
        }}
      >
        <Typography variant="h3" mb={2}>
          Sign Up
        </Typography>
        <FormControl id="firstName" fullWidth size="small" required>
          <FormLabel>First Name</FormLabel>
          <OutlinedInput
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            onChange={handleChange}
            error={!!error?.firstName}
          />
          <FormErrorMessage mt={1}>{error?.firstName}</FormErrorMessage>
        </FormControl>
        <FormControl id="secondName" fullWidth size="small" required>
          <FormLabel>Last Name</FormLabel>
          <OutlinedInput
            name="lastName"
            onChange={handleChange}
            placeholder="Enter your last name"
            error={!!error?.lastName}
          />
          <FormErrorMessage>{error?.lastName}</FormErrorMessage>
        </FormControl>
        <FormControl id="email" fullWidth size="small" required>
          <FormLabel>Email Address</FormLabel>
          <OutlinedInput
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            error={!!error?.email}
          />

          <FormErrorMessage mt={1}>{error?.email}</FormErrorMessage>
        </FormControl>
        <FormControl id="matricNo" fullWidth size="small" required>
          <FormLabel>Matric Number</FormLabel>
          <OutlinedInput
            type="text"
            placeholder="Enter your matric number"
            name="matricNo"
            onChange={handleChange}
            error={!!error?.matricNo}
          />
          <FormErrorMessage mt={1}>{error?.matricNo}</FormErrorMessage>
        </FormControl>
        <FormControl id="password" fullWidth size="small" required>
          <FormLabel>Password</FormLabel>
          <OutlinedInput
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
            error={!!error?.password}
          />
          <FormErrorMessage mt={1}>{error?.password}</FormErrorMessage>
        </FormControl>
        <FormControl id="passwordConfirm" fullWidth size="small" required>
          <FormLabel>Confirm Password</FormLabel>
          <OutlinedInput
            type="password"
            placeholder="Confirm your password"
            name="passwordConfirm"
            onChange={handleChange}
            error={!!error?.passwordConfirm}
          />

          <FormErrorMessage mt={1}>{error?.passwordConfirm}</FormErrorMessage>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          sx={{ my: 3 }}
          type="submit"
        >
          Sign Up
        </Button>
        <Link to="/login">
          <Typography variant="subtitle2">Already have an account?</Typography>
        </Link>
      </Paper>
    </Box>
  );
};

export default SignUp;
