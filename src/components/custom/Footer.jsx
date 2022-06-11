import React from "react";
import logo from "../../util/imageIcons/footer_logo.svg";
import facebook from "../../util/imageIcons/facebook.svg";
import instagram from "../../util/imageIcons/instagram.svg";
import linkden from "../../util/imageIcons/linkden.svg";
import twitter from "../../util/imageIcons/twitter.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="content common_width">
        <img src={logo} alt="" />
        <nav>
          <li>
            <Link to="/">
              <img src={facebook} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={instagram} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={linkden} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={twitter} alt="" />
            </Link>
          </li>
        </nav>
      </div>
    </div>
  );
};
export default Footer;
