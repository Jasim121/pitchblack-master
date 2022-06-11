import React from "react";
import { Link } from "react-router-dom";
import arrowicon from "../../util/imageIcons/Send.png";
import icon from "../../util/imageIcons/burger_menu.png";
import Logo from "../../util/imageIcons/logo (1).png";
const Header = ({ need_nav }) => {
  return (
    <div className="Header">
      <div className="content common_width">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        {need_nav != "no" && (
          <nav>
            <li className="burger_icon">
              <img src={icon} alt="" />
            </li>
            <li className="pitch_list">
              <Link to="/about">Why pitchBLACK ?</Link>
            </li>{" "}
            <li>
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
                    stroke="#72554A"
                    stroke-width="1.70525"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.37221 2.78396L11.2098 2.78397L11.2098 8.62159"
                    stroke="#72554A"
                    stroke-width="1.70525"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </li>
          </nav>
        )}
      </div>
    </div>
  );
};
export default Header;
