import React, { useState, useRef } from "react";
import icon1 from "./arrow.png";
// import db from "../util/firebase";
import "./FundRaising.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import SelectUSState from "react-select-us-states";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { firebaseApp } from "../util/firebase";
const db = getFirestore();
const FundRaising = () => {
  const [show, setShow] = useState();
  const [state, setState] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [company, setCompany] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [states, setCompstate] = useState("select state");
  const [radio, setRadio] = useState(false);
  // const [validate, setValidate] = useState({ msg: "" });
  const [questionaire, setQuestionaire] = useState(false);
  // const [showcomponent, setShowcomponent] = useState(false);
  const [inputcolor, setInputcolor] = useState("line");

  console.log("radioour", radio);
  console.log("questionaireq", questionaire);
  console.log(name);
  const history = useHistory();
  const changeWidth = (e) => {
    setState(1);
  };
  // const handleshowcomponent = (e) => {
  //   e.preventDefault();
  //   setShowcomponent(true);
  // };
  const createItemm = (data) => {
    return addDoc(collection(db, "Companyy"), {
      data,
    });
  };
  const showData = () => {
    if (radio === "radio1") {
      history.push("/Incorporate");
    }
    if (questionaire === "questionaireradio") {
      history.push("/Questionnaire");
    }
    // if (name === "" && email === "" && pass === "") {
    //   setInputcolor("line1");

    //   console.log("border color");
    // } else {
    //   console.log("border color not found");
    // }
    // {radio ? <Redirect to="/Incorporate" /> : null}
    console.log("called");
    console.log(show);
    const auth = getAuth(firebaseApp);

    if (show === undefined) {
      console.log(db);
      createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          const user = userCredential.user;

          console.log("authentication successfull");
          // alert("authentication successfull");
          setShow(0);
        })
        .catch((err) => {
          // alert(err.message);
          console.log(err);
        });
      console.log(show);
    }

    if (show === 0) {
      console.log("called gaon");
      console.log(name);
      if (
        name === "" ||
        email === "" ||
        pass === "" ||
        company === "" ||
        desc === "" ||
        url === "" ||
        states === "select state"
      ) {
        // alert("Plz Fill All Fields");
      } else if (
        name != "null" &&
        email != "" &&
        pass != "" &&
        company != "" &&
        desc != "" &&
        url != "" &&
        states != ""
      ) {
        console.log("else called for firebase");
        createItemm({
          CompanyName: company,
          CompanyDetails: desc,
          CompanyUrl: url,
          CompanyState: states,

          FounderDetails: {
            Name: name,
            Email: email,
            Password: pass,
          },
        })
          .then((response) => {
            alert("Products added Successfull👍");
            setShow(2);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
            alert(error.message);
          });
      }
    }
    if (name === "" && email === "" && pass === "") {
      setInputcolor("line1");

      console.log("border color set");
    } else if (name !== "" && email !== "" && pass !== "") {
      setInputcolor("line");
    }
  };
  const handleSelect = (e) => {
    console.log(e);
    setCompstate(e);
    // console.log(states);
  };
  // const ValidateHander = (e) => {
  //   e.preventDefault();
  //   if (name.trim() === "" || email.trim() === "" || pass.trim() === "")
  //     alert("required allfield");
  // };

  return (
    <div>
      {/* <form
        onSubmit={(e) => {
          ValidateHander(e);
        }}
      > */}
      <div className="mainFundRaisingContainer">
        {/* <div className="headerContainerFundRaising">
          <h1 className="headingFundRaising">pitchBLACK</h1>
        </div> */}

        <div className="paragraphsFundRaisingConatiner">
          <div>
            <p className="fundRaisingP1">
              Start fundraising for your
              <br /> company today!
            </p>
          </div>
          <div>
            <p className="fundRaisingP2">
              We can help you go from idea to fundable <br />
              company
            </p>
          </div>
        </div>

        <div
          class="mainCardContainerFundRaising"
          style={show === 0 ? { minHeight: "923px" } : null}>
          <div className="infoToGetStart">
            <p className="paragraphInfoToGetStart">
              Enter the information we need to get <br />
              started{" "}
            </p>
            <div>
              {" "}
              <input
                className="inputNameFundRaising  "
                type="text"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={inputcolor}> </div>
            <div>
              {" "}
              <input
                className="inputEmailToGetStart"
                type="text"
                placeholder="What's your email?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={inputcolor}> </div>
            <div>
              <input
                className="inputPasswordToGetStart"
                type="password"
                placeholder="What's password would you like to use?"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className={inputcolor}> </div>
          </div>
          {(show === 0 || show === 1) && (
            <div className="incorporateCompany">
              <p className="incorporateParagraph">
                <span className="asterisk">*</span>
                {""}Are you looking to incorporate your company
                <br />
                today?
              </p>
              <div className="radioDivIncorporate">
                {/* <Link to="/Incorporate"> */}
                <input
                  type="radio"
                  value="radio1"
                  name="radioIncorporate"
                  className="inputRadio"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                {/* </Link> */}
                <label className="labelIncorporate">
                  Yes, let's set up my company.
                </label>
              </div>
              <div className="radioDivIncorporate1">
                <input
                  type="radio"
                  name="radioIncorporate"
                  className="inputRadio"
                  onChange={changeWidth}
                  // onClick={handleshowcomponent}
                  value="radio2"
                  // onChange={(e) => {
                  //   setRadio(e.target.value);
                  // }}
                />

                <label className="labelIncorporate">
                  I would like to use an existing company I'd like to use
                  pitchBLACK for.
                </label>
              </div>
            </div>
          )}

          {state === 1 && (
            <div className="yourCompany">
              <p className="yourCompanyParagraph">
                Can you tell us about your company?
              </p>
              <div>
                {" "}
                <input
                  className="inputCompanyName"
                  type="text"
                  placeholder="What is the name of your company?"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="line"> </div>
              <div>
                {" "}
                <input
                  className="inputComapnyDesc"
                  type="text"
                  placeholder="Give us a short description of what your company does."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="line"> </div>

              <p className="companyStateP">
                <span className="asterisk">*</span> What state is your company
                registered in?
              </p>

              <div className="stateCompanyDiv">
                {" "}
                <SelectUSState
                  id="myId"
                  className="myClassName"
                  value={states}
                  onChange={handleSelect}
                />
              </div>

              <div>
                <input
                  className="inputUrl"
                  type="text"
                  placeholder="What is your company url?"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div className="lineEnd"> </div>

              <div>
                <p className="paragraphQuestionaire">
                  Next you will be taking a questionaire, to determine whether
                  your
                  <br /> company is ready to start fundraising on the pitchBLACK
                  platfrom.
                  <br />
                  The questionaire will take about 15-20 minutes to complete.
                </p>
              </div>
              <div>
                <p className="paragraphAreReady">
                  <span className="asterisk">*</span> Are you ready to take the
                  questionaire now?
                </p>
              </div>
              <div className="radioButton">
                <input
                  type="radio"
                  value="questionaireradio"
                  name="radioIncorporate"
                  className="inputRadio"
                  onChange={(e) => {
                    setQuestionaire(e.target.value);
                  }}
                />

                <label className="labelIncorporate">Yes, let's do it.</label>
              </div>
              <div>
                <input
                  id="inputID"
                  type="radio"
                  value=""
                  name="radioIncorporate"
                  className="inputRadio"
                />

                <label className="labelIncorporate" id="lableID">
                  No, I'll finish later.
                </label>
              </div>

              <div className="paddingDiv"></div>
            </div>
          )}
          <div className="btnMainContinue">
            <button
              className="btnContinue"
              type="submit"
              onClick={() => showData()}>
              Continue
            </button>

            <span>
              <img className="icon-img" src={icon1} alt="" />
            </span>
          </div>
        </div>
        <div className="bottomFundRaising"></div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default FundRaising;
