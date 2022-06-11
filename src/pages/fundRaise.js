import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getTypographyStyles } from "../util/helpers";
import { Typography } from "@material-ui/core";
import { Button } from "../components/button";
import clsx from "clsx";
import Table from "../components/fundRaiseTable";
import { SimpleModal } from "../components/defaultModal";
import InviteModal from "../Model/inviteFundRaiseModal";

export default function FundRaise() {
  const classes = useStyles();
  const [modalStates, setModalStates] = useState({
    invite: false,
  });
  const closeInviteModal = () => {
    setModalStates((prev) => ({ ...prev, invite: false }));
  };
  const handleInviteModal = () => {
    setModalStates((prev) => ({ ...prev, invite: true }));
  };

  return (
    <>
      <SimpleModal
        title="Who would you like to invite?"
        open={modalStates.invite}
        handleClose={closeInviteModal}
      >
        <InviteModal handleClose={closeInviteModal} />
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
          Investors
        </Typography>
        <Typography align="left" className={clsx([classes.descriptionTypo])}>
          Invite a potential investor to view your interactive executive summary
        </Typography>
        <div className={classes.topButtonDiv}>
          <Button
            className={classes.investorButton}
            onClick={handleInviteModal}
          >
            Invite Investor
          </Button>
          <Typography className={classes.editTypo}>Edit</Typography>
        </div>
        <div className={classes.tableDiv}>
          <div>
            <Typography
              align="left"
              className={clsx([
                classes.default_typography_subHeading,
                classes.headerTypo,
              ])}
            >
              Investors
            </Typography>
            <Typography
              align="left"
              className={clsx([classes.descriptionTypo, classes.tableDes])}
            >
              Invite a potential investor to view your interactive executive
              summary
            </Typography>
          </div>
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
    fontWeight: 700,
  },
  descriptionTypo: {
    maxWidth: 500,
    fontSize: 18,
    color: " #000",
    marginTop: 10,
    alignSelf: "flex-start",
    fontWeight: 700,
  },
  tableDes: {
    fontWeight: 650,
    fontSize: 16,
    maxWidth: 600,
  },
  iconStyles: {
    color: "#C4C4C4",
    fontSize: 36,
  },

  tableDiv: {
    marginTop: 20,
    padding: "0px 20px",
  },
  investorButton: {
    height: 50,
  },
  editTypo: {
    fontSize: 14,
    color: "#000",
    fontWeight: 600,
  },
}));
