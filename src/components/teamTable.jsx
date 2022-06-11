import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Avatar } from "@material-ui/core";

function createData(name, email, role, status) {
  return { name, email, role, status };
}

const rows = [
  createData("Haris Mamoon", "harismemoon5525@gmail.com", "CEO", "Pending"),
  createData("Abdul Manan", "mani@gmail.com", "CEO", "Active"),
];

export default function TeamTable() {
  const classes = useStyles();
  const [profilePic, setProfilePic] = useState("");

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Role</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="center">
                <div className={classes.flexCenter}>
                  <Avatar src={profilePic} className={classes.avatarStyles} />
                  {row.name}
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.role}</StyledTableCell>
              <StyledTableCell align="center">
                <div className={classes.flexCenter}>
                  {row.status === "Active" ? (
                    <div className={classes.activeDotDiv} />
                  ) : (
                    <div className={classes.pendingDotDiv} />
                  )}

                  {row.status}
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const StyledTableCell = withStyles((theme) => ({
  head: {
    fontSize: 14,
    backgroundColor: "#fff",
    color: "#000",
    fontWeight: 800,
    borderBottom: "2px solid  #EFEFEF",
    padding: 20,
  },
  body: {
    fontSize: 14,
    fontWeight: 800,
    color: "#000",
    border: "none",
    backgroundColor: "#fff",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    background: "#fff",
    minWidth: 700,
    [theme.breakpoints.down("xs")]: {
      minWidth: 500,
    },
  },
  activeDotDiv: {
    height: 10,
    width: 10,
    borderRadius: 20,
    background: "#AAED8A",
    marginRight: 10,
    marginLeft: 70,
  },
  pendingDotDiv: {
    height: 10,
    width: 10,
    borderRadius: 20,
    background: "#FBD791",
    marginRight: 10,
    marginLeft: 70,
  },
  flexCenter: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  avatarStyles: {
    marginRight: 10,
    width: 35,
    height: 35,
  },
}));
