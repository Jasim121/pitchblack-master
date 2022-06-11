import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Avatar } from "@material-ui/core";

function createData(name, fundName, status) {
  return { name, fundName, status };
}

const rows = [
  createData("Haris Mamoon", "Angel", "CEO"),
  createData("Abdul Manan", "Harlem Capital", "CEO"),
];

export default function FundRaiseTable() {
  const classes = useStyles();
  const [profilePic, setProfilePic] = useState("");

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" style={{ minWidth: 200 }}>
              Name
            </StyledTableCell>
            <StyledTableCell align="left" style={{ minWidth: 450 }}>
              Fund Name
            </StyledTableCell>
            <StyledTableCell />
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <>
              <StyledTableRow>
                <StyledTableCell align="left">
                  <div className={classes.flexCenter}>
                    <Avatar src={profilePic} className={classes.avatarStyles} />
                    {row.name}
                  </div>
                </StyledTableCell>
                <StyledTableCell align="left">{row.fundName}</StyledTableCell>
                <StyledTableCell align="center">
                  <div className={classes.flexCenter}>
                    <Typography className={classes.approveTypo}>
                      Approve
                    </Typography>
                    <Typography className={classes.denyTypo}>Deny</Typography>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            </>
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
    fontWeight: 700,
    borderBottom: "2px solid #EFEFEF",
    padding: 20,
  },
  body: {
    fontSize: 14,
    fontWeight: 700,
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
    maxWidth: 1000,
    [theme.breakpoints.down("xs")]: {
      minWidth: 500,
    },
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
  approveTypo: {
    fontSize: 14,
    color: "#01CB82",
    fontWeight: 800,
    marginRight: 20,
    cursor: "pointer",
  },
  denyTypo: {
    fontSize: 14,
    color: "#FF4141",
    fontWeight: 800,
    cursor: "pointer",
  },
}));
