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
  return (
    <Center h="300px">
      <Card width="50%">
        <Flex>
          <Box w="600px">
            <FormControl id="matricNo" mb="3">
              <HStack>
                <FormLabel w="73px">Name:</FormLabel>
                <Input
                  maxWidth="50%"
                  type="text"
                  focusBorderColor="teal.200"
                  placeholder="Enter your matric number"
                  size="sm"
                />
              </HStack>
            </FormControl>
            <FormControl id="matricNo">
              <HStack>
                <FormLabel>Matric No:</FormLabel>
                <Input
                  maxWidth="50%"
                  type="text"
                  focusBorderColor="teal.200"
                  placeholder="Enter your matric number"
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
