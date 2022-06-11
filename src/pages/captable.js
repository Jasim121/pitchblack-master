import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { Button } from "../components/button";
import clsx from "clsx";
import { getTypographyStyles } from "../util/helpers";
import Graph from "../components/circularGraph";
import Table from "../components/capTable";

export default function Captable() {
  const classes = useStyles();
  return (
    <>
      <Typography
        align="center"
        className={clsx([
          classes.default_typography_heading,
          classes.pageTitleTypo,
        ])}
      >
        pitchBLACK
      </Typography>
      <div className={classes.container}>
        <div className={classes.topButtonDiv}>
          <Typography
            align="left"
            className={clsx([
              classes.default_typography_subHeading,
              classes.headerTypo,
            ])}
          >
            Capitalization Table
          </Typography>
          <Button>Export to PDF</Button>
        </div>

        <div className={classes.summaryDiv}>
          <div className={classes.graphDiv}>
            <Graph
              percentage={10}
              value={10}
              text="# of common shares"
              fontSize={8}
            />
          </div>
          <div className={classes.summary}>
            <Typography
              className={clsx([
                classes.default_typography_paragraph,
                classes.default_typography_bold,
                classes.default_typography_colorDark,
                classes.marginTypo,
              ])}
            >
              Summary
            </Typography>
            <div className={classes.divider} />
            <Grid
              container
              spacing={4}
              direction="row"
              justifyContent="center"
              alignItems="center"
              className={classes.marginTop}
            >
              <Grid item lg={4} md={3} sm={3}>
                <div className={classes.flexCenter}>
                  <div className={classes.dot1} />
                </div>
              </Grid>
              <Grid item lg={4} md={3} sm={3}>
                <div className={classes.flexCenter}>
                  <Typography
                    className={clsx([
                      classes.default_typography_paragraph,
                      classes.default_typography_bold,
                      classes.default_typography_colorDark,
                    ])}
                  >
                    Founder Pool
                  </Typography>
                </div>
              </Grid>
              <Grid item lg={4} md={3} sm={3}>
                <div className={classes.flexCenter}>
                  <Typography
                    className={clsx([
                      classes.default_typography_paragraph,
                      classes.default_typography_bold,
                      classes.default_typography_colorDark,
                    ])}
                  >
                    7000000
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              direction="row"
              justifyContent="center"
              alignItems="center"
              className={classes.marginTop}
            >
              <Grid item lg={4} md={3} sm={3}>
                <div className={classes.flexCenter}>
                  <div className={classes.dot2} />
                </div>
              </Grid>
              <Grid item lg={4} md={3} sm={3}>
                <div className={classes.flexCenter}>
                  <Typography
                    className={clsx([
                      classes.default_typography_paragraph,
                      classes.default_typography_bold,
                      classes.default_typography_colorDark,
                    ])}
                  >
                    Employees Pool
                  </Typography>
                </div>
              </Grid>
              <Grid item lg={4} md={3} sm={3}>
                <div className={classes.flexCenter}>
                  <Typography
                    className={clsx([
                      classes.default_typography_paragraph,
                      classes.default_typography_bold,
                      classes.default_typography_colorDark,
                    ])}
                  >
                    7000000
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className={classes.graphGridDiv}>
          <div className={classes.subGraphDiv}>
            <Graph percentage={10} value={10} text="Founders" fontSize={8} />
          </div>
          <div className={classes.subGraphDiv}>
            <Graph percentage={10} value={10} text="Investors" fontSize={8} />
          </div>
          <div className={classes.subGraphDiv}>
            <Graph percentage={10} value={10} text="Advisors" fontSize={8} />
          </div>
        </div>

        <div className={classes.tableDiv}>
          <Typography className={classes.tableHeadingTypo}>
            Shareholders
          </Typography>
          <Table />
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  ...getTypographyStyles(theme),

  container: {
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
  },
  topButtonDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  marginTypo: {
    marginLeft: 20,
    marginBottom: 20,
  },
  marginTop: {
    marginTop: 10,
  },
  pageTitleTypo: {
    color: "#000",
    fontWeight: 900,
    padding: 10,
  },
  headerTypo: {
    color: "#000",
    fontSize: 26,
    fontWeight: 600,
  },
  descriptionTypo: {
    color: " #707070",
    marginTop: 10,
    alignSelf: "flex-start",
  },
  graphDiv: {
    width: 250,
  },
  summaryDiv: {
    margin: "50px 10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  summary: {
    width: "60%",
  },
  divider: {
    background: "#000",
    width: "100%",
    height: 2,
  },
  dot1: {
    height: 15,
    width: 15,
    background: "#4176FF",
    borderRadius: 20,
    alignSelf: "center",
  },
  dot2: {
    height: 15,
    width: 15,
    background: "#FFA741",
    borderRadius: 20,
  },
  dataDiv: {
    marginTop: 15,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  graphGridDiv: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  subGraphDiv: {
    width: 180,
    marginLeft: 30,
  },
  tableHeadingTypo: {
    fontSize: 18,
    fontWeight: 800,
    color: "#000",
  },
}));
