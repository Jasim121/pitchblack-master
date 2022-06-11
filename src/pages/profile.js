import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { getTypographyStyles } from "../util/helpers";
import AddAPhotoRoundedIcon from "@material-ui/icons/AddAPhotoRounded";
import { useAuth } from "../util/auth";

import { Founder } from "../service/founder";
import { Company } from "../service/company";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Profile() {
  const classes = useStyles();
  const [prevData, setPrevData] = useState();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [payload, setPayload] = useState("");
  const [image, setImage] = useState();

  const auth = useAuth();

  const userId = auth.user?.id;

  const founderModel = useRef();

  const initials = name
    .split(" ")
    .map((el) => el[0]?.toUpperCase())
    .join("");

  useEffect(() => {
    (async () => {
      if (!userId) return;
      const companyId = await new Founder(userId).fetchCompanyId();

      let company = await Company.findOne(companyId);

      const _founders = [...company.founderDescription];
      let founderCompany = _founders.find((item) => item.id == userId);
      setPrevData(founderCompany);
      setRole(founderCompany.role);
      setEmail(founderCompany.email);
      setDescription(founderCompany.description);
      setLongDescription(founderCompany.longDescription);

      let founder = await Founder.findOne(userId);
      setName(founder.name);

      founderModel.current = new Founder(
        userId,
        name,
        email,
        founder.companies
      );
    })();
  }, [auth.user?.id]);

  const fileHandler = async (e) => {
    if (e.target.lenth === 0) return;
    const encodedUrl = await Founder.getBase54(e.target.files[0]);
    setImage(e.target.files[0]);
    setPayload(encodedUrl);
  };

  const roles = [
    "Chief Executive Officer (CEO)",
    "Chief Operating Officer (COO)",
    "Chief Financial Officer (CFO) or Controller",
    "Chief Marketing Officer (CMO)",
    "Chief Technology Officer (CTO)",
    "President",
    "Vice President",
    "Executive Assistant",
    "Marketing manager",
    "Product manager",
    "Project manager",
    "Finance manager",
    "Human resources manager",
    "Marketing specialist",
    "Business analyst",
    "Human resource personnel",
    "Sales representative",
    "Accountant",
    "Customer service representative",
    "Administrative assistant",
  ];
  const onSubmit = async () => {
    if (!userId) {
      window.alert("User not Found");
      return;
    }
    const companyId = await new Founder(userId).fetchCompanyId();

    try {
      const payload = {
        description,
        longDescription,
        role,
        image,
        name,
        email,
      };

      await founderModel.current.updateOne(companyId, payload);

      window.alert("Updated successfully");
    } catch (error) {
      window.alert("Error Updating");
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
            classes.default_typography_heading,
            classes.headerTypo,
          ])}
        >
          My Profile
        </Typography>

        <div className={classes.flex}>
          <Box marginY={5} className={classes.imageDiv}>
            <Avatar
              className={classes.avatarStyles}
              src={payload || prevData?.profilePicture}
              alt="No image to show"
            >
              {initials}
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
            label="Full Name"
            value={name || ""}
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              className: classes.labelTextfield,
            }}
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Company Role"
            value={role}
            fullWidth
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              className: classes.labelTextfield,
            }}
          >
            {roles.map((e) => (
              <MenuItem key={e} value={e} onClick={() => setRole(e)}>
                {e}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-basic"
            label="Email"
            value={email || ""}
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              className: classes.labelTextfield,
            }}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            id="standard-basic"
            value={description || ""}
            label="Who are you in one line"
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              className: classes.labelTextfield,
            }}
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
          />
          <Typography
            align="left"
            className={clsx([
              classes.default_typography_label,
              classes.descriptionTypo,
            ])}
          >
            Talk about why you are the person to take on this problem
          </Typography>

          <TextareaAutosize
            aria-label="minimum height"
            placeholder="Write 3-4 sentences to answer this"
            minRows={3}
            style={{ width: "100%", height: 100 }}
            onChange={(e) => setLongDescription(e.target.value)}
            value={longDescription || ""}
            className={classes.textArea}
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
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
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
    marginTop: 20,
    background: "#FFA741",
    color: "#fff",
    width: "30%",
    marginTop: 100,
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
      fontWeight: "800px !important",
    },
  },
}));
