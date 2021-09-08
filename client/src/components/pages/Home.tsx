import React, { useEffect } from "react";
import { Flex, Center } from "@chakra-ui/react";

import { fetchCourses } from "../../store/course/course-actions"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import Table from "../UI/Table";
import Table2 from "../UI/Table2";

const Home = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state: RootState) => state.courseReducer);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Flex justify="center" align="center" h="500px">
        <Center w="80%">          
          {/* {courses.length > 0 && <Table courses={courses} />} */}
          {courses.length > 0 && <Table2 courses={courses} />}
        </Center>
      </Flex>
    </React.Fragment>
  );
};

export default Home;
