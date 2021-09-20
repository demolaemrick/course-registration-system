import {
  Paper,
  FormControl,
  FormLabel,
  OutlinedInput,
  Box,
  Button,
  Typography,
} from "@mui/material";

const NewLogin = () => {
  return (
    <Box
      component="form"
      //   style={{ height: "400px" }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "600px",
      }}
      noValidate
      autoComplete="off"
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
        <Typography variant="h3">Log In</Typography>
        <FormControl sx={{ width: "50ch", mb: 2 }} size="small">
          <FormLabel htmlFor="matricNo">Student Id</FormLabel>
          <OutlinedInput
            id="matricNo"
            placeholder="Please enter matric number"
            type="text"
          />
        </FormControl>

        <FormControl sx={{ width: "50ch", mb: 2 }} size="small">
          <FormLabel htmlFor="password">Password</FormLabel>
          <OutlinedInput
            id="password"
            placeholder="Please enter password"
            type="password"
          />
        </FormControl>
        <Button variant="contained" sx={{ mb: 2 }} color="success">
          Sign In
        </Button>
        <Typography variant="subtitle2">Create new account?</Typography>
      </Paper>
    </Box>
  );
};

export default NewLogin;
