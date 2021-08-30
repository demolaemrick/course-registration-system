import { useState, FormEvent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store";
import { updateUser } from "../../store/user/user-actions";

import {
  Center,
  Flex,
  Box,
  Heading,
  Image,
  HStack,
  FormControl,
  Input,
  FormLabel,
  Select,
} from "@chakra-ui/react";

// import { Formik, Form } from "formik";

import Card from "../UI/Card/Card";
import FileButton from "../UI/Buttons/FileButton/FileButton";
import CustomButton from "../UI/Buttons/CustomButton";

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    gender: "",
    college: "",
    phone: "",
    level: "",
    department: "",
    programme: "",
    profile_picture: "" as string | Blob,
  });

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
  };

  const handleProfileUpdate = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profile_picture", userData.profile_picture);
    formData.append("gender", userData.gender);
    formData.append("phone", userData.phone);
    formData.append("level", userData.level);
    formData.append("department", userData.department);
    formData.append("programme", userData.programme);

    console.log(formData);
    dispatch(updateUser(formData));
  };

  return (
    <Center h="600px">
      <Card width="70%">
        <form onSubmit={handleProfileUpdate} encType="multipart/form-data">
          <Flex w="100%" mx="auto">
            <Box w="40%" mr="4" bg="gray.100">
              <Heading bg="teal.100" size="md" mb="1" p="3">
                Your Details
              </Heading>
              <Box pl="2">
                <FormControl id="firstName" mb="3">
                  <HStack>
                    <FormLabel w="30%">FIRSTNAME</FormLabel>
                    <Input
                      maxWidth="50%"
                      type="text"
                      focusBorderColor="teal.200"
                      size="sm"
                      defaultValue={user?.firstName}
                      isReadOnly={user?.firstName !== null}
                    />
                  </HStack>
                </FormControl>

                <FormControl id="lastName" mb="3">
                  <HStack>
                    <FormLabel w="30%">LASTNAME</FormLabel>
                    <Input
                      maxWidth="50%"
                      type="text"
                      focusBorderColor="teal.200"
                      size="sm"
                      defaultValue={user?.lastName}
                      isReadOnly={user?.lastName !== null}
                    />
                  </HStack>
                </FormControl>

                <FormControl id="Gender" mb="3">
                  <HStack>
                    <FormLabel w="30%">GENDER</FormLabel>
                    {/* <Input
                    maxWidth="50%"
                    type="text"
                    focusBorderColor="teal.200"
                    size="sm"
                    defaultValue={user?.gender !== null ? user?.gender : ""}
                    isReadOnly={user?.gender !== null}
                  /> */}
                    <Select
                      onChange={handleChange}
                      name="gender"
                      placeholder="Select gender"
                      maxWidth="50%"
                      focusBorderColor="teal.200"
                      size="sm"
                      isReadOnly
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Select>
                  </HStack>
                </FormControl>

                <FormControl id="matricNo" mb="3">
                  <HStack>
                    <FormLabel w="30%">MATRIC NO</FormLabel>
                    <Input
                      maxWidth="50%"
                      type="text"
                      focusBorderColor="teal.200"
                      size="sm"
                      defaultValue={user?.matricNo}
                      isReadOnly
                    />
                  </HStack>
                </FormControl>

                <FormControl id="College" mb="3">
                  <HStack>
                    <FormLabel w="30%">COLLEGE</FormLabel>
                    <Input
                      onChange={handleChange}
                      name="college"
                      maxWidth="50%"
                      type="text"
                      focusBorderColor="teal.200"
                      size="sm"
                      defaultValue={user?.college !== null ? user?.college : ""}
                      isReadOnly={user?.college !== null}
                    />
                  </HStack>
                </FormControl>

                <FormControl id="Phone" mb="3">
                  <HStack>
                    <FormLabel w="30%">PHONE</FormLabel>
                    <Input
                      onChange={handleChange}
                      name="phone"
                      maxWidth="50%"
                      type="text"
                      focusBorderColor="teal.200"
                      size="sm"
                      defaultValue={user?.phone !== null ? user?.phone : ""}
                      isReadOnly={user?.phone !== null}
                    />
                  </HStack>
                </FormControl>

                <FormControl id="level" mb="3">
                  <HStack>
                    <FormLabel w="30%">LEVEL</FormLabel>
                    {/* <Input
                    maxWidth="50%"
                    type="text"
                    focusBorderColor="teal.200"
                    size="sm"
                    defaultValue={user?.level !== null ? user?.level : ""}
                    isReadOnly={user?.level !== null}
                  /> */}

                    <Select
                      name="level"
                      onChange={handleChange}
                      placeholder="Select level"
                      maxWidth="50%"
                      focusBorderColor="teal.200"
                      size="sm"
                      isReadOnly
                    >
                      <option value="100">100</option>
                      <option value="200">200</option>
                      <option value="300">300</option>
                      <option value="400">400</option>
                      <option value="500">500</option>
                    </Select>
                  </HStack>
                </FormControl>
              </Box>
            </Box>

            <Box w="40%" mr="4" bg="gray.100">
              <Heading bg="teal.100" size="md" mb="1" p="3">
                Your Details
              </Heading>
              <Box pl="2">
                <FormControl id="Dept" mb="3">
                  <FormControl id="Programme" mb="3">
                    <HStack>
                      <FormLabel w="34%">PROGRAMME</FormLabel>
                      <Input
                        onChange={handleChange}
                        name="programme"
                        maxWidth="50%"
                        type="text"
                        focusBorderColor="teal.200"
                        size="sm"
                        defaultValue={
                          user?.programme !== null ? user?.programme : ""
                        }
                        isReadOnly={user?.programme !== null}
                      />
                    </HStack>
                  </FormControl>

                  <HStack>
                    <FormLabel w="34%">DEPARTMENT</FormLabel>
                    <Input
                      onChange={handleChange}
                      name="department"
                      maxWidth="50%"
                      type="text"
                      focusBorderColor="teal.200"
                      size="sm"
                      defaultValue={
                        user?.department !== null ? user?.department : ""
                      }
                      isReadOnly={user?.department !== null}
                    />
                  </HStack>
                </FormControl>
              </Box>
            </Box>

            <Box w="30%" bg="gray.100">
              <Heading bg="teal.100" size="md" mb="1" p="3">
                Your Passport
              </Heading>
              <Box m="auto" w="150px">
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  // style={{ margin: "auto" }}
                />

                <Center mt="20px">
                  <FileButton change={handlePhotoChange}>Browse...</FileButton>
                </Center>
                <Center mt="20px">
                  <CustomButton type="submit">Submit</CustomButton>
                </Center>
              </Box>
            </Box>
          </Flex>
        </form>
      </Card>
    </Center>
  );
};

export default Profile;
