import React from "react";
import Table from "../UI/Table";
import { Flex, Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <React.Fragment>
      <Flex justify="center" align="center" h="400px">
        <Center w="80%">
          <Table />
        </Center>
      </Flex>
    </React.Fragment>
  );
};

export default Home;