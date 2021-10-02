import { Typography } from "@mui/material";

const FormErrorMessage = (props: any) => {
  return (
    <Typography variant="subtitle2" color="red" mt={props.mt}>
      {props.children}
    </Typography>
  );
};

export default FormErrorMessage;
