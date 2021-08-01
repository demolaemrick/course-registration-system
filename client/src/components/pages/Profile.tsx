import { useSelector } from "react-redux"
import { RootState } from "../../store";


import {
  Center,
  Flex,
  Box,
  Spacer,
  Image,
  HStack,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";


import Card from "../UI/Card/Card";

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.userReducer)
  console.log(user)
  return (
    <Center h="500px">
      <Card width="50%">
        <Flex>
          <Box w="600px">
            <FormControl id="Name" mb="3">
              <HStack>
                <FormLabel w="73px">Name:</FormLabel>
                <Input
                  maxWidth="50%"
                  type="text"
                  focusBorderColor="teal.200"
                  size="sm"
                />
              </HStack>
            </FormControl>

            <FormControl id="matricNo" mb="3">
              <HStack>
                <FormLabel>Matric No:</FormLabel>
                <Input
                  maxWidth="50%"
                  type="text"
                  focusBorderColor="teal.200"
                  size="sm"
                />
              </HStack>
            </FormControl>

            <FormControl id="Dept" mb="3">
              <HStack>
                <FormLabel w="73px">Dept:</FormLabel>
                <Input
                  maxWidth="50%"
                  type="text"
                  focusBorderColor="teal.200"
                  size="sm"
                />
              </HStack>
            </FormControl>

            <FormControl id="College" mb="3">
              <HStack>
                <FormLabel w="73px">College:</FormLabel>
                <Input
                  maxWidth="50%"
                  type="text"
                  focusBorderColor="teal.200"
                  size="sm"
                />
              </HStack>
            </FormControl>

            <FormControl id="Phone" mb="3">
              <HStack>
                <FormLabel w="73px">Phone:</FormLabel>
                <Input
                  maxWidth="50%"
                  type="text"
                  focusBorderColor="teal.200"
                  // placeholder="Enter your matric number"
                  size="sm"
                />
              </HStack>
            </FormControl>

            <FormControl id="Programme" mb="3">
              <HStack>
                <FormLabel w="73px">Programme: </FormLabel>
                <Input
                  maxWidth="50%"
                  type="text"
                  focusBorderColor="teal.200"
                  size="sm"
                />
              </HStack>
            </FormControl>

            <FormControl id="level" mb="3">
              <HStack>
                <FormLabel w="73px">Level:</FormLabel>
                <Input
                  maxWidth="50%"
                  type="text"
                  focusBorderColor="teal.200"
                  size="sm"
                />
              </HStack>
            </FormControl>
          </Box>

          <Spacer />
          <Box>
            <Image
              boxSize="150px"
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
        </Flex>
      </Card>
    </Center>
  );
};

export default Profile;
