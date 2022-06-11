import React from "react";
import { makeStyles, Divider, Typography, Modal } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${50}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 0)",
    backgroundColor: `#fff`,
    padding: theme.spacing(2, 3),
    "&:focus-visible": {
      outline: "none",
    },
    width: "35%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,

    [theme.breakpoints.down("sm")]: {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
  headerText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    minWidth: 500,
    width: "auto",
    maxHeight: "80vh",
    paddingTop: 10,
    paddingBottom: 10,
    [theme.breakpoints.down("sm")]: {
      minWidth: "75vw",
      maxWidth: "75vw",
      maxHeight: "80vh",
    },
  },
  crossIcon: {
    cursor: "pointer",
    color: "#000",
  },
}));

export const SimpleModal = (props) => {
  const { handleClose, children, title } = props;

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <div className={classes.header}>
          <Typography className={classes.headerText}>{title}</Typography>
          <CloseIcon onClick={handleClose} className={classes.crossIcon} />
        </div>
        <Divider />
        <div className={classes.body}>{children}</div>
      </div>
    </Modal>
  );
};
