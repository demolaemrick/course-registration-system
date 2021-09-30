import { useState, FormEvent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootState } from "../../store";
import { updateUser } from "../../store/user/user-actions";

import { UserUpdateOptions } from "../../types/user";

import {
  Grid,
  Box,
  Paper,
  Typography,
  FormControl,
  FormLabel,
  OutlinedInput,
  Stack,
  MenuItem,
  Avatar,
  Button,
  TextField,
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
  const { user, doesNotHaveCompleteProfile } = useSelector(
    (state: RootState) => state.userReducer
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [userData, setUserData] = useState<UserUpdateOptions>({
    gender: "",
    college: "",
    phone: "",
    level: "",
    department: "",
    programme: "",
    profile_picture: "",
  });

  const [imageSrc, setImageSrc] = useState(AvatarImage);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (!fileList) return;

    setUserData({ ...userData, profile_picture: fileList[0] });
    setImageSrc(URL.createObjectURL(fileList[0]));
  };

  const handleProfileUpdate = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profile_picture", userData.profile_picture);
    formData.append("gender", userData.gender);
    formData.append("phone", userData.phone);
    formData.append("level", userData.level);
    formData.append("college", userData.college);
    formData.append("department", userData.department);
    formData.append("programme", userData.programme);

    dispatch(updateUser(formData, history));
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
      onSubmit={handleProfileUpdate}
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
                  <FormControl key={input.id} sx={{ mb: 2 }} size="small">
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
                      <OutlinedInput
                        id={input.id}
                        type="text"
                        name={input.name}
                        onChange={handleChange}
                      />
                    </Box>
                  </FormControl>
                ))}

                {selects.map((select) => (
                  <FormControl key={select.id} sx={{ mb: 2 }} size="small">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <FormLabel htmlFor={select.id} sx={{ width: 100 }}>
                        {select.name}
                      </FormLabel>

                      <TextField
                        select
                        name={select.id}
                        variant="outlined"
                        onChange={handleChange}
                        sx={{ minWidth: 210 }}
                        size="small"
                        value={
                          select.id === "gender"
                            ? userData.gender
                            : userData.level
                        }
                      >
                        <MenuItem disabled value="">
                          <em>Placeholder</em>
                        </MenuItem>
                        {select.values.map((value, index) => (
                          <MenuItem key={index} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </TextField>
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
                  <FormControl key={input.id} sx={{ mb: 2 }} size="small">
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
                src={imageSrc}
                variant="square"
                alt=""
              />
              {doesNotHaveCompleteProfile && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <UploadButton change={handlePhotoChange}>Upload</UploadButton>
                  <Button variant="contained">Submit</Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;
