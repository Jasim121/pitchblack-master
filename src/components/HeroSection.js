import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { urlAlphabet } from "nanoid";

const useStyles = makeStyles((theme) => ({
  topContainer: {
    backgroundImage:
      'url("https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Fhomebackground.jpg?alt=media&token=b93e94f7-914b-45fc-860a-cb4e5aef2bc9")',
    backgroundColor: "#00000",
    backgroundSize: "cover",
    height: 606,
  },
  title: {
    paddingTop: 200,
    paddingBottom: 50,
  },
  imageSection: {
    paddingTop: 50,
  },
}));

function HeroSection(props) {
  const classes = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      class={classes.topContainer}
    >
      <Container>
        <Grid container={true}>
          <Grid item xs={12}>
            <Box textAlign="center">
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                size={4}
                class={classes.title}
              />
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Button
                    component={Link}
                    to={props.buttonPath}
                    variant="contained"
                    size="large"
                    color={props.buttonColor}
                  >
                    {props.buttonText1}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default HeroSection;
