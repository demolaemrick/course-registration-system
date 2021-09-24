import { useEffect, useState, Fragment } from "react";
import { Grid, Button } from "@mui/material";

import { fetchCourses } from "../../store/course/course-actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import Table from "../UI/Table";

const Home = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state: RootState) => state.courseReducer);
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
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          {courses.length > 0 && (
            <Table courses={courses} handleCount={handleCount} />
          )}
        </Grid>
        <Grid item xs={8} mt={2}>
          <Grid container justifyContent="space-between" sx={{ minWidth: 700 }}>
            <Grid item>
              Course unit: <strong>{totalCourseUnitSelected}</strong>
            </Grid>
            <Grid item>
              <Button variant="contained" color="success">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
