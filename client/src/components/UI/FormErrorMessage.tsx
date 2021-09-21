import { Typography } from "@mui/material";

const FormErrorMessage = (props: any) => {
  return (
    <Typography variant="subtitle2" color="warning" mt={2}>
      {props.children}
    </Typography>
  );
};

export default FormErrorMessage;
