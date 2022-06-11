import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LinkMui from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "../util/router";
import { useDarkMode } from "../util/theme";

const useStyles = makeStyles((theme) => ({
  sticky: {
    padding: 40,
    backgroundColor: "#362C28",
    color: "white",
  },
  brand: {
    display: "block",
    height: 42,
  },
  listItems: {
    flexDirection: "row"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 12,
    paddingRight: 12,
  },
  listItemTextHeader: {
    fontWeight: "bold",
  },
  socialIcon: {
    minWidth: 30,
  },
  legal: {
    marginTop: theme.spacing(3),
    fontSize: "0.875rem",
    opacity: 0.6,
    "& a": {
      color: "inherit",
      marginLeft: "0.8rem",
    },
  },
}));

function CleanFooter(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      class={classes.sticky}
    >
      <Container>
        <Grid container={true} justifyContent="space-between" spacing={4}>
          <Grid item={true} xs={12} md={4}>
            <Link to="/">
              <img src={logo} alt="Logo" className={classes.brand} />
            </Link>

            {props.description && (
              <Box mt={3}>
                <Typography component="p">{props.description}</Typography>
              </Box>
            )}
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <Grid container={true} direction="row" spacing={4}>
              <Grid item={true} xs={12} md={3}>
                  <ListItem
                    button={true}
                    component="a"
                    href="https://twitter.com/divjoy"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.listItem}
                  >
                    <ListItemIcon className={classes.socialIcon}>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Ficons%2Ftwitter.svg?alt=media&token=7a779703-0ee5-4f58-b95f-eefee5825511"
                        alt="Twitter"
                      />
                    </ListItemIcon>
                  </ListItem>
                </Grid>
                <Grid item={true} xs={12} md={3}>
                  <ListItem
                    button={true}
                    component="a"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.listItem}
                  >
                    <ListItemIcon className={classes.socialIcon}>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Ficons%2Ffacebook.svg?alt=media&token=ba1f92c1-a2a6-4291-b238-653b35e63510"
                        alt="Facebook"
                      />
                    </ListItemIcon>
                  </ListItem>
                </Grid>
                <Grid item={true} xs={12} md={3}>
                  <ListItem
                    button={true}
                    component="a"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.listItem}
                  >
                    <ListItemIcon className={classes.socialIcon}>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Ficons%2Finstagram.svg?alt=media&token=b7e60235-eeac-4ab5-a46a-f60023f4a8a4"
                        alt="Instagram"
                      />
                    </ListItemIcon>
                  </ListItem>
                </Grid>
                <Grid item={true} xs={12} md={3}>
                  <ListItem
                    button={true}
                    component="a"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.listItem}
                  >
                    <ListItemIcon className={classes.socialIcon}>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Ficons%2Flinkedin.svg?alt=media&token=9befc482-86f0-41b4-89c3-c9b90dcf5841"
                        alt="Instagram"
                      />
                    </ListItemIcon>
                  </ListItem>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
export default CleanFooter;
