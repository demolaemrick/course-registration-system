import React, { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";

import { fetchCourses } from "../../store/course/course-actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import Table from "../UI/Table";
import Table2 from "../UI/Table2";

const Home = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state: RootState) => state.courseReducer);
  const [ totalCourseUnitSelected, setTotalCourseUnitSelected ] = useState<number>(0)

  const handleCount = (unitCount: number) => {
    setTotalCourseUnitSelected(unitCount)
  }
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid container item xs={8}>
          {courses.length > 0 && <Table2 courses={courses} handleCount={handleCount} />}
        </Grid>
        <Grid container item justifyContent="space-between" xs={8}>
          <Grid item>
            Course unit: <strong>{totalCourseUnitSelected}</strong>
          </Grid>
          <Grid item>Submit</Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;


