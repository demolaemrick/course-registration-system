import React from "react";
import { Flex, Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import Table from "../UI/Table";

const Home = () => {
  const { courses } = useSelector((state: RootState) => state.courseReducer);
  return (
    <React.Fragment>
      <Flex justify="center" align="center" h="400px">
        <Center w="80%">
          {courses.length > 0 && <Table courses={courses} />}
        </Center>
      </Flex>
    </React.Fragment>
  );
};

export default Home;
