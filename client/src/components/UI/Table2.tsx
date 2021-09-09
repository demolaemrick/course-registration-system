import React, { useState } from "react";
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
  TablePagination,
  Checkbox,
} from "@material-ui/core";
import { Course } from "../../types/course";

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
      //   "&:nth-of-type(odd)": {
      //     backgroundColor: theme.palette.action.hover,
      //   },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

interface Props {
  courses: Course[];
}

const CustomizedTables = ({ courses }: Props) => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<string[]>([]);
  const [courseUnitCount, setCourseUnitCount] = useState<number[]>([2,3,4]);

  const numSelected = selected.length;
  const rowCount = courses.length;

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, courses.length - page * rowsPerPage);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string, unit: number) => {            
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];
    let units: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
      units = units.concat(unit)
      console.log(units)

    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
//   console.log(selected)
//   console.log(courseUnitCount)


//   const handleCourseUnitCount = (
//     event: React.ChangeEvent<HTMLInputElement>,
//     courseUnit: number
//   ) => {
//     if (event.target.checked) {
//       const updatedCount = courseUnitCount.concat([courseUnit]);
//       console.log(updatedCount);
//     }

//     let courseUnitSum = courseUnits.reduce((acc, cur) =>  acc + cur, 0)
//     console.log(courseUnitSum)
//   };

  //   const handleClickAndUnitCount = (event: React.MouseEvent<unknown>, name: string, unit: number) => {
  //     handleCourseUnitCount(unit)
  //     handleClick(event, name)

  //   }
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = courses.map((n) => n.course_title);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Course title</StyledTableCell>
              <StyledTableCell>Course code</StyledTableCell>
              <StyledTableCell>Course unit</StyledTableCell>
              <StyledTableCell padding="checkbox">
                <Checkbox
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected === rowCount}
                  onChange={handleSelectAllClick}
                  inputProps={{ "aria-label": "select all desserts" }}
                />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((course, index) => {
                const isItemSelected = isSelected(course.course_title);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <StyledTableRow
                    key={course.uuid}
                    hover
                    onClick={(event) => handleClick(event, course.course_title, course.course_unit)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    selected={isItemSelected}
                  >
                    <StyledTableCell>{index + 1}</StyledTableCell>
                    <StyledTableCell component="th" scope="course">
                      {course.course_code}
                    </StyledTableCell>
                    <StyledTableCell>{course.course_title}</StyledTableCell>
                    <StyledTableCell>{course.course_unit}</StyledTableCell>

                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": labelId }}
                        // onChange={(event) =>
                        //   handleCourseUnitCount(event, course.course_unit)
                        // }
                      />
                    </TableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </Table>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={courses.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </React.Fragment>
  );
};

export default CustomizedTables;
