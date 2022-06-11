import React from "react";
import arrowicon from "../../util/imageIcons/Send (1).png";
import { Link } from "react-router-dom";
const BannerSmall = () => {
  return (
    <div className="BannerSmall">
      <div className="content common_width">
        <div className="presentation">
          <h1>You are not a founder yet?</h1>
          <p>
            You just have an idea that you think would scale in the industry.
            Let’s work you through all you need to be able to be eligible for
            funding from investors.
          </p>
        </div>

        <Link to="/waitlist" className="button">
          Join our waitlist
          <img src={arrowicon} alt="" />
        </Link>
      </div>
    </div>
  );
};
export default BannerSmall;
