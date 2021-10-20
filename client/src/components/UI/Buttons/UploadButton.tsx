import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});
const UploadButton = (props: any) => {
  return (
    <label htmlFor="contained-button-file">
      <Input
        accept="image/*"
        id="contained-button-file"
        onChange={props.change}
        multiple
        type="file"
      />
      <Button
        disabled={props.disabled}
        variant="text"
        color="secondary"
        component="span"
      >
        {props.children}
      </Button>
    </label>
  );
};

export default UploadButton;
