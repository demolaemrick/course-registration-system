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
import Logo from "../Logo";

const Login = () => {
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
        <Box sx={{ height: 80, width: 80 }}>
          <Logo />
        </Box>

        <Typography variant="subtitle1" color="error" mb={2}>
          {authError}
        </Typography>
        <FormControl sx={{ mb: 2 }} fullWidth size="small">
          <FormLabel htmlFor="matricNo">Username</FormLabel>
          <OutlinedInput
            id="matricNo"
            placeholder="Enter username"
            type="text"
            inputRef={matricNoRef}
          />
          <FormErrorMessage mt={2}>
            {validationError?.matricNo}
          </FormErrorMessage>
        </FormControl>

        <FormControl sx={{ mb: 2 }} fullWidth size="small">
          <FormLabel htmlFor="password">Password</FormLabel>
          <OutlinedInput
            id="password"
            placeholder="Enter password"
            type="password"
            inputRef={passwordRef}
            error={!!validationError?.password}
          />
          <FormErrorMessage mt={2}>
            {validationError?.password}
          </FormErrorMessage>
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          sx={{ my: 3 }}
          color="primary"
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <Typography
          color="inherit"
          sx={{ textDecoration: "none" }}
          component={Link}
          to="/register"
          variant="subtitle2"
        >
          Create new account?
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
