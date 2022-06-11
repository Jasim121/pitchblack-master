import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Routes } from "../util/routesSideBar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Divider,
  Typography,
  IconButton,
  ListItemIcon,
  Grid,
  Button,
  Avatar,
  Box,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../util/db";
import InfoIcon from "@material-ui/icons/Info";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import { Founder } from "../service/founder";
import { useAuth } from "../util/auth";

const drawerWidth = 250;
const activeBgColor = "#FFA741";

export function Sidebar({ children }) {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [missingCompanyInfo, setMissingCompanyInfo] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const [name, setName] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(window.innerWidth > 500 ? true : false);
  const auth = useAuth();

  const userId = auth.user?.id;

  const isDashboard = location.pathname.split("/").includes("dashboard");
  const isAuth = location.pathname.split("/").includes("signin");

  const checkActive = (path) => {
    const [basePath] = path
      .split("/")
      .filter((el) => el)
      .slice(-1);
    const [comparison] = location.pathname
      .split("/")
      .filter((el) => el)
      .slice(-1);

    return basePath === comparison;
  };

  const handleClick = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = async () => {
    console.log({ auth });
    await auth.signout();
    history.push("/");
  };

  useEffect(async () => {
    if (!userId) return;

    const companyId = await new Founder(userId).fetchCompanyId();

    if (!companyId) return;

    onSnapshot(doc(db, "Company", companyId), (docSnap) => {
      let company = docSnap.data();
      const _DDDocs = docSnap.data().DDDocs;
      const _founders = [...company.founderDescription];
      const founder = _founders.find((item) => item.id == userId);
      setProfilePic(founder.profilePicture);
      if (
        _DDDocs.emailCompany &&
        _DDDocs.shortDescription &&
        _DDDocs.longDescription &&
        _DDDocs.mission &&
        docSnap.data().companyName &&
        docSnap.data().companyDetails
      ) {
        setMissingCompanyInfo(false);
      } else {
        setMissingCompanyInfo(true);
      }
    });

    const userDocRef = doc(db, "Founder", userId);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      let username = userDocSnap.data().name;
      setName(username);
    } else {
      console.log("No such document!");
    }
  }, [auth.user?.id]);

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <CssBaseline />
      <div
        className={clsx({
          [classes.hidden]: !isDashboard,
        })}
      >
        <Drawer
          variant="permanent"
          open={open}
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          anchor={"left"}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={() => setOpen(!open)}>
              {open ? (
                <ChevronRightIcon color="#000" className={classes.colorBlack} />
              ) : (
                <MenuIcon color="#000" className={classes.colorBlack} />
              )}
            </IconButton>
          </div>
          <List>
            {open && (
              <Fragment>
                <Box
                  onClick={() => {
                    history.push("/dashboard/profile");
                  }}
                  marginX={2}
                  paddingY={2}
                  paddingX={1}
                  display="flex"
                  alignItems={"center"}
                >
                  <Avatar alt={name} src={profilePic} />

                  <Box marginX={1}>
                    <Typography className={classes.profileName}>
                      {name}
                    </Typography>
                  </Box>
                  <ExpandMoreIcon color="black" onClick={handleClick} />
                </Box>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  classes={{ paper: classes.menuPaper }}
                >
                  <MenuItem
                    onClick={handleSignOut}
                    className={classes.logOutMenu}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </Fragment>
            )}

            {Routes.filter((el) => el.icon).map((el, idx) => (
              <ListItem
                component={"li"}
                key={idx}
                button
                className={clsx({
                  [classes.list]: true,
                  [classes.active]: checkActive(el.path),
                })}
                onClick={() => {
                  history.push(el.path);
                }}
              >
                <ListItemIcon className={classes.listItemIcons}>
                  {el.icon}
                </ListItemIcon>
                <ListItemText
                  primary={el.title}
                  classes={{ primary: classes.listItemText }}
                />
                {el.title == "Company Info" && missingCompanyInfo && (
                  <InfoIcon
                    color="#FFA741!important"
                    className={classes.infoIconStyles}
                  />
                )}
              </ListItem>
            ))}
          </List>
          <Divider className={classes.divider} />
        </Drawer>
      </div>
      <main
        style={{ width: "100%" }}
        className={clsx({
          [classes.content]: isDashboard,
          [classes.background]: isAuth,
        })}
      >
        <section
          className={clsx({
            [classes.page]: isDashboard,
          })}
        >
          {children}
        </section>
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  background: {
    background: "#212121",
  },
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    background: "#fff",
    overflowX: "hidden",
  },
  hidden: {
    display: "none",
  },
  logoImage: {
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 15,
  },
  toolbar: {
    margin: 0,
    padding: 0,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 ",
    ...theme.mixins.toolbar,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  listItemText: {
    color: "#1F1D36",
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    paddingRight: "5px",
    color: "#ffffff",
  },
  colorBlack: {
    color: "#000",
  },
  divider: {
    marginTop: "auto",
    background: "#303030",
  },
  listItemIcons: {
    justifyContent: "center",
    color: "#fff",
    margin: "0px auto",
  },
  infoIconStyles: {
    marginRight: 47,
    marginBottom: 5,
    fontSize: 25,
    color: "#FFA741",
  },
  drawer: {
    background: "#1B1D21",
    color: "#f3f3f3",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    overflowX: "hidden",
    background: "#fff",
    color: "#1F1D36",
    width: drawerWidth,
    boxShadow: `rgba(0, 0, 0, 0.1) 0px 10px 50px`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: "#ccc",
    color: "#f3f3f3",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
  profileName: {
    fontSize: "small",
    textTransform: "capitalize",
    fontWeight: "bold",
    wordWrap: "break-word",
  },
  profileRole: {
    fontSize: "small",
    color: "#808191",
    textTransform: "capitalize",
  },
  profileText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  profileContainer: {
    cursor: "pointer",
    display: "flex",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  list: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  active: {
    borderRadius: 10,
    background: `${activeBgColor} !important`,
    "& .MuiListItemText-root .MuiTypography-root": {
      color: "#fff !important",
    },
    "& svg path": {
      fill: "#fff",
    },
  },
  content: {
    flex: 1,
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    padding: 20,
    [theme.breakpoints.only("xs")]: {
      padding: 0,
    },
  },
  page: {
    height: "100%",
    width: "100%",
    maxWidth: 900,
    margin: "0 auto",

    [theme.breakpoints.down("md")]: {
      maxWidth: "none",
      padding: 20,
    },
  },
  logOutMenu: {
    color: "#000",
    background: "#fff",
    fontWeight: 700,
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  menuPaper: {
    background: "#fff",
    // border: "0.5px solid #000",
  },
}));
