import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import helper from "src/helpers/axiosHelper";
import { toast } from "react-toastify";

const apiURL = helper.whiteURL();

const AddNewWhitelist = () => {
  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });
  const [ipAddress, setIpAddress] = useState();

  const onSubmit = () => {
    let ipAddData = {
      ipAddress: ipAddress,
    };
    helper
      .postData("https://bakxlxiqwosd.pocketswap.org/api/whitelist/addwhitelist", ipAddData)
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
    <div>
      <h5>Adding New Ip Whitelist</h5>
      <br></br>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter IP Address"
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
          name="whitelistip"
        />
        {errors.whitelistip && (
          <div className="form-error">{errors.whitelistip.message}.</div>
        )}
        <br></br>
        <div align="center">
          <button className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewWhitelist;
