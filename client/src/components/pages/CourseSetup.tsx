import { useState } from "react";
import {
  Typography,
  Divider,
  Container,
  Paper,
  Box,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
} from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const initialSelectFields = [
  {
    name: "semester",
    values: ["first semester", "second semester"],
    value: "",
  },
  {
    name: "college",
    values: [
      "College of natural and applied sciences",
      "college of social management applied sciences",
      "college of law",
      "college of engineering",
    ],
    value: "",
  },
  {
    name: "department",
    values: ["Mathematical science", "Chemical science", "Biological science"],
    value: "",
  },
  {
    name: "programme",
    values: ["computer science", "Industrial chemistry", "Biochemistry"],
    value: "",
  },
  {
    name: "level",
    values: ["100", "200", "300", "400", "500"],
    value: "",
  },
];

const CourseSetup = () => {
  const [selectFields, setSelectFields] = useState(initialSelectFields);

  const handleChange = (event: SelectChangeEvent, index: number) => {
    const newSelectFields = [...selectFields];
    newSelectFields[index].value = event.target.value;
    setSelectFields(newSelectFields);
  };
  return (
    <Container fixed>
      <Typography color="#162c24" my={2} variant="h6">
        DEPARTMENTAL COURSES REGISTRATION SETUP
      </Typography>
      <Divider sx={{ backgroundColor: "#389583", height: 1.2 }} />
      <Paper elevation={8} sx={{ padding: 10, marginTop: 5 }}>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", width: "50%" }}
        >
          {selectFields.map((field, index) => (
            <FormControl key={field.name} sx={{ mb: 2 }} size="small">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FormLabel
                  htmlFor={field.name}
                  sx={{ width: 121, fontWeight: "bold" }}
                >
                  {field.name.toUpperCase()}:
                </FormLabel>
                <Select
                  name={field.name}
                  variant="outlined"
                  onChange={(event) => handleChange(event, index)}
                  sx={{ minWidth: 210, width: "80%" }}
                  size="small"
                  value={field.value}
                  displayEmpty
                  renderValue={(value) =>
                    value === "" ? (
                      <em>{`Choose ${field.name}`}</em>
                    ) : (
                      field.value
                    )
                  }
                >
                  {field.values.map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </FormControl>
          ))}
          <Divider />
          <Button
            variant="contained"
            sx={{ marginTop: 2, width: 120 }}
            size="medium"
            type="submit"
            color="secondary"
            endIcon={<DoubleArrowIcon />}
          >
            Proceed
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CourseSetup;
