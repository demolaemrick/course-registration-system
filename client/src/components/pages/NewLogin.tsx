import { useRef, FormEvent } from "react";

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

import { login } from "../../store/user/user-actions";
import { RootState } from "../../store";

import FormErrorMessage from "../UI/FormErrorMessage";

const NewLogin = () => {
  const { loginValidationError: validationError, authError } = useSelector(
    (state: RootState) => state.userReducer
  );

  const matricNoRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const enteredMatricNo = matricNoRef.current!.value;
    const enteredPassword = passwordRef.current!.value;

    const credentials = {
      matricNo: enteredMatricNo,
      password: enteredPassword,
    };

    console.log(credentials);
    dispatch(login(credentials, history));
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
          Log In
        </Typography>
        <Typography variant="subtitle1" color="error" mb={2}>
          {authError}
        </Typography>
        <FormControl sx={{ width: "95%", mb: 2 }} size="small">
          <FormLabel htmlFor="matricNo">Student Id</FormLabel>
          <OutlinedInput
            id="matricNo"
            placeholder="Please enter matric number"
            type="text"
            inputRef={matricNoRef}
            error={!!validationError?.matricNo}
          />
          <FormErrorMessage>{validationError?.matricNo}</FormErrorMessage>
        </FormControl>

        <FormControl sx={{ width: "95%", mb: 2 }} size="small">
          <FormLabel htmlFor="password">Password</FormLabel>
          <OutlinedInput
            id="password"
            placeholder="Please enter password"
            type="password"
            inputRef={passwordRef}
            error={!!validationError?.password}
          />
          <FormErrorMessage>{validationError?.password}</FormErrorMessage>
        </FormControl>
        <Button
          variant="contained"
          sx={{ my: 3 }}
          color="success"
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <Link to="/register">
          <Typography variant="subtitle2">Create new account?</Typography>
        </Link>
      </Paper>
    </Box>
  );
};

export default NewLogin;
