import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Checkbox,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { coursesType } from "../../types/course";

const TableLayout = ({ courses }: coursesType) => {
  const coursesData = courses.map((course) => {
    return (
      <Tr key={course.uuid}>
        <Td>{course.course_code}</Td>
        <Td>{course.course_title}</Td>
        <Td>{course.course_unit}</Td>
        <Td isNumeric>
          <Checkbox colorScheme="red" borderColor="red" />
        </Td>
      </Tr>
    );
  });

  return (
    <Table variant="striped" colorScheme="teal">
      <TableCaption>
        <Flex>
          <Box p="4" bg="white.400">
            Course unit: <strong>22</strong>
          </Box>
          <Spacer />
          <Box p="4" bg="green.400">
            Submit
          </Box>
        </Flex>
      </TableCaption>
      <Thead>
        <Tr>
          <Th>Course code</Th>
          <Th>Course title</Th>
          <Th>Unit</Th>
          <Th isNumeric>Select</Th>
        </Tr>
      </Thead>
      <Tbody>{coursesData}</Tbody>
    </Table>
  );
};

export default TableLayout;
