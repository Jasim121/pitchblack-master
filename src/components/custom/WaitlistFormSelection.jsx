import React from "react";

const WaitlistFormSelection = ({ setActive, setSelectionType }) => {
  return (
    <div className="WaitlistFormSelection">
      <h1>Join our waitlist</h1>
      <p>How do you want to join us?</p>
      <div className="cards_wrapper">
        <div
          className="card"
          onClick={(e) => {
            setSelectionType("investor");
            setActive(true);
          }}
        >
          <h1>Investor</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div
          className="card"
          onClick={(e) => {
            setSelectionType("founder");
            setActive(true);
          }}
        >
          <h1>Founder</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
      </div>
    </div>
  );
};
export default WaitlistFormSelection;
