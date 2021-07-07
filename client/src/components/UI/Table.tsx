import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Checkbox,
} from "@chakra-ui/react";

const TableLayout = () => {
  return (
    <Table variant="striped" colorScheme="teal">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>Course code</Th>
          <Th>Course title</Th>
          <Th>Unit</Th>
          <Th isNumeric>Select</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>inches</Td>
          <Td>Introduction to computer science</Td>
          <Td>25.4</Td>
          <Td isNumeric>
            <Checkbox colorScheme="red" borderColor="red" />
          </Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td>30.48</Td>
          <Td isNumeric>
            <Checkbox colorScheme="red" borderColor="red" />
          </Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td>0.91444</Td>
          <Td isNumeric>
            <Checkbox colorScheme="red" borderColor="red" />
          </Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th>multiply by</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default TableLayout;
