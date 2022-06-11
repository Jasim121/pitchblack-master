import CloseIcon from "@material-ui/icons/Close";
import { getTypographyStyles } from "../util/helpers";
import clsx from "clsx";
import {
  Box,
  TextareaAutosize,
  makeStyles,
  Divider,
  Typography,
  Modal,
  Button,
} from "@material-ui/core";
import React, { useEffect, useMemo, useRef, useState } from "react";
import uploadImage from "../util/imageIcons/image1.png";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAuth } from "firebase/auth";
import FileProgressBar from "../components/progressBar";

const storage = getStorage();
const auth = getAuth();

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${50}%)`,
  };
}

export const SimpleModal = (props) => {
  const [payload, setPayload] = useState();
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const { handleClose, onSubmit, title, description, type, open } = props;
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const valueRef = useRef();
  const listener = useRef();

  useEffect(() => {
    if (!payload || typeof payload == "string") return;
    setLoading(true);
    const storageRef = ref(
      storage,
      `${auth.currentUser.uid}/ddDocs/${payload.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, payload);

    listener.current = uploadTask.on(
      "state_changed",
      (snapshot) => {
        const _progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(_progress);
        // switch (snapshot.state) {
        //   case 'paused':
        //     console.log('Upload is paused');
        //     break;
        //   case 'running':
        //     console.log('Upload is running');
        //     break;
        // }
      },
      (error) => {
        console.log("error occurred", error);
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          valueRef.current = {
            value: downloadURL,
          };

          setLoading(false);
        });
      }
    );
  }, [payload]);

  const fileHandler = (e) => {
    if (e.target.lenth === 0) return;
    setPayload(e.target.files[0]);
  };

  const textAreaHandler = (e) => {
    setPayload(e.target.value);
    valueRef.current = {
      value: e.target.value,
    };
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        setPayload(null);
        handleClose();
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <div className={classes.header}>
          <div>
            <Typography
              className={clsx([
                classes.default_typography_heading,
                classes.headerTypo,
              ])}
            >
              {title}
            </Typography>
            <Typography
              className={clsx([
                classes.default_typography_paragraph,
                classes.descriptionTypo,
              ])}
            >
              {description}
            </Typography>
          </div>
          <CloseIcon
            onClick={() => {
              if (loading) return;
              setPayload(null);

              handleClose();
            }}
            className={classes.crossIcon}
          />
        </div>
        <Divider />

        {type === "url" && (
          <div className={classes.body}>
            {payload && (
              <Box marginY={3}>
                <FileProgressBar
                  progress={progress}
                  name={payload?.name}
                  type={payload}
                />
              </Box>
            )}

            <Box className={classes.uploaderBox}>
              <img src={uploadImage} />
              <Typography>.pdf or .ppx </Typography>
              <Typography>You can also upload files by</Typography>
              <label
                component={"label"}
                htmlFor="file-upload"
                className={classes.uploaderLabel}
              >
                Clicking here
                <input
                  onChange={fileHandler}
                  accept=".pdf, .ppt, .pptx,"
                  type="file"
                  id="file-upload"
                  name="file-upload"
                  className={classes.uploaderInput}
                />
              </label>
            </Box>
          </div>
        )}
        {type === "string" && (
          <div className={classes.body}>
            <TextareaAutosize
              onChange={textAreaHandler}
              className={classes.textArea}
              placeholder="Write here"
              minRows={3}
            />
          </div>
        )}
        <div className={classes.buttonDiv}>
          <Button
            disabled={loading || !payload}
            onClick={() => {
              onSubmit(valueRef.current, payload, type);
              setPayload(null);
            }}
            variant="contained"
            className={classes.submitButton}
          >
            Done
          </Button>
        </div>
      </div>
    </Modal>
  );
};

const useStyles = makeStyles((theme) => ({
  ...getTypographyStyles(theme),
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 0)",
    borderRadius: 6,
    backgroundColor: `#fff`,
    padding: 40,
    "&:focus-visible": {
      outline: "none",
    },
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
  headerTypo: {
    color: "#000",
    fontWeight: "800",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    minWidth: 700,
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
  submitButton: {
    marginTop: 20,
    background: "#FFA741",
    color: "#fff",
    width: "30%",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "#FFA741",
    },
  },
  descriptionTypo: {
    color: "#626262",
    fontWeight: 700,
    letterSpacing: 1,
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
  },
  uploaderBox: {
    width: "100%",
    height: 300,
    border: ".5px solid #707070",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
  },
  uploaderLabel: {
    color: "#5987FC",
    cursor: "pointer",
  },
  uploaderInput: {
    display: "none",
  },
  textArea: {
    width: "100%",
    height: 100,
    border: "none",
    borderBottom: "1px solid #808080",
    color: "#000",
    fontSize: 14,
    "&:focus": {
      border: "none",
      borderBottom: "1px solid #808080",
    },

    "& input::placeholder": {
      color: "#808080 !important",
    },
  },
}));
