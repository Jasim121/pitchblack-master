import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    heading: {
      color: "#000",
      fontSize: 80,
      [theme.breakpoints.down("md")]: {
        fontSize: 40,
      },
    },
    subHeading: {
      color: "#878787",
      fontSize: 60,
      [theme.breakpoints.down("md")]: {
        fontSize: 30,
      },
    },
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

export default function ComingSoon() {
  const classes = useStyles();

  const location = useLocation();

  //   console.log(location.pathname);
  //   let title = location.pathname.split("/").slice(-1)[0];
  //   console.log({ title });
  //   title = title
  //     .split("_")
  //     .filter((el) => el)
  //     .map((el) => capitalize(el))
  //     .join(" ");

  const title = location.pathname.split("/").slice(-1);

  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.subHeading}>{title}</Typography>
        <Typography className={classes.heading}>Coming Soon</Typography>
        <Typography className={classes.heading}>...</Typography>
      </Box>
    </>
  );
}
