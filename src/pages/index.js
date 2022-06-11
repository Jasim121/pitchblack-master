import React from "react";
import Meta from "./../components/Meta";
import "../styles/index.css";
import BannerSmall from "../components/custom/BannerSmall";
import HomeBanner from "../components/custom/HomeBanner";
import BlackFounderConnection from "../components/custom/BlackFounderConnection";
import Footer from "../components/custom/Footer";
function IndexPage(props) {
  return (
    <>
      <div className="IndexPage">
        <HomeBanner />

        {/* Connection */}
        <BlackFounderConnection />

        {/* small banner */}

        <BannerSmall />

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default IndexPage;
