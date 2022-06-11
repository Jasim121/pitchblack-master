import React from "react";
import Header from "./Header";
import arrowicon from "../../util/imageIcons/Send (1).png";
import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
    <div className="home_banner">
      <Header />
      <div className="body_area">
        <div className="content common_width">
          <h1>The fintech platform for the black community</h1>
          <p>
            A community with a goal to help push the needle in the market and
            activate black investors and founders, giving everyone a seat at
            their own table.
          </p>
          <Link to="/waitlist" className="button">
            Join our waitlist
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2098 2.78397L3.25202 10.7418"
                stroke="#f8eadd"
                stroke-width="1.70525"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.37221 2.78396L11.2098 2.78397L11.2098 8.62159"
                stroke="#f8eadd"
                stroke-width="1.70525"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
