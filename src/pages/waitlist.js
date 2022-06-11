import React, { useState } from "react";
import Header from "../components/custom/Header";
import WaitlistForm from "../components/custom/WaitlistForm";
import WaitlistFormInverstors from "../components/custom/WaitlistFormInverstors";
import WaitlistFormSelection from "../components/custom/WaitlistFormSelection";
import Meta from "./../components/Meta";
import "../styles/waitlist.css";
function WaitList(props) {
  const [active, setActive] = useState(false);
  const [selectionType, setSelectionType] = useState(null);
  return (
    <>
      <Meta title="Contact" />

      {/* custom code  */}

      <div className={`waitlist_wrapper ${active == true && "active"}`}>
        <div className="content">
          <Header need_nav="no" />
          <div className="flex_wrapper">
            <div className="first_class">
              <WaitlistFormSelection
                setActive={setActive}
                setSelectionType={setSelectionType}
              />
            </div>
            <div className="second_class">
              {selectionType == "founder" && (
                <WaitlistForm
                  setActive={setActive}
                  showNameField={true}
                  buttonText="Join our waitlist"
                />
              )}
              {selectionType == "investor" && (
                <WaitlistFormInverstors
                  setActive={setActive}
                  showNameField={true}
                  buttonText="Join our waitlist"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WaitList;
