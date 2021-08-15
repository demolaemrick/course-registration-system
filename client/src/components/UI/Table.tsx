import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Checkbox,
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
      <TableCaption>Course Outline</TableCaption>
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
