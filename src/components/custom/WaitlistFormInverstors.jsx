import React, { useState, useRef } from "react";
import ArrowLeft from "../../util/imageIcons/arrow-left.png";

import { useForm } from "react-hook-form";
import base from "../../api/base";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
const WaitlistForm = ({ setActive, buttonText, showNameField }) => {
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm();

  const fnameRef = useRef();
  const lnameRef = useRef();
  const fundnameRef = useRef();
  const websiteRef = useRef();
  const emailRef = useRef();

  const addToWaitList = (e) => {
    e.preventDefault();
    const fname = fnameRef.current.value;
    const lname = lnameRef.current.value;
    const fundname = fundnameRef.current.value;
    const website = websiteRef.current.value;
    const email = emailRef.current.value;
    base("Investors").create(
      [
        {
          fields: {
            "First name": fname,
            Email: email,
            "Last name": lname,
            "Fund name": fundname,
            website: website,
          },
        },
      ],
      function (err, record) {
        if (err) {
          setFormAlert({
            type: "error",
            message: err.message,
          });
          console.error(err);
          return;
        }
        setFormAlert({
          type: "success",
          message: record.getId() + "Added",
        });
        prompt(record.getId() + " Added");
      }
    );
  };

  return (
    <div className="form_wrapper" onSubmit={handleSubmit(addToWaitList)}>
      <h1>Join our waitlist</h1>
      <p>
        Please fill in the detils below so that we can get in contact with you
        about our product.
      </p>
      <form className="input_container">
        <div className="input_wrapper grid_2">
          <label htmlFor="fname">First Name</label>

          <TextField
            variant="outlined"
            type="text"
            error={errors.name ? true : false}
            helperText={errors.name && errors.name.message}
            fullWidth={true}
            inputRef={
              (register({
                required: "Please enter your name",
              }),
              fnameRef)
            }
          />
        </div>
        <div className="input_wrapper grid_2">
          <label htmlFor="lname">Last Name</label>

          <TextField
            variant="outlined"
            type="text"
            error={errors.email ? true : false}
            helperText={errors.email && errors.email.message}
            fullWidth={true}
            inputRef={
              (register({
                required: "Please enter your email",
              }),
              lnameRef)
            }
          />
        </div>
        <div className="input_wrapper grid_2">
          <label htmlFor="fname">Fund Name</label>
          <TextField
            variant="outlined"
            type="text"
            error={errors.email ? true : false}
            helperText={errors.email && errors.email.message}
            fullWidth={true}
            inputRef={
              (register({
                required: "Please enter your email",
              }),
              fundnameRef)
            }
          />
        </div>
        <div className="input_wrapper grid_2">
          <label htmlFor="cweb">Company website</label>
          <TextField
            variant="outlined"
            type="url"
            error={errors.email ? true : false}
            helperText={errors.email && errors.email.message}
            fullWidth={true}
            inputRef={
              (register({
                required: "Please enter your email",
              }),
              websiteRef)
            }
          />
        </div>
        <div className="input_wrapper grid_4">
          <label htmlFor="Email">Email</label>
          <TextField
            variant="outlined"
            type="email"
            error={errors.email ? true : false}
            helperText={errors.email && errors.email.message}
            fullWidth={true}
            inputRef={
              (register({
                required: "Please enter your email",
              }),
              emailRef)
            }
          />
        </div>
        <div onClick={(e) => setActive(false)}>
          <img src={ArrowLeft} alt="" />
        </div>
        <button className="grid_3 join_button" onClick={addToWaitList}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};
export default WaitlistForm;
