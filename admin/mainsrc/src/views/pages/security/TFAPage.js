import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import helper from "src/helpers/axiosHelper";

const TFAPage = () => {
  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });
  let history = useHistory();
  const [sixDigitCode, setSixDigitCode] = useState(false);
  const securityURL = helper.securityURL()

  const onSubmit = () => {
    let data = {
      sixDigitCode: sixDigitCode,
    };
    axios
      .post(
        securityURL + "/verifyotp",
        data
      )
      .then((res) => {
        if (res.data.status == 200) {
          toast.success(res.data.message);
          localStorage.setItem("auth", JSON.stringify(res.data));
          localStorage.setItem("id", res.data.id);
          history.push("/32Ygwi0SI34xf9e0CnspEA");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err));
  };
  return (
    <div className="container mt-5">
      <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
        <h5>Two Factor Authentication</h5>
        <p>Enter time-based OTP</p>
        <p>Please Enter the OTP generated on your authenticator app</p>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your TFA Code"
          name="tfacode"
          autoComplete="off"
          onChange={(event) => setSixDigitCode(event.target.value)}
          ref={register({
            required: "TFA Code is required",
            pattern: {
              value: /^(\+\d{1,3}[- ]?)?\d{6}$/,
              message: "Only 6 Digits",
            },
          })}
        />
        {errors.tfacode && (
          <div className="form-error">{errors.tfacode.message}.</div>
        )}

        <br></br>
        <div align="center">
          <button className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }}>Proceed</button>
        </div>
      </form>
    </div>
  );
};

export default TFAPage;
