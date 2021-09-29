import { Fragment } from "react";
import {
  Grid,
  Box,
  Paper,
  Typography,
  FormControl,
  FormLabel,
  OutlinedInput,
  Stack,
  Select,
  MenuItem,
  Avatar,
  Button,
} from "@mui/material";

import UploadButton from "../UI/Buttons/UploadButton";

import AvatarImage from "../../assets/Avatar.jpg";

const inputFields = [
  { id: "firstName", name: "FIRSNAME" },
  { id: "lastName", name: "LASTNAME" },
  { id: "matricNo", name: "STUDENT ID" },
  { id: "phone", name: "PHONE" },
  { id: "programme", name: "PRGORGRAMME" },
  { id: "department", name: "DEPARTMENT" },
];

const selects = [
  { id: "gender", name: "GENDER", values: ["male", "female"] },
  { id: "level", name: "LEVEL", values: [100, 200, 300, 400, 500] },
];
const Profile = () => {
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
      // onSubmit={handleSubmit}
    >
      <Paper
        elevation={4}
        sx={{ padding: 2, minWidth: 800, backgroundColor: "#8de4af" }}
      >
        <Grid container spacing={4}>
          <Grid item>
            <Typography variant="h6" sx={{ backgroundColor: "#004c23" }}>
              Your details
            </Typography>
            <Box sx={{ backgroundColor: "white", padding: 2, minHeight: 315 }}>
              <Stack direction="column">
                {inputFields.slice(0, 3).map((input) => (
                  <FormControl sx={{ mb: 2 }} size="small">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <FormLabel htmlFor={input.id} sx={{ width: 100 }}>
                        {input.name}
                      </FormLabel>
                      <OutlinedInput id={input.id} type="text" />
                    </Box>
                  </FormControl>
                ))}

                {selects.map((select) => (
                  <FormControl sx={{ mb: 2 }} size="small">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <FormLabel htmlFor={select.id} sx={{ width: 100 }}>
                        {select.name}
                      </FormLabel>

                      <Select
                        name={select.id}
                        input={<OutlinedInput />}
                        sx={{ minWidth: 210 }}
                      >
                        <MenuItem disabled value="">
                          <em>Placeholder</em>
                        </MenuItem>
                        {select.values.map((value) => (
                          <MenuItem value={value}>{value}</MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </FormControl>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ backgroundColor: "#004c23" }}>
              Your Details
            </Typography>
            <Box sx={{ backgroundColor: "white", padding: 2, minHeight: 315 }}>
              <Stack direction="column">
                {inputFields.slice(4, 6).map((input) => (
                  <FormControl sx={{ mb: 2 }} size="small">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <FormLabel htmlFor={input.id} sx={{ width: 130 }}>
                        {input.name}
                      </FormLabel>
                      <OutlinedInput id={input.id} type="text" />
                    </Box>
                  </FormControl>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ backgroundColor: "red" }}>
              Your Passport
            </Typography>
            <Box sx={{ backgroundColor: "white", padding: 2, minHeight: 315 }}>
              <Avatar
                sx={{ width: 200, height: 150, mb: 2 }}
                src={AvatarImage}
                variant="square"
                alt=""
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <UploadButton>Upload</UploadButton>
                <Button variant="contained">Submit</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;
