import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { updateTfaData } from "src/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import helper from "src/helpers/axiosHelper";

const TFA = () => {
  const [qrcode, setQRCode] = useState("");
  const [secret, setSecret] = useState("");
  const [tfastatus, setTfaStatus] = useState(false);
  const [sixdigitcode, setSixDigitCode] = useState();

  const dispatch = useDispatch();
  const apiURL = helper.apiURL()

  const securityURL = helper.securityURL()

  const statusoftfa = useSelector(
    (state) => state.userReducer.updatestatus
  );

  useEffect(() => {
    axios
      .get(
        apiURL + "/getadmindetails"
      )
      .then((res) => {
        setQRCode(res.data.result.secretotpauthurl);
        setSecret(res.data.result.secreturl);
        setTfaStatus(res.data.result.tfa_status);
      })
      .catch((err) => toast.error(err));
  }, [statusoftfa]);
  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {
    let tfadata = {
      sixDigitCode: sixdigitcode,
      secretKey: secret,
      tfa_status: tfastatus,
    };
    helper.postData(securityURL + "/twofactorauth",tfadata)
      .then((res) => {

        if (res.data.status == 200) {
          toast.success(res.data.message);
          if (res.data.message === "TFA Enabled Successfully") {
            dispatch(updateTfaData(true));
          }
          else {
            dispatch(updateTfaData(false));
          }
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err));
  };

  return (
    <div className="tfa-container">
      <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <h6>TFA Settings</h6>

          {tfastatus === true ? (
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="6 Digit TFA Code"
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
            </div>
          ) : (
            <div>
              <img src={qrcode} alt="QR" />
              <br></br>
              <br></br>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Code"
                value={secret}
                autoComplete="off"
                readOnly
                name="secretcode"
                ref={register({
                  required: "Secret Code is required",
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: "Should Match with Pattern",
                  },
                })}
              />
              {errors.secretcode && (
                <div className="form-error">{errors.secretcode.message}.</div>
              )}
              <br></br>
              <input
                type="text"
                className="form-control"
                placeholder="6 Digit TFA Code"
                autoComplete="off"
                onChange={(event) => setSixDigitCode(event.target.value)}
                name="tfacode"
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
            </div>
          )}
          <br></br>
          <div align="center">
            <button className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }}>
              {tfastatus === false ? "Enable" : "Disable"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TFA;
