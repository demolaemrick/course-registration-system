import { useSelector } from "react-redux";
import { RootState } from "../../store";

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
} from "@chakra-ui/react";

import Card from "../UI/Card/Card";
import FileButton from "../UI/Buttons/FileButton/FileButton";
import CustomButton from "../UI/Buttons/CustomButton";

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);

  return (
    <Center h="600px">
      <Card width="70%">
        <Flex w="100%" mx="auto">
          <Box w="40%" mr="4" bg="tomato">
            <Heading bg="red" size="md" mb="1" p="3">
              Your Details
            </Heading>
            <FormControl id="Name" mb="3">
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

            <FormControl id="Name" mb="3">
              <HStack>
                <FormLabel w="30%">LASTNAME</FormLabel>
                <Input
                  maxWidth="50%"
                  type="text"
                  focusBorderColor="teal.200"
                  size="sm"
                  lastName
                  defaultValue={user?.lastName}
                  isReadOnly={user?.lastName !== null}
                />
              </HStack>
            </FormControl>

            <FormControl id="Gender" mb="3">
              <HStack>
                <FormLabel w="30%">GENDER</FormLabel>
                <Input
                  maxWidth="50%"
                  type="gender"
                  focusBorderColor="teal.200"
                  size="sm"
                  defaultValue={user?.gender !== null ? user?.gender : ""}
                  isReadOnly={user?.gender !== null}
                />
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
                <Input
                  maxWidth="50%"
                  type="text"
                  focusBorderColor="teal.200"
                  size="sm"
                  defaultValue={user?.level !== null ? user?.level : ""}
                  isReadOnly={user?.level !== null}
                />
              </HStack>
            </FormControl>
          </Box>
          <Box w="40%" mr="4" bg="blue">
            <Heading bg="red" size="md" mb="1" p="3">
              Your Details
            </Heading>
            <FormControl id="Dept" mb="3">
              <FormControl id="Programme" mb="3">
                <HStack>
                  <FormLabel w="32%">PROGRAMME</FormLabel>
                  <Input
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
                <FormLabel w="32%">DEPARTMENT</FormLabel>
                <Input
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

          <Box w="30%" bg="blue">
            <Heading bg="red" size="md" mb="1" p="3">
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
                <FileButton>Browse...</FileButton>
              </Center>
              <Center mt="20px">
                <CustomButton>Submit</CustomButton>
              </Center>
            </Box>
          </Box>
        </Flex>
      </Card>
    </Center>
  );
};

export default Profile;
