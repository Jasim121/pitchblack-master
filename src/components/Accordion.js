import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { getTypographyStyles } from "../util/helpers";
import GetAppIcon from "@material-ui/icons/GetApp";
import moment from "moment";

export default function CustomAccordion(props) {
  const { title, locker } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleDownload = (url, name) => {
    window.open(url, "_blank");
  };

  const expandedIcon = (
    <svg
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="20" cy="19.5" rx="20" ry="19.5" fill="#C4C4C4" />
      <path
        d="M17.0137 19L20.5298 21.856L24.0736 19.0345"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const notExpandedIcon = (
    <svg
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="20" cy="19.5" rx="20" ry="19.5" fill="#C4C4C4" />
      <path
        d="M20 23.0586L22.9054 19.5833L20.1344 15.9999"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  return (
    <div>
      <Accordion className={classes.accordionMain}>
        <AccordionSummary
          onClick={() => setExpanded((prev) => !prev)}
          expanded={expanded}
          expandIcon={null}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.accordionSummary}
        >
          <Grid container alignItems="center">
            <Grid item>
              <Box marginX={1}>{expanded ? expandedIcon : notExpandedIcon}</Box>
            </Grid>
            <Grid item xs>
              <Grid container justify="space-between" alignItems="center">
                <Grid item xs>
                  <Typography
                    className={clsx([
                      classes.default_typography_subHeading,
                      classes.headerTypo,
                    ])}
                  >
                    {title}
                  </Typography>
                </Grid>
                <Grid item marginY={2} className={classes.marginRight}>
                  <Typography
                    className={clsx([
                      classes.default_typography_paragraph,
                      classes.headerTypo,
                    ])}
                  >
                    {locker.length} docs
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <div className={classes.detailsDiv}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={4} md={4}>
                <Typography
                  className={clsx([
                    classes.default_typography_medium,
                    classes.descriptionTypo,
                    classes.wordBreak,
                  ])}
                >
                  Document Title
                </Typography>
              </Grid>
              <Grid item xs={4} md={5}>
                <Typography
                  className={clsx([
                    classes.default_typography_medium,
                    classes.descriptionTypo,
                  ])}
                >
                  Upload Date
                </Typography>
              </Grid>
              <Grid item xs={4} md={3}>
                <Typography
                  className={clsx([
                    classes.default_typography_medium,
                    classes.descriptionTypo,
                  ])}
                >
                  Status
                </Typography>
              </Grid>
            </Grid>
            {locker?.map((e) => {
              return (
                <>
                  <Grid
                    className={classes.dividerStyles}
                    container
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={4} md={4}>
                      <Typography
                        className={clsx([
                          classes.default_typography_medium,
                          classes.headerTypo,
                        ])}
                      >
                        {e.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} md={5}>
                      <Typography
                        className={clsx([
                          classes.default_typography_medium,
                          classes.headerTypo,
                        ])}
                      >
                        {moment(e.uploadDate.toDate()).format("L, h:mm a")}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} md={3}>
                      <div className={classes.statusDiv}>
                        <Typography
                          className={clsx([
                            classes.default_typography_medium,
                            classes.headerTypo,
                          ])}
                        >
                          {e.status}
                        </Typography>
                        <GetAppIcon
                          className={classes.accordionIcon}
                          onClick={() => handleDownload(e.url, e.name)}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  ...getTypographyStyles(theme),

  statusDiv: {
    display: "flex",
    alignItems: "center",
  },
  pageTitleTypo: {
    color: "#000",
    fontWeight: 900,
    padding: 10,
  },
  headerTypo: {
    color: "#000",
    fontWeight: "700",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      wordBreak: "break-word",
    },
  },
  descriptionTypo: {
    color: " #676767",
    fontWeight: "600",
    fontSize: 20,
  },
  accordionMain: {
    boxShadow: "none",
  },
  accordionSummary: {
    padding: 0,
    background: "#fff",
    color: "#000",
  },
  accordionDetails: {
    padding: 15,
    background: "#fff",
    color: "#000",
    display: "block",
  },
  accordionIcon: {
    color: "#000",
    cursor: "pointer",
    marginLeft: 10,
  },
  detailsDiv: {
    // display: "flex",
    // flexDirection: "column",
  },
  marginRight: {
    marginRight: 80,
    [theme.breakpoints.down("xs")]: {
      marginRight: 10,
    },
  },
  dividerStyles: {
    borderBottom: "0.24px solid #000",
    padding: "10px 0px",
  },
  wordBreak: {
    wordBreak: "break-word",
  },
}));
