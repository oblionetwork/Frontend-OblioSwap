import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import helper from "src/helpers/axiosHelper";
import { toast } from "react-toastify";

const apiURL = helper.blockURL();

const AddNewBlocklist = () => {

  const [ipAddress, setIpAddress] = useState();

  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {
    let ipAddData = {
      ipAddress: ipAddress,
    };
    helper
      .postData("https://bakxlxiqwosd.pocketswap.org/api/blocklist/addblocklist", ipAddData)
      .then((res) => {
        if (res.data.status == 200) {
          toast.success(res.data.message);
          reset();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div className="addblocklist-container">
      <h5> Add New Block List</h5>
      <br></br>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Ip address"
          onChange={(event) => setIpAddress(event.target.value)}
          ref={register({
            required: "IP address is required",
            pattern: {
              value:
                /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
              message: "Should match IP pattern",
            },
          })}
          autoComplete="off"
          name="blockip"
        />
        {errors.blockip && (
          <div className="form-error">{errors.blockip.message}.</div>
        )}
        <br></br>
        <div align="center">
          <button className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewBlocklist;
