import { useEffect, useState } from "react";
import {
  Grid,
  Button,
  Typography,
  CircularProgress,
  Box,
  Divider,
  Container,
} from "@mui/material";

import { fetchCourses } from "../../store/course/course-actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import Table from "../UI/Table";

const Home = () => {
  const dispatch = useDispatch();
  const { courses, isLoading } = useSelector(
    (state: RootState) => state.courseReducer
  );
  const [totalCourseUnitSelected, setTotalCourseUnitSelected] =
    useState<number>(0);

  const handleCount = (unitCount: number) => {
    setTotalCourseUnitSelected(unitCount);
  };
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <Container fixed>
      <Typography color="#162c24" my={2} variant="h6">
        Student Course Registration
      </Typography>
      <Divider sx={{ backgroundColor: "#389583", height: 1.5 }} />

      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          <CircularProgress size={80} color="primary" />
        </Box>
      )}

      {!isLoading && (
        <Grid container sx={{ minHeight: "70vh", marginTop: 5 }}>
          <Grid item xs={12}>
            {courses.length > 0 && (
              <Table courses={courses} handleCount={handleCount} />
            )}
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="space-between"
              sx={{ minWidth: 700 }}
            >
              <Grid item>
                <Typography variant="subtitle1">
                  Course unit: <strong>{totalCourseUnitSelected}</strong>
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Register
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Home;
