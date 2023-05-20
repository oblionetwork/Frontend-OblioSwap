import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import helper from "src/helpers/axiosHelper";

const apiURL = helper.securityURL();

const ChangePassword = () => {
  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = () => {
    if(currentPassword && newPassword && confirmPassword){
    if(currentPassword !== newPassword){
    let postData = {
      currentpassword: currentPassword,
      newpassword: newPassword,
      confirmpassword: confirmPassword,
    };

    helper
      .postData("https://bakxlxiqwosd.pocketswap.org/api/securitysettings/changepassword", postData)
      .then((res) => {
        if (res.data.status == 200) {
          toast.success(res.data.message);
          reset();
          setCurrentPassword("");
          setNewPassword("");
          setConfirmPassword("");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err)
      });
    }
    else{
      toast.error("Old and New Password cannot be same")
    }
  }
  else{
    toast.error("Please fill all the fields")
  }
  };
  return (
    <div className="changepassword-container">
      <div className=" ">
        <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
          <h6>Change Password</h6>
          <input
            type="password"
            className="form-control"
            autoComplete="off"
            placeholder="Current Password"
            name="currentpassword"
            onChange={(event) => setCurrentPassword(event.target.value)}
            // ref={register({
            //   required: "Current Password is required",
            //   pattern: {
            //     value:
            //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            //     message:
            //       "Password must be atleast 8 characters long with One capital letter,One Special Character and One Number",
            //   },
            //   minLength: {
            //     value: 8,
            //     message: "Password must have at least 8 characters",
            //   },
            // })}
          />
          {/* {errors.currentpassword && (
            <div className="form-error">{errors.currentpassword.message}.</div>
          )} */}
          <br></br>
          <input
            type="password"
            className="form-control"
            placeholder="New Password"
            autoComplete="off"
            name="newpassword"
            onChange={(event) => setNewPassword(event.target.value)}
            // ref={register({
            //   required: "New Password is required",
            //   pattern: {
            //     value:
            //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            //     message:
            //       "Password must be atleast 8 characters long with One capital letter,One Special Character and One Number",
            //   },
            //   minLength: {
            //     value: 8,
            //     message: "Password must have at least 8 characters",
            //   },
            // })}
          />
          {/* {errors.newpassword && (
            <div className="form-error">{errors.newpassword.message}.</div>
          )} */}
          <br></br>

          <input
            type="password"
            className="form-control"
            autoComplete="off"

            placeholder="Confirm Password"
            name="confirmpassword"
            onChange={(event) => setConfirmPassword(event.target.value)}
            // ref={register({
            //   required: "Confirm Password is required",
            //   pattern: {
            //     value:
            //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            //     message:
            //       "Password must be atleast 8 characters long with One capital letter,One Special Character and One Number",
            //   },
            //   minLength: {
            //     value: 8,
            //     message: "Password must have at least 8 characters",
            //   },
            // })}
          />
          {/* {errors.confirmpassword && (
            <div className="form-error">{errors.confirmpassword.message}.</div>
          )} */}
          <br></br>
          <div align="center">
            <button className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
