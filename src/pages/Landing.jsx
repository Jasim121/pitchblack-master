import React, { useState, useRef } from "react";
import "../styles/landing.css";
import logo from "../img/pitchblack x.svg";
import main_mbl from "../img/main_mbl.png";
import NFT from "../img/NFT.png";
import nft2 from "../img/nft2.png";
import nft3 from "../img/nft3.png";
import port_big from "../img/port_big.png";
import group25 from "../img/Group 25.png";
import group23 from "../img/Group 26.png";
import footer_img from "../img/footer_image.svg";
import { useForm } from "react-hook-form";
import base from "../api/base";
import TextField from "@material-ui/core/TextField";
const Landing = () => {
  const { handleSubmit, register, errors, reset } = useForm();
  const [formAlert, setFormAlert] = useState(null);

  const emailRef = useRef();
  const emailRefTwo = useRef();

  const addToWaitList = (e) => {
    e.preventDefault();
    console.log(emailRef)
    const email = emailRef.current.value;
    console.log(email)

    base("Founders").create(
      [
        {
          fields: {
            "Email": email,
          },
        },
      ]
    );
  };

  const addToWaitListBottomForm = (e) => {
    e.preventDefault();
    console.log(emailRefTwo)
    const email = emailRefTwo.current.value;
    console.log(email)

    base("Founders").create(
      [
        {
          fields: {
            "Email": email,
          },
        },
      ]
    );
  };

  return (
    <div className="Landing">
      <div className="landing_wrapper">
      <div className="firstcircle circle "></div>
      <div className="secondcircle circle "></div>
      <div className="thirdcircle circle "></div>
      <div className="fourthcircle  circle "></div>
      <header className="common_width">
        <img src={logo} alt="" />
      </header>

      {/* main */}
      <main className="common_width">
        <div className="presentation_area">
          <h1>A new way to fundraise using NFT's</h1>
          <img src={main_mbl} alt="" className="mbl_mobile_main" />
          <p>
            A fundraising platform that allows your communities to 
            invest and support you through NFT smart contract technology.
          </p>
          <div className="input_wrapper">
            <TextField
              variant="outlined"
              type="email"
              error={errors.email ? true : false}
              helperText={errors.email && errors.email.message}
              fullWidth={true}
              placeholder="example@gmail.com"
              inputRef={
                (register({
                  required: "Please enter your email",
                }), emailRef) }
            />

            <button onClick={addToWaitList}>Join waitlist</button>
          </div>
        </div>
        <div className="image_wrapper">
            <img src={main_mbl} alt="" />
        </div>
        </main>


        <section className="how_it_works">
          <div className="content_area common_width">
            <div className="top_area">
              <h1>How it works</h1>
              <p>
                Discover new businesses you believe in and gain access to exclusive
                benefits by buying (investing) their NFT
              </p>
            </div>
            <div className="boxes_area">
              <div className="box">
                <div className="boximg">
                  <img src={NFT} alt="" />
                </div>
                <p>Business mints NFT and releases it on the exchange</p>
              </div>
              <div className="box">
                <div className="boximg">
                  <img src={nft2} alt="" />
                </div>

                <p>
                  Discover new businesses you believe in gain access to
                  exclusive benefits by buying (investing) their NFT
                </p>
              </div>
              <div className="box">
                <div className="boximg">
                  <img src={nft3} alt="" />
                </div>

                <p>Sell or hold NFTs on the exchange as the value increases</p>
              </div>
            </div>
          </div>
        </section>

      <section className="portfilio">
          <div className="common_width">
            <img src={port_big} alt="" />
          </div>
      </section>

      <section className="row_area common_width">
        <div className="img_wrapper">
          <img src={group23} alt="" />
        </div>
        <div className="presentation">
          <h1>Mobilize communities</h1>

          <p>
            Communities get a stake in companies that they support through benefits 
            and payouts depending on a tiered level token system. 
            Communities have personal incentive to help business thrive and succeed. 
          </p>
        </div>
      </section>

      <section className="row_area common_width right">
        <div className="presentation">
          <h1>Grow with the founders</h1>

          <p>
            Historically, margenalized communities have been excluded from invesdting in early stage companies.
            This creates new opportunity to build wealth by placing early bets on the success of founders the community trusts.
          </p>
        </div>
        <div className="img_wrapper">
          <img src={group25} alt="" />
        </div>
      </section>
      </div>
      <section className="join_wrapper">
        <div className="content_area common_width">
          <h1>Join our waitlist</h1>

          <div className="input_wrapper">
            <TextField
              variant="outlined"
              type="email"
              error={errors.email ? true : false}
              helperText={errors.email && errors.email.message}
              fullWidth={true}
              placeholder="example@gmail.com"
              inputRef={
                (register({
                  required: "Please enter your email",
                }),
                emailRefTwo)
              }
            />

            <button onClick={addToWaitListBottomForm}>Join waitlist</button>
          </div>
        </div>
      </section>

      <footer className="landing_footer">
        <div className="images_wrapper common_width">
          <img src={footer_img} alt="" />
        </div>
      </footer>
    </div>
  );
};
export default Landing;
