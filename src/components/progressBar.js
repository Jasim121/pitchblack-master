import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Avatar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar: {
    background: "#297AB5",
    fontSize: 16,
    color: "#fff",
    height: 60,
    width: 60,
    textTransform: "uppercase",
    padding: 10,
  },
  progressDiv: {
    color: "#000",
    marginLeft: 20,
  },
  fileNameTypo: {
    fontWeight: 700,
    marginBottom: 10,
  },
}));
export default function CustomProgressBar(props) {
  const classes = useStyles();
  const { name, progress } = props;
  const type = name?.split(".").slice(-1);
  return (
    <div className={classes.main}>
      <Avatar className={classes.avatar}>{type}</Avatar>
      <div className={classes.progressDiv}>
        <Typography className={classes.fileNameTypo}>{name}</Typography>
        <ProgressBar
          completed={Number(progress).toFixed(2)}
          bgColor="#297AB5"
          height={13}
          width={350}
          labelSize={0}
          transitionDuration={"2s"}
        />
      </div>
    </div>
  );
}
