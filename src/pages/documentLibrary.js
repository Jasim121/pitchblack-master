import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getTypographyStyles } from "../util/helpers";
import clsx from "clsx";
import Accordion from "../components/Accordion";
import { getDocs, collection } from "firebase/firestore";
import { useAuth } from "../util/auth";

import { db } from "../util/db";

export default function DocumentLibrary() {
  const auth = useAuth();

  const userId = auth.user?.id;

  const classes = useStyles();
  const [lockerData, setLockerData] = useState([]);
  const [FundRaise, setFundRaise] = useState([]);
  const [Strategy, setStrategy] = useState([]);
  const [Financial, setFinancial] = useState([]);

  useEffect(async () => {
    if (!userId) return;
    let arr = [];
    const querySnapshot = await getDocs(
      collection(db, "Founder", userId, "DocumentLocker")
    );
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      arr.push(doc.data());
    });
    setLockerData(arr);
  }, [auth.user?.id]);
  useEffect(() => {
    if (!lockerData) return;
    let filterData;
    filterData = lockerData.filter(
      (e) =>
        e.type == "marketAnalysis" ||
        e.type == "teamBio" ||
        e.type == "execSummary" ||
        e.type == "deck" ||
        e.type == "milestoneAch" ||
        e.type == "pitch" ||
        e.type == "factSheet" ||
        e.type == "testimonial"
    );
    setFundRaise(filterData);
    filterData = lockerData.filter(
      (e) =>
        e.type == "finProjection" ||
        e.type == "proforma" ||
        e.type == "balanceSheet"
    );
    setFinancial(filterData);
    filterData = lockerData.filter(
      (e) =>
        e.type == "milestoneSch" ||
        e.type == "keyHires" ||
        e.type == "customerPipeline" ||
        e.type == "projectPlan"
    );
    setStrategy(filterData);
  }, [lockerData]);

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
          Document Locker
        </Typography>
        {lockerData?.length < 1 ? (
          <Typography
            align="left"
            className={clsx([
              classes.default_typography_subHeading,
              classes.headerTypo,
            ])}
          >
            No Documents have been uploaded yet
          </Typography>
        ) : (
          <>
            {FundRaise.length > 0 && (
              <Accordion locker={FundRaise} title="Fundraise" />
            )}
            {Strategy.length > 0 && (
              <Accordion locker={Strategy} title="Strategy" />
            )}
            {Financial.length > 0 && (
              <Accordion locker={Financial} title="Financial and Fundraise" />
            )}
          </>
        )}
      </div>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  ...getTypographyStyles(theme),
  container: {
    padding: 20,
  },
  pageTitleTypo: {
    color: "#000",
    fontWeight: 900,
    padding: 10,
  },
  headerTypo: {
    color: "#000",
    fontWeight: 600,
    marginBottom: 20,
    fontSize: 26,
  },
  descriptionTypo: {
    color: " #707070",
    marginTop: 10,
    alignSelf: "flex-start",
  },
}));
