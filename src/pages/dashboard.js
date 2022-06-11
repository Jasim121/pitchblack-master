import React, { useEffect, useState } from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";
import { SimpleModal } from "../components/Modal";
import { DashboardDocs } from "../util/constants";
import { getTypographyStyles } from "../util/helpers";
import { doc, getDoc, updateDoc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../util/db";
import { nanoid } from "nanoid";
import { Founder } from "../service/founder";
import { useAuth } from "../util/auth";

const Input = styled("input")({
  display: "none",
});

function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  const [selectedAction, setSelectedAction] = useState();
  const [companyId, setCompanyId] = useState();
  const [DDdocs, setDDDocs] = useState();
  const auth = useAuth();
  const userId = auth.user?.id;

  const onSubmit = async (payload, file, type) => {
    if (!companyId) {
      console.log("Company not found");
      return;
    }

    let DDDocs;

    const lockerId = nanoid(6);
    const docRef = doc(db, "Company", companyId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      DDDocs = docSnap.data().DDDocs;
      const newDDDocs = { ...DDDocs, [selectedAction.key]: payload.value };
      const Ref = doc(db, "Company", companyId);
      await updateDoc(Ref, {
        DDDocs: newDDDocs,
      });
      if (type == "url") {
        await setDoc(doc(db, "Founder", userId, "DocumentLocker", lockerId), {
          id: lockerId,
          name: file.name,
          uploadDate: new Date(),
          status: "No Requirements",
          url: payload.value,
          type: selectedAction.key,
        });
      }
      handleCloseModal();
    } else {
      console.log("No such document!");
    }
  };
  const handleCloseModal = () => {
    setSelectedAction(null);
  };

  useEffect(() => {
    (async () => {
      if (!userId) return;
      const companyId = await new Founder(userId).fetchCompanyId();
      setCompanyId(companyId);
    })();
  }, [auth.user?.id]);

  useEffect(() => {
    (async () => {
      if (!companyId) return;
      const unsub = onSnapshot(doc(db, "Company", companyId), (doc) => {
        setDDDocs(doc.data().DDDocs);
      });
    })();
  }, [companyId]);

  return (
    <>
      <SimpleModal
        open={!!selectedAction}
        handleClose={handleCloseModal}
        title={selectedAction?.title}
        description={selectedAction?.description}
        type={selectedAction?.type}
        onSubmit={onSubmit}
      />

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
          Company Dashboard
        </Typography>
        <Typography
          align="left"
          className={clsx([
            classes.default_typography_subHeading,
            classes.toDoTypo,
          ])}
        >
          To Do's
        </Typography>
        <div className={classes.listDiv}>
          {DDdocs &&
            DashboardDocs.filter(
              (el) => el.required && el.type === "string"
            ).map((e) => {
              if (DDdocs[e.key]) return;

              return (
                <>
                  <div
                    className={classes.innerListDiv}
                    onClick={() => setSelectedAction(e)}
                  >
                    <div className={classes.yellowBar} />
                    <div>
                      <Typography className={classes.listItemTitleText}>
                        {e?.title || "Sample Title " + e.label}
                      </Typography>
                      <Typography className={classes.listItemDesText}>
                        {e?.description || "Sample Description"}
                      </Typography>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <Typography
          align="left"
          className={clsx([
            classes.default_typography_subHeading,
            classes.toDoTypo,
          ])}
        >
          Document Upload's
        </Typography>
        <Grid container spacing={4}>
          {DDdocs &&
            DashboardDocs.filter((el) => el.required && el.type === "url").map(
              (e) => {
                if (DDdocs[e.key]) return;
                return (
                  <Grid
                    item
                    lg={3}
                    md={4}
                    sm={5}
                    xs={12}
                    onClick={() => setSelectedAction(e)}
                  >
                    <Box className={classes.gridHover}>
                      <Typography
                        align="center"
                        className={clsx([
                          classes.default_typography_colorDark,
                          classes.uploaderTitleTypo,
                        ])}
                      >
                        {e?.title || "" + e.label}
                      </Typography>
                      <Button
                        className={classes.uploadButton}
                        variant="filled"
                        component="span"
                        endIcon={<AddIcon className={classes.uploadIcon} />}
                      />
                    </Box>
                  </Grid>
                );
              }
            )}
        </Grid>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  ...getTypographyStyles(theme),
  pageTitleTypo: {
    color: "#000",
    fontWeight: 900,
    padding: 10,
  },
  container: {
    padding: 30,
  },
  headerTypo: {
    color: "#000",
    fontSize: 26,
    fontWeight: 600,
    marginBottom: 40,
  },
  toDoTypo: {
    color: "#000",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  listItemTitleText: {
    color: "#000",
    fontWeight: 700,
    fontSize: 24,
  },
  listItemDesText: {
    color: "#626262",
    fontSize: 18,
    fontWeight: 600,
  },
  listDiv: {
    marginBottom: 40,
    display: "flex",
    flexDirection: "column",
    padding: 20,
    background: "#fff",
  },
  innerListDiv: {
    background: "#F3F3F3",
    marginBottom: 15,
    borderRadius: 20,
    display: "flex",
    padding: "15px 15px 35px 15px",
    "&:hover": {
      opacity: 0.5,
    },
    cursor: "pointer",
  },
  yellowBar: {
    height: 35,
    width: 5,
    borderRadius: 20,
    marginRight: 10,
    marginTop: 5,
    background: "#FFA741",
  },
  uploadButton: {
    background: "#fff",
  },
  uploadIcon: {
    color: "#686868",
    fontSize: "35px !important",
    alignSelf: "center",
    marginTop: 10,
  },
  uploaderTitleTypo: {
    fontWeight: 700,
    color: "#686868",
  },
  gridHover: {
    cursor: "pointer",
    background: "#fff",
    width: 190,
    height: 190,
    "&:hover": {
      opacity: 0.5,
    },
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
  },
}));

export default Dashboard;

// useEffect(() => {
//   (async () => {
//     try {
//

//       console.log("done");
//     } catch (error) {
//       console.log(error);
//     }
//   })();
// }, []);
