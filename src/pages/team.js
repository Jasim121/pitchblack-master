import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getTypographyStyles } from "../util/helpers";
import { Typography } from "@material-ui/core";
import { Button } from "../components/button";
import clsx from "clsx";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import Table from "../components/teamTable";
import { SimpleModal } from "../components/defaultModal";
import AddTeamBody from "../Model/addTeamModal";

export default function Team() {
  const classes = useStyles();
  const [modalStates, setModalStates] = useState({
    addTeam: false,
  });
  const closeAddTeamModal = () => {
    setModalStates((prev) => ({ ...prev, addTeam: false }));
  };
  const handleAddTeam = () => {
    setModalStates((prev) => ({ ...prev, addTeam: true }));
  };

  return (
    <>
      <SimpleModal
        title="Team Member"
        open={modalStates.addTeam}
        handleClose={closeAddTeamModal}
      >
        <AddTeamBody handleClose={closeAddTeamModal} />
      </SimpleModal>
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
        <Typography
          align="left"
          className={clsx([
            classes.default_typography_subHeading,
            classes.headerTypo,
          ])}
        >
          Team
        </Typography>
        <div className={classes.topButtonDiv}>
          <AddCircleOutlinedIcon
            className={classes.iconStyles}
            onClick={handleAddTeam}
          />
          <Button className={classes.editButton}>Edit</Button>
        </div>
        <div className={classes.tableDiv}>
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
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  topButtonDiv: {
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
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
  iconStyles: {
    color: "#C4C4C4",
    fontSize: 36,
    cursor: "pointer",
  },
  editButton: {
    borderRadius: 25,
    width: 100,
  },
  tableDiv: {
    marginTop: 20,
    padding: "0px 5px",
  },
}));
