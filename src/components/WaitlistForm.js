import React from "react";
import Container from "@material-ui/core/Container";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import WaitlistInvestorFields from "./WaitlistInvestorFields";
import WaitlistFounderFields from "./WaitlistFounderFields";
import { mergeClasses } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  topContainer: {
    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Fhomebackground.jpg?alt=media&token=b93e94f7-914b-45fc-860a-cb4e5aef2bc9")',
    backgroundColor: "#00000",
    backgroundSize: "cover",
    height: "100vh"
  }
}));

function ContactSection(props) {
  const classes = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      class={classes.topContainer}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <WaitlistFounderFields
          showNameField={props.showNameField}
          buttonText={props.buttonText}
          buttonColor={props.buttonColor}
        />
         {/* <WaitlistInvestorFields
          showNameField={props.showNameField}
          buttonText={props.buttonText}
          buttonColor={props.buttonColor}
        /> */}
      </Container>
    </Section>
  );
}

export default ContactSection;
