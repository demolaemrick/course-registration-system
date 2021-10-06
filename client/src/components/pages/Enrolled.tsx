import {
  Typography,
  Divider,
  Container,
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Toolbar,
  Button,
} from "@mui/material";

function createData(
  name: string,
  session: number,
  department: string,
  level: number,
  semester: string,
  date: string
) {
  return { name, session, department, level, semester, date };
}

const rows = [
  createData(
    "Introduction to computer science",
    2021,
    "Mathematical science",
    400,
    "Second semester",
    "2021-06-22"
  ),
];

const Enrolled = () => {
  return (
    <Container fixed>
      <Typography color="#162c24" my={2} variant="h6">
        Enroll History
      </Typography>
      <Divider sx={{ backgroundColor: "#389583", height: 1.2 }} />
      <Paper
        elevation={10}
        sx={{ padding: 3, backgroundColor: "#c9d6d1", marginTop: 5 }}
      >
        <Toolbar
          sx={{
            borderBottom: "1px solid #c9d6d1",
            backgroundColor: "#f2f7f5",
          }}
        >
          <Typography variant="subtitle1">Enroll History</Typography>
        </Toolbar>
        <TableContainer sx={{ padding: 2 }} component={Paper}>
          <Table
            sx={{ minWidth: 650, border: "1px solid #c9d6d1" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Course Title</TableCell>
                <TableCell align="left">Session</TableCell>
                <TableCell align="left">Department</TableCell>
                <TableCell align="left">Level</TableCell>
                <TableCell align="left">Semester</TableCell>
                <TableCell align="left">Enrollment Date</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ " td, th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.session}</TableCell>
                  <TableCell align="left">{row.department}</TableCell>
                  <TableCell align="left">{row.level}</TableCell>
                  <TableCell align="left">{row.semester}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <Button variant="contained" color="primary">
                      Print
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default Enrolled;
