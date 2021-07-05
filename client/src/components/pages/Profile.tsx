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

          <Spacer />
          <Image
            boxSize="150px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Flex>
      </Card>
    </Center>
  );
};

export default Profile;
