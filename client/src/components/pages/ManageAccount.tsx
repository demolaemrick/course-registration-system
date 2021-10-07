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
  matricNo: string,
  name: string,
  department: string,
  level: number,
  date: string
) {
  return { matricNo, name, department, level, date };
}

const rows = [
  createData(
    "AUO17AC0778",
    "Akindotuni Ademola",
    "Mathematical science",
    400,
    "2021-06-22"
  ),
];

const ManageAccount = () => {
  return (
    <Container fixed>
      <Typography color="#162c24" my={2} variant="h6">
        Manage Accounts
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
          <Typography variant="subtitle1">Student Accounts</Typography>
        </Toolbar>
        <TableContainer sx={{ padding: 2 }} component={Paper}>
          <Table
            sx={{ minWidth: 650, border: "1px solid #c9d6d1" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">#</TableCell>
                <TableCell align="left">Student Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Department</TableCell>
                <TableCell align="left">Level</TableCell>
                <TableCell align="left">Reg Date</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.name} sx={{ " td, th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">{row.matricNo}</TableCell>
                  <TableCell align="left"> {row.name}</TableCell>
                  <TableCell align="left">{row.department}</TableCell>
                  <TableCell align="left">{row.level}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <Button variant="contained" color="primary">
                      Edit
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

export default ManageAccount;
