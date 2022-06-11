import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import AspectRatio from "./AspectRatio";
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  topContainer: {
    padding: 56
  },
}));

function AngelSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Lucrative Deal Flow",
      body: "Investors have access to high performance, fully vetted companies.",
    },
    {
      title: "Critical Learnings",
      body: "Provide angel investors with courses, and material to help them learn the process.",
    },
    {
      title: "Full Support",
      body: "Team of experienced investors provide support to angels.",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      class={classes.topContainer}
    >
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
            <Grid container={true} alignItems="center" justifyContent="center" textAlign="center" spacing={5}>
            {items.map((item, index) => (
              <Grid item md={4} xs={12} container={true} direction="column">
              <Typography align="center" variant="h5">
                  {item.title}
              </Typography>
              <Typography align="center">
                  {item.body}
              </Typography>
              </Grid>
            ))}
            </Grid>
    </Section>
  );
}

export default AngelSection;
