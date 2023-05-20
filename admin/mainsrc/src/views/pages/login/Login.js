import { Link, useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import PatternLock from "react-pattern-lock";
import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import helper from "../../../helpers/axiosHelper";
import "./login.css";

const apiURL = helper.apiURL();

const Login = () => {
  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [path, setPath] = useState([]);
  const [success, setSuccess] = useState(false);
  let history = useHistory();
  const [tfastatus, setTfaStatus] = useState(false);

  useEffect(() => {


    axios
      .get(
        "https://bakxlxiqwosd.pocketswap.org/api/admin/getadmindetails"
      )
      .then((res) => {
        setTfaStatus(res.data.result.tfa_status);
      })
      .catch((err) => toast.error(err));
  }, []);

  const onChange = (path) => {
    setPath([...path]);
  };
  const onFinish = () => {
    setSuccess(true);
    setTimeout(() => {
      setPath([]);
      setSuccess(false);
    }, 5000);
  };

  const onSubmit = () => {


    var patharr = path.join();

    // let test = patharr.replace(/,/g, '')


    if (path.length > 0) {
      let adminPostData = {
        email: email,
        password: password,
        pattern: patharr,
      };

      helper
        .postData("https://bakxlxiqwosd.pocketswap.org/api/admin/login", adminPostData)
        .then((res) => {
          if (res.data.status == 200) {
            if (tfastatus == true) {
              history.push("/jCu0JyCbSxmkDnVbRFCQtg");
            } else {
              localStorage.setItem("auth", JSON.stringify(res.data));
              localStorage.setItem("id", res.data.id);
              toast.success(res.data.message);
              history.push("/32Ygwi0SI34xf9e0CnspEA");
            }
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          toast.error(err);
        });
    } else {
      toast.error("Please draw your pattern");
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4"  >
                <CCardBody >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="login-heading" style={{ color: "#13316f" }}
                    >Login</h1>
                    <p style={{ color: "#13316f" }}>Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        ref={register({
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Should match Email pattern",
                          },
                        })}
                        autoComplete="off"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        placeholder="UserEmail"
                      />
                      <br></br>
                    </CInputGroup>

                    {errors.email && (
                      <div className="form-error-login">
                        {errors.email.message}.
                      </div>
                    )}
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        // ref={register({
                        //   required: "Password is required",
                        //   pattern: {
                        //     value:
                        //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                        //     message:
                        //       "Password must be atleast 8 characters long with One capital letter,One Special Character and One Numeric",
                        //   },
                        //   minLength: {
                        //     value: 8,
                        //     message: "Password must have at least 8 characters",
                        //   },
                        // })}
                        autoComplete="off"
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="UserPassword"
                      />
                    </CInputGroup>
                    {errors.password && (
                      <div className="form-error-login">
                        {errors.password.message}.
                      </div>
                    )}

                    <div align="center">
                      {" "}
                      <PatternLock
                        height={180}
                        width={180}
                        size={3}
                        onChange={onChange}
                        path={path}
                        onFinish={onFinish}
                        connectorThickness={8}
                        success={success}
                      />
                    </div>

                    <CRow>
                      <CCol xs="12">
                        <button
                          type="submit"
                          style={{ background: "#13316f", color: "#fff" }}
                          className="btn  btn-block"
                        >
                          Login
                        </button>
                      </CCol>
                    </CRow>
                  </form>
                </CCardBody>
              </CCard>
              <CCard className="body-class" style={{ width: "44%" }}>
                <CCardBody className="text-center">
                  <div>
                    <h2 className="login-heading">Sign up</h2>
                    <p>Welcome to <b>XPocket</b> Admin Panel</p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
