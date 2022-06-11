import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getTypographyStyles } from "../util/helpers";
import { TextField } from "@material-ui/core";
import { Button } from "../components/button";

export default function AddTeamModal() {
  const classes = useStyles();
  const [state, setState] = useState({
    email: "",
  });

  return (
    <div className={classes.container}>
      <div className={classes.formDiv}>
        <TextField
          id="standard-basic"
          label="Email"
          InputProps={{
            className: classes.multilineColor,
          }}
          InputLabelProps={{
            className: classes.labelTextfield,
          }}
          fullWidth
          value={state.email || ""}
          onChange={(e) =>
            setState((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>

      <Button>Send Invitation</Button>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  ...getTypographyStyles(theme),
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  multilineColor: {
    color: "black",
    borderBottom: "1px solid #808080",
    marginBottom: 45,
    fontWeight: 800,
    width: "100%",
  },
  labelTextfield: {
    color: "#808080",
  },
  formDiv: {
    width: "80%",
  },
}));
