import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { getTypographyStyles } from "../util/helpers";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../util/db";
import AddAPhotoRoundedIcon from "@material-ui/icons/AddAPhotoRounded";

import { Company } from "../service/company";
import { useAuth } from "../util/auth";
import { Founder } from "../service/founder";

export default function Profile() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [missionStatement, setMissionStatement] = useState("");
  const [email, setEmail] = useState("");
  const [prevImage, setPrevImage] = useState("");
  const [description, setDescription] = useState("");
  const [companyDetails, setCompanyDetails] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [payload, setPayload] = useState("");
  const [image, setImage] = useState();

  const auth = useAuth();

  const userId = auth.user?.id;

  const companyModel = useRef();

  useEffect(() => {
    (async () => {
      if (!userId) return;

      const companyId = await new Founder(userId).fetchCompanyId();

      const companyRef = doc(db, "Company", companyId);
      const docSnap = await getDoc(companyRef);
      const company = docSnap.data();

      const _DDDocs = company.DDDocs;
      setEmail(_DDDocs.emailCompany);
      setDescription(_DDDocs.shortDescription);
      setLongDescription(_DDDocs.longDescription);
      setMissionStatement(_DDDocs.mission);
      setName(company.companyName);
      setCompanyDetails(company.companyDetails);
      setPrevImage(company.companyImage);

      companyModel.current = new Company(
        companyId,
        company.companyName,
        _DDDocs.emailCompany,
        company.companyDetails,
        _DDDocs.shortDescription,
        _DDDocs.longDescription,
        _DDDocs.mission
      );
    })();
  }, [auth.user?.id]);

  const fileHandler = async (e) => {
    if (e.target.lenth === 0) return;
    const encodedUrl = await Company.getBase54(e.target.files[0]);
    setImage(e.target.files[0]);
    setPayload(encodedUrl);
  };

  const onSubmit = async () => {
    try {
      const payload = {
        email,
        description,
        longDescription,
        missionStatement,
        image,
        name,
        companyDetails,
      };

      await companyModel.current.updateOne(payload);

      window.alert("Updated successfully");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
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
          Company Profile
        </Typography>

        <div className={classes.flex}>
          <Box marginY={5} className={classes.imageDiv}>
            {/* <img
              src={payload || prevImage}
              alt="Avatar"
              avatar
              className={classes.profileImage}
            /> */}
            <Avatar
              className={classes.avatarStyles}
              src={payload || prevImage}
              alt="No image to show"
            >
              Logo
            </Avatar>
            <label
              component={"label"}
              htmlFor="file-upload"
              className={classes.uploaderLabel}
            >
              <AddAPhotoRoundedIcon className={classes.iconStyles} />
              <input
                onChange={fileHandler}
                accept=".jpg, .jpeg, .png"
                type="file"
                id="file-upload"
                name="file-upload"
                className={classes.uploaderInput}
              />
            </label>
          </Box>
        </div>
        <div className={classes.formDiv}>
          <TextField
            id="standard-basic"
            label="Company Name"
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              className: classes.labelTextfield,
            }}
            fullWidth
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Email"
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              className: classes.labelTextfield,
            }}
            value={email || ""}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="What does your company do in 2 sentences"
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              className: classes.labelTextfield,
            }}
            value={companyDetails || ""}
            fullWidth
            onChange={(e) => setCompanyDetails(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="What is your company's mission statement"
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              className: classes.labelTextfield,
            }}
            fullWidth
            value={missionStatement || ""}
            onChange={(e) => setMissionStatement(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Who are you in one line"
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              className: classes.labelTextfield,
            }}
            fullWidth
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Typography
            align="left"
            className={clsx([
              classes.default_typography_paragraph,
              classes.textAreaLabel,
            ])}
          >
            Provide an in-depth description of your company
          </Typography>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder=" Write 3-4 sentences to answer this"
            className={classes.textArea}
            value={longDescription || ""}
            onChange={(e) => setLongDescription(e.target.value)}
          />
          <Button
            variant="contained"
            className={classes.submitButton}
            onClick={onSubmit}
          >
            Update
          </Button>
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
  uploaderInput: {
    display: "none",
  },
  uploaderLabel: {
    color: "#5987FC",
    cursor: "pointer",
    position: "absolute",
    bottom: 40,
    left: "55%",
  },
  iconStyles: {
    color: "#000",
    marginTop: 150,
    zIndex: 1,
  },
  formDiv: {
    margin: "0 auto",
    maxWidth: 810,
    padding: "50px 100px 50px 100px",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
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
    marginBottom: 20,
  },
  descriptionTypo: {
    color: " #707070",
    marginTop: 10,
    alignSelf: "flex-start",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
    position: "relative",
  },
  avatarStyles: {
    width: "100%",
    height: "100%",
    background: "#D5D5D5",
    color: "#fff",
    fontWeight: 700,
    fontSize: 32,
  },
  imageDiv: {
    width: 150,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },

  multilineColor: {
    color: "black",
    borderBottom: "1px solid #808080",
    marginBottom: 15,
    fontWeight: 800,
  },
  labelTextfield: {
    color: "#808080",
  },
  textAreaLabel: {
    color: "#707070",
    alignSelf: "flex-start",
    fontWeight: 500,
  },
  submitButton: {
    marginTop: 100,
    background: "#FFA741",
    color: "#fff",
    width: "30%",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "#FFA741",
    },
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
      fontWeight: 800,
    },
  },
}));
