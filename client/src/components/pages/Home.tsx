import { useEffect, useState, Fragment } from "react";
import { Grid, Button, Typography, CircularProgress, Box } from "@mui/material";

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
    <Fragment>
      <Typography variant="h4" mt={5} align="center">
        STUDENT COURSE REGISTRATION
      </Typography>
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
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "80vh" }}
        >
          <Grid item>
            {courses.length > 0 && (
              <Table courses={courses} handleCount={handleCount} />
            )}
          </Grid>
          <Grid item xs={8} mt={2}>
            <Grid
              container
              justifyContent="space-between"
              sx={{ minWidth: 700 }}
            >
              <Grid item>
                Course unit: <strong>{totalCourseUnitSelected}</strong>
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
    </Fragment>
  );
};

export default Home;
