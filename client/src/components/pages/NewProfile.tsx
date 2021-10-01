import { useState, FormEvent, ChangeEvent, Fragment } from "react";
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
  Stack,
  MenuItem,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import UploadButton from "../UI/Buttons/UploadButton";

import AvatarImage from "../../assets/Avatar.jpg";

const inputFields = [
  { id: "firstName", name: "FIRSTNAME" },
  { id: "lastName", name: "LASTNAME" },
  { id: "matricNo", name: "STUDENT ID" },
  { id: "phone", name: "PHONE" },
  { id: "programme", name: "PRGORGRAMME" },
  { id: "department", name: "DEPARTMENT" },
  { id: "college", name: "COLLEGE" },
];

const selects = [
  {
    id: "gender",
    name: "GENDER",
    values: ["male", "female"],
  },
  {
    id: "level",
    name: "LEVEL",
    values: ["100", "200", "300", "400", "500"],
  },
];

const Profile = () => {
  const { user, doesNotHaveCompleteProfile, isLoading } = useSelector(
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

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;

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
    <Fragment>
      {!isLoading && (
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
          encType="multipart/form-data"
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
                <Box
                  sx={{ backgroundColor: "white", padding: 2, minHeight: 315 }}
                >
                  <Stack direction="column">
                    {inputFields.slice(0, 3).map((input) => (
                      <FormControl key={input.id} sx={{ mb: 2 }}>
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
                          <TextField
                            id={input.id}
                            variant="outlined"
                            required
                            type="text"
                            name={input.id}
                            onChange={handleChange}
                            size="small"
                            value={
                              user?.[input.id] === null
                                ? userData[input.id]
                                : undefined
                            }
                            defaultValue={
                              user?.[input.id] !== null
                                ? user?.[input.id]
                                : undefined
                            }
                            disabled={user?.[input.id] !== null}
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
                          <Select
                            name={select.id}
                            variant="outlined"
                            onChange={handleSelectChange}
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
                <Box
                  sx={{ backgroundColor: "white", padding: 2, minHeight: 315 }}
                >
                  <Stack direction="column">
                    {inputFields.slice(4).map((input) => (
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
                            {input.name}
                          </FormLabel>
                          <TextField
                            variant="outlined"
                            required
                            id={input.id}
                            name={input.id}
                            type="text"
                            size="small"
                            onChange={handleChange}
                            value={
                              user?.[input.id] === null
                                ? userData[input.id]
                                : undefined
                            }
                            defaultValue={
                              user?.[input.id] !== null
                                ? user?.[input.id]
                                : undefined
                            }
                            disabled={user?.[input.id] !== null}
                          />
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
                <Box
                  sx={{ backgroundColor: "white", padding: 2, minHeight: 315 }}
                >
                  <Avatar
                    sx={{ width: 200, height: 200, mb: 2, objectFit: "cover" }}
                    src={
                      user?.profile_picture !== null
                        ? user?.profile_picture
                        : imageSrc
                    }
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
                      <UploadButton change={handlePhotoChange}>
                        Upload
                      </UploadButton>
                      <Button variant="contained" type="submit">
                        Submit
                      </Button>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}
    </Fragment>
  );
};

export default Profile;
