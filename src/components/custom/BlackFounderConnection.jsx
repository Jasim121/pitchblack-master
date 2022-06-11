import React, { useState } from "react";
import BlackFounderConnectionCard from "./BlackFounderConnectionCard";
const BlackFounderConnection = () => {
  const [notactive, setNotActive] = useState("Investor");
  return (
    <div className="BlackFounderConnection">
      <div className="content common_width">
        <h1>We connect black founder’s ventures with black investors.</h1>

        <div className="cards_wrapper">
          <div
            onClick={(e) => {
              if (notactive == "founder") {
                setNotActive("Investor");
              } else {
                setNotActive("founder");
              }
            }}
            className={`${notactive == "founder" && "notactive"}`}
          >
            <BlackFounderConnectionCard title="As a Founder" />
          </div>
          <div
            onClick={(e) => {
              if (notactive == "Investor") {
                setNotActive("founder");
              } else {
                setNotActive("Investor");
              }
            }}
            className={`${notactive == "Investor" && "notactive"}`}
          >
            <BlackFounderConnectionCard title="As an Investor" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlackFounderConnection;
