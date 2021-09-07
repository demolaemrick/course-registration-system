import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { Courses } from "../../types/course";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({ courses }: Courses) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Course code</StyledTableCell>
            <StyledTableCell>Course title</StyledTableCell>
            <StyledTableCell align="right">Course unit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <StyledTableRow key={course.uuid}>
              <StyledTableCell component="th" scope="course">
                {course.course_code}
              </StyledTableCell>
              <StyledTableCell>
                {course.course_title}
              </StyledTableCell>
              <StyledTableCell align="right">
                {course.course_unit}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
