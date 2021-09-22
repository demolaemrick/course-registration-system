import { useEffect, useState, Fragment } from "react";
import { Grid } from "@mui/material";

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
        <Grid container item xs={8}>
          {courses.length > 0 && (
            <Table courses={courses} handleCount={handleCount} />
          )}
        </Grid>
        <Grid container item justifyContent="space-between" xs={8}>
          <Grid item>
            Course unit: <strong>{totalCourseUnitSelected}</strong>
          </Grid>
          <Grid item>Submit</Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
