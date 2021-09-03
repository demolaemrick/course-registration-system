import { Text } from "@chakra-ui/react"

const FormErrorMessage = (props: any) => {
  return (
    <Text fontSize="sm" color="red.500" mt="2">
      {props.children}
    </Text>
  );
};

export default FormErrorMessage;
