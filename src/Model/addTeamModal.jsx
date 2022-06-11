import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getTypographyStyles } from "../util/helpers";
import { TextField } from "@material-ui/core";
import { Button } from "../components/button";

export default function AddTeamModal() {
  const classes = useStyles();
  const [state, setState] = useState({
    name: "",
    role: "",
    email: "",
  });

  return (
    <div className={classes.container}>
      <div className={classes.formDiv}>
        <TextField
          id="standard-basic"
          label="Full Name"
          InputProps={{
            className: classes.multilineColor,
          }}
          InputLabelProps={{
            className: classes.labelTextfield,
          }}
          fullWidth
          value={state.name || ""}
          onChange={(e) =>
            setState((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <TextField
          id="standard-basic"
          label="Company Role"
          InputProps={{
            className: classes.multilineColor,
          }}
          InputLabelProps={{
            className: classes.labelTextfield,
          }}
          fullWidth
          value={state.role || ""}
          onChange={(e) =>
            setState((prev) => ({ ...prev, role: e.target.value }))
          }
        />
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
    marginBottom: 15,
    fontWeight: 800,
  },
  labelTextfield: {
    color: "#808080",
  },
}));
