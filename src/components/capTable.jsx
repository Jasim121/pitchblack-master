import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";

function createData(name, role, issuedShares, vestedShares, percentage) {
  return { name, role, issuedShares, vestedShares, percentage };
}

const rows = [
  createData("Haris Mamoon", "CEO", 24000, 24000, "35%"),
  createData("Abdul Manan", "CEO", 370000, 24000, "35%"),
];

export default function CapTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Role</StyledTableCell>
            <StyledTableCell align="center"># issued shares</StyledTableCell>
            <StyledTableCell align="center"># of vested shares</StyledTableCell>
            <StyledTableCell align="center">Percentage</StyledTableCell>
          </TableRow>
        </TableHead>
        <div className={classes.typoDiv}>
          <Typography className={classes.tableHeadings}>Founders</Typography>
        </div>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="left">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.role}</StyledTableCell>
              <StyledTableCell align="center">
                {row.issuedShares}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.vestedShares}
              </StyledTableCell>
              <StyledTableCell align="center">{row.percentage}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <Typography className={classes.tableHeadings}>Investors</Typography>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="left">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.role}</StyledTableCell>
              <StyledTableCell align="center">
                {row.issuedShares}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.vestedShares}
              </StyledTableCell>
              <StyledTableCell align="center">{row.percentage}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <Typography className={classes.tableHeadings}>Advisors</Typography>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="left">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.role}</StyledTableCell>
              <StyledTableCell align="center">
                {row.issuedShares}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.vestedShares}
              </StyledTableCell>
              <StyledTableCell align="center">{row.percentage}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <Typography className={classes.tableHeadings}>
          Employee Stock
        </Typography>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="left">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.role}</StyledTableCell>
              <StyledTableCell align="center">
                {row.issuedShares}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.vestedShares}
              </StyledTableCell>
              <StyledTableCell align="center">{row.percentage}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const useStyles = makeStyles((theme) => ({
  table: {
    background: "#fff",
    minWidth: 700,
    minHeight: 400,
    [theme.breakpoints.down("xs")]: {
      minWidth: 500,
    },
  },
  tableHeadings: {
    marginTop: 25,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 800,
    color: "#000",
    width: "100%",
  },
  typoDiv: {
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    fontSize: 14,
    backgroundColor: "#fff",
    color: "#000",
    fontWeight: 800,
    borderBottom: "2px solid #000",
    padding: 20,
  },
  body: {
    fontSize: 14,
    fontWeight: 800,
    color: "#000",
    border: "none",
    backgroundColor: "#fff",
    padding: 10,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
}))(TableRow);
