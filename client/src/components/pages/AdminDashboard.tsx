import { useState, FormEvent, ChangeEvent, Fragment } from "react";

import {
  Grid,
  Box,
  Paper,
  Typography,
  FormControl,
  FormLabel,
  Stack,
  MenuItem,
  Button,
  TextField,
  Divider,
  Container,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const data = [
  { id: "name", name: "Your-Name", value: "Akindotuni Ademola" },
  { id: "email", name: "Email", value: "ademolaakindotuni@gmail.com" },
  { id: "phone", name: "Phone", value: "08134905896" },
  { id: "gender", name: "Gender", value: "Male" },
  { id: "staffId", name: "StaffId", value: "AUO121345" },
  { id: "position", name: "Position", value: "Admin" },
];
const inputFields = [
  { id: "firstName", name: "FIRSTNAME", type: "text" },
  { id: "lastName", name: "LASTNAME", type: "text" },
  { id: "password", name: "PASSWORD", type: "password" },
  { id: "confirmPassword", name: "PASSWORD2", type: "password" },
];

const AdminDashboard = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    position: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(userData);
    //   dispatch(updateUser(formData, history));
  };
  return (
    <Fragment>
      <Container
        fixed
        // sx={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        //   minHeight: "600px",
        //   width: "800px",
        //   margin: "0 auto",
        // }}
      >
        <Box sx={{ marginBottom: 5, marginTop: 2 }}>
          <Typography variant="h4" mb={1}>
            WELCOME: AKINDOTUNI ADEMOLA
          </Typography>
          <Typography variant="h6">
            Tuesday, 7 October 2021|9:27:41PM
          </Typography>
          <Divider sx={{ backgroundColor: "#389583", height: 2 }} />
        </Box>

        <Paper
          elevation={6}
          sx={{ padding: 2, minWidth: 800, backgroundColor: "#c9d6d1" }}
        >
          <Grid container columns={16} spacing={4}>
            <Grid item xs={8}>
              <Typography
                variant="h6"
                color="white"
                sx={{ backgroundColor: "#801348", paddingLeft: 1 }}
              >
                Your Details
              </Typography>

              <Box
                sx={{
                  backgroundColor: "white",
                  padding: 2,
                  minHeight: 315,
                  height: 348,
                }}
              >
                <Stack direction="column">
                  {data.map(({ id, name, value }) => (
                    <Box
                      key={id}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 2,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ width: 100, marginRight: 1 }}
                      >
                        {name}:
                      </Typography>
                      <Typography variant="subtitle1">{value}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="h6"
                color="white"
                sx={{ backgroundColor: "#801348", paddingLeft: 1 }}
              >
                Register New Member
              </Typography>
              <Box
                component="form"
                sx={{ backgroundColor: "white", padding: 2, minHeight: 315 }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Stack direction="column">
                  {inputFields.map((input) => (
                    <FormControl key={input.id} sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <FormLabel htmlFor={input.id} sx={{ width: 130 }}>
                          {input.name}:
                        </FormLabel>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id={input.id}
                          name={input.id}
                          type={input.type}
                          size="small"
                          onChange={handleChange}
                        />
                      </Box>
                    </FormControl>
                  ))}
                  <FormControl sx={{ mb: 2 }} size="small">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <FormLabel htmlFor="position" sx={{ width: 100 }}>
                        POSITION:
                      </FormLabel>
                      <Select
                        name="position"
                        variant="outlined"
                        onChange={handleSelectChange}
                        sx={{ minWidth: 210, width: "80%" }}
                        size="small"
                      >
                        <MenuItem disabled value="">
                          <em>Placeholder</em>
                        </MenuItem>
                        <MenuItem value="hod">HOD</MenuItem>
                      </Select>
                    </Box>
                  </FormControl>
                  <Button>Submit</Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default AdminDashboard;
