import { useState, Fragment } from "react";
import { styled } from "@mui/material/styles";

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
  tableCellClasses,
} from "@mui/material";

import { Course } from "../../types/course";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Props {
  courses: Course[];
  handleCount: (unitCount: number) => void;
}

const CustomizedTables = ({ courses, handleCount }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<Props["courses"]>([]);

  const numSelected = selected.length;
  const rowCount = courses.length;

  const isSelected = (uuid: string) => selected.find((r) => r.uuid === uuid);

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

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const newSelect = courses.find((c) => c.uuid === name) || ({} as Course);

    const selectedIndex = selected.indexOf(newSelect);

    let newSelecteds;
    if (selectedIndex === -1) {
      newSelecteds = [...selected, newSelect];
    } else {
      newSelecteds = selected.filter((s) => s.uuid !== name);
    }

    const courseUnits = newSelecteds.map((c) => c.course_unit);

    const newCourseUnitCounts = courseUnits.reduce((acc, cur) => acc + cur, 0);

    handleCount(newCourseUnitCounts);
    setSelected(newSelecteds);
  };

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
                  disabled
                  inputProps={{ "aria-label": "select all desserts" }}
                />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((course, index) => {
                const isItemSelected = !!isSelected(course.uuid);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <StyledTableRow
                    key={course.uuid}
                    hover
                    onClick={(event) => handleClick(event, course.uuid)}
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
    </Fragment>
  );
};

export default CustomizedTables;
