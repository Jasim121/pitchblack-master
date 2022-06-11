import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import AspectRatio from "./AspectRatio";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    // Add border that contrasts lightly with background color.
    // We use boxShadow so that it's hidden around outer edge
    // due to container <Card> having overflow: hidden
    boxShadow: `1px 1px 0 0 ${emphasize(theme.palette.background.paper, 0.08)}`,
    textAlign: "center",
  },
  imageContainer: {
    margin: "0 auto",
    maxWidth: "200px",
    marginBottom: "30px",
    "& img": {
      width: "100%",
    },
  },
  selectedFeature: {
    backgroundColor: "#58443E66"
  },
  deselctedFeature: {
    backgroundColor: "#362C28"
  },

  
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Pitch Black Due Diligence",
      body: "We Recruit & Vet Investment-Grade Founders and Investors, Verify Documents, and Curate an Investor Package.",
      image: "https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Finterview.png?alt=media&token=535eeef8-3e39-418b-a71a-e76221f08658",
    },
    {
      title: "Founders Record 2-Minute Pitch",
      body: "Founders Create 2-Minute Pitch Videos, and Interactive Digital Executive Summary",
      image: "https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Fvideo.png?alt=media&token=ec5f0621-3b0f-4c98-8c45-38b35bbd79e9",
    },
    {
      title: "Investors Discover New Ventures",
      body: "Investors Browse Through Pitches, And Indicate Interest",
      image: "https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Fbrowsing.png?alt=media&token=aedbfb0e-11ae-47f4-99a9-e458551a3d8c",
    },
    {
      title: "Automated Investment Process",
      body: "pitchBLACK Drives an automated Investment Process With Speed And Efficiency",
      image: "https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Fshake.png?alt=media&token=f006b536-d440-4ab8-bf39-72238418191a",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="left"
        />
        <Grid container>
          <Grid item xs={6} direction="row">
            <Section class={classes.selectedFeature}>
              <Typography>
                As a Founder
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              </Typography>
            </Section>
          </Grid>
          <Grid item xs={6} direction="row">
            <Section class={classes.deselctedFeature}>
              <Typography>
                As a Founder
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              </Typography>
            </Section>
          </Grid>
        </Grid>
        <Divider/>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
