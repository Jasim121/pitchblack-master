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
    backgroundColor: "#FAFAFA",
    padding: 56
  },
}));

function BusinessSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Incorporate",
      body: "We create your Delaware C-Corp",
    },
    {
      title: "Set up banking",
      body: "Open your bussiness bank account and start transacting",
    },
    {
      title: "Weekly Check-ins",
      body: "1-on-1 mentorship for guided growth",
    },
  ];

  const sectionImage ="https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2FlaptopsScreens.png?alt=media&token=9b5e887c-4735-476a-85a2-9cc25c87ed8b"

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
              <Typography align="center" width="10">
                  {item.body}
              </Typography>
              </Grid>
            ))}
            <Grid item xs={12}>
              <img src={sectionImage} />
            </Grid>
            </Grid>
    </Section>
  );
}

export default BusinessSection;
