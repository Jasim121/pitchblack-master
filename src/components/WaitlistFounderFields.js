import React, { useState, useRef } from "react";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useForm } from "react-hook-form";
import base from "../api/base";

function WaitlistFounderFields(props) {
    const [pending, setPending] = useState(false);
    const [formAlert, setFormAlert] = useState(null);
    const { handleSubmit, register, errors, reset } = useForm();

    const fnameRef = useRef();
    const lnameRef = useRef();
    const companynameRef = useRef();
    const companyurlRef = useRef();
    const emailRef = useRef();

    const addToWaitList = (e) => {
      e.preventDefault()
      const fname = fnameRef.current.value;
      const lname = lnameRef.current.value;
      const companyname = companynameRef.current.value;
      const companyurl = companyurlRef.current.value;
      const email = emailRef.current.value;
      base("Founders").create(
        [
          {
            "fields": {
              "First name": fname,
              "Email": email,
              "Last name": lname,
              "Company name": companyname,
              "Company website": companyurl
            }
          },
        ], function (err, record) {
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
          prompt(record.getId() + " Added")
        }
      )
    };

  return (
    <>
      {formAlert && (
        <Box mb={3}>
          <Alert severity={formAlert.type}>{formAlert.message}</Alert>
        </Box>
      )}

      <form onSubmit={handleSubmit(addToWaitList)}>
        <Grid container={true} spacing={2}>
          {props.showNameField && (
            <Grid item={true} xs={12} md={6}>
              <TextField
                variant="outlined"
                type="text"
                label="First Name"
                error={errors.name ? true : false}
                helperText={errors.name && errors.name.message}
                fullWidth={true}
                inputRef={register({
                  required: "Please enter your name",
                }), fnameRef }
              />
            </Grid>
          )}

          <Grid item={true} xs={12} md={props.showNameField ? 6 : 12}>
            <TextField
              variant="outlined"
              type="text"
              label="Last Name"
              error={errors.email ? true : false}
              helperText={errors.email && errors.email.message}
              fullWidth={true}
              inputRef={register({
                required: "Please enter your email",
              }), lnameRef}
            />
          </Grid>

          <Grid item={true} xs={12} md={props.showNameField ? 6 : 12}>
            <TextField
              variant="outlined"
              type="text"
              label="Company Name"
              error={errors.email ? true : false}
              helperText={errors.email && errors.email.message}
              fullWidth={true}
              inputRef={register({
                required: "Please enter your email",
              }), companynameRef}
            />
          </Grid>

          <Grid item={true} xs={12} md={props.showNameField ? 6 : 12}>
            <TextField
              variant="outlined"
              type="url"
              label="Company Url"
              error={errors.email ? true : false}
              helperText={errors.email && errors.email.message}
              fullWidth={true}
              inputRef={register({
                required: "Please enter your email",
              }), companyurlRef}
            />
          </Grid>

          <Grid item={true} xs={12}>
            <TextField
              variant="outlined"
              type="email"
              label="Email"
              error={errors.email ? true : false}
              helperText={errors.email && errors.email.message}
              fullWidth={true}
              inputRef={register({
                required: "Please enter your email",
              }), emailRef}
            />
          </Grid>
          
          <Grid container alignItems="center" justifyContent="center" xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              onClick={addToWaitList}
            >
              {<span>{props.buttonText}</span>}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default WaitlistFounderFields;
