import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";
import { useDarkMode } from "./../util/theme";
import { useHistory, useLocation } from "react-router";

import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: "none",
  },
  logo: {
    height: 28,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
  navbarContainer: {
    backgroundColor: "#00000",
  }
}));

function Navbar(props) {
  const classes = useStyles();
  const location = useLocation();

  const auth = useAuth();
  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuState, setMenuState] = useState(null);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  const isDashboard = location.pathname.split("/").includes("dashboard");

  return (
    <div
      className={clsx({
        [classes.hidden]: isDashboard,
      })}
    >
      <Section bgColor={props.color} size="auto" class={classes.navbarContainer}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Container disableGutters={true}>
            <Toolbar>
              <Link to="/">
                <img src={logo} alt="Logo" className={classes.logo} />
              </Link>
              <div className={classes.spacer} />
              <Hidden mdUp={true} implementation="css">
                <IconButton
                  onClick={() => {
                    setDrawerOpen(true);
                  }}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden smDown={true} implementation="css">
                <Button component={Link} to="/about" color="inherit">
                  Why pitchBLACK?
                </Button>

                {/* <Button component={Link} to="/pricing" color="inherit">
                  Pricing
                </Button>
                <Button component={Link} to="/faq" color="inherit">
                  FAQ
                </Button>

                {!auth.user && (
                  <>
                    <Button component={Link} to="/auth/signin" color="inherit">
                      Sign in
                    </Button>
                    <Box component="span" ml={1}>
                      <Button
                        component={Link}
                        to="/auth/signup"
                        variant="contained"
                        color="primary"
                      >
                        Sign up
                      </Button>
                    </Box>
                  </>
                )} */}

                {auth.user && (
                  <>
                    <Button
                      color="inherit"
                      aria-label="Account"
                      aria-controls="account-menu"
                      aria-haspopup="true"
                      onClick={(event) => {
                        handleOpenMenu(event, "account-menu");
                      }}
                    >
                      Account
                      <ExpandMoreIcon className={classes.buttonIcon} />
                    </Button>
                    <Menu
                      id="account-menu"
                      open={
                        menuState && menuState.id === "account-menu"
                          ? true
                          : false
                      }
                      anchorEl={menuState && menuState.anchor}
                      getContentAnchorEl={undefined}
                      onClick={handleCloseMenu}
                      onClose={handleCloseMenu}
                      keepMounted={true}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <MenuItem component={Link} to="/dashboard">
                        Dashboard
                      </MenuItem>
                      <MenuItem component={Link} to="/settings/general">
                        Settings
                      </MenuItem>
                      <Divider />
                      <MenuItem
                        onClick={(event) => {
                          auth.signout();
                        }}
                      >
                        Signout
                      </MenuItem>
                    </Menu>
                  </>
                )}

                {/* <IconButton
                  color="inherit"
                  onClick={darkMode.toggle}
                  style={{ opacity: 0.6 }}
                >
                  {darkMode.value && <NightsStayIcon />}

                  {!darkMode.value && <WbSunnyIcon />}
                </IconButton> */}
              </Hidden>
            </Toolbar>
          </Container>
        </AppBar>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <List
            className={classes.drawerList}
            onClick={() => setDrawerOpen(false)}
          >
            <ListItem component={Link} to="/about" button={true}>
              <ListItemText>About</ListItemText>
            </ListItem>
            <ListItem component={Link} to="/faq" button={true}>
              <ListItemText>Pricing</ListItemText>
            </ListItem>
            <ListItem component={Link} to="/about" button={true}>
              <ListItemText>FAQ</ListItemText>
            </ListItem>

            {!auth.user && (
              <>
                <ListItem component={Link} to="/auth/signin" button={true}>
                  <ListItemText>Sign in</ListItemText>
                </ListItem>
                <ListItem>
                  <Button
                    component={Link}
                    to="/auth/signup"
                    variant="contained"
                    color="primary"
                  >
                    Sign up
                  </Button>
                </ListItem>
              </>
            )}

            {auth.user && (
              <>
                <ListItem component={Link} to="/dashboard" button={true}>
                  <ListItemText>Dashboard</ListItemText>
                </ListItem>
                <ListItem component={Link} to="/settings/general" button={true}>
                  <ListItemText>Settings</ListItemText>
                </ListItem>
                <Divider />
                <ListItem
                  button={true}
                  onClick={(event) => {
                    auth.signout();
                  }}
                >
                  <ListItemText>Sign out</ListItemText>
                </ListItem>
              </>
            )}

            <ListItem>
              <IconButton
                color="inherit"
                onClick={darkMode.toggle}
                style={{ opacity: 0.6 }}
              >
                {darkMode.value && <NightsStayIcon />}

                {!darkMode.value && <WbSunnyIcon />}
              </IconButton>
            </ListItem>
          </List>
        </Drawer>
      </Section>
    </div>
  );
}

export default Navbar;
