import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import helper from "../../../helpers/axiosHelper";
import { useSelector } from "react-redux";

const apiURL = helper.currencyURL();
const UpdateToken = ({ match }) => {

  var currentChainId = useSelector(state => state.userReducer.currentChainId);

  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });

  const [tokenType, setTokenType] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenDecimal, setTokenDecimal] = useState("");
  const [tokenImg, setTokenImg] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");

  const handleTokenType = (event) => {
    var selectedType = event.target.value;
    setTokenType(selectedType);
  };

  const onSubmit = () => {

    var formData = new FormData();

    formData.set("myImage", tokenImg)
    formData.append("tokenName", tokenName)
    formData.append("tokenAddress", tokenAddress)
    formData.append("tokenDecimal", tokenDecimal)
    formData.append("tokenSymbol", tokenSymbol)
    formData.append("id", match.params.id)

    const headers = {
      'content-type': 'multipart/form-data'
    };

    helper
      .postData("https://bakxlxiqwosd.pocketswap.org/api/currency/updatecurrency", formData, { headers })
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
  useEffect(() => {
    axios
      .get(
"https://bakxlxiqwosd.pocketswap.org/api/currency/getcurrency/"+
        match.params.id
      )
      .then((res) => {
        setTokenType(res.data.result.tokenType);
        setTokenName(res.data.result.tokenName);
        setTokenSymbol(res.data.result.tokenSymbol);
        setTokenAddress(res.data.result.tokenAddress);
        setTokenDecimal(res.data.result.tokenDecimal);
        setTokenImg(res.data.result.tokenImg);
      })
      .catch((err) => toast.error(err));
  }, []);
  return (
    <div className="updatetoken-container">
      <h5>Update Currency</h5>

      <br></br>
      <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
        <br></br>

        <div className="row">
          <div className="col-3">
            <label>Token Name:</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              name="tokenname"
              value={tokenName}
              className="form-control"
              placeholder="Token Name"
              onChange={(event) => setTokenName(event.target.value)}
              ref={register({
                required: "Token Name is required",
                pattern: {
                  value: /^[A-Za-z0-9]*$/,
                  message: "Only Characters",
                },
              })}
            />
            {errors.tokenname && (
              <div className="form-error">{errors.tokenname.message}.</div>
            )}
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-3">
            <label>Token Symbol:</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              value={tokenSymbol}
              className="form-control"
              placeholder="Token Symbol"
              name="tokensymbol"
              onChange={(event) => setTokenSymbol(event.target.value)}
              ref={register({
                required: "Token Symbol is required",
                pattern: {
                  value: /^[A-Za-z0-9]*$/,
                  message: "Only Characters",
                },
              })}
            />
            {errors.tokensymbol && (
              <div className="form-error">{errors.tokensymbol.message}.</div>
            )}
          </div>
        </div>

        <br></br>

        <div className="row">
          <div className="col-3">
            {" "}
            <label>Token Address:</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Token Address"
              value={tokenAddress}
              name="tokenaddress"
              onChange={(event) => setTokenAddress(event.target.value)}
              ref={register({
                required: "Token Address is required",
                pattern: {
                  value: /^0x[a-fA-F0-9]{40}$/,
                  message: "Only Characters",
                },
              })}
            />
            {errors.tokenaddress && (
              <div className="form-error">{errors.tokenaddress.message}.</div>
            )}
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-3">
            <label>Token Decimal:</label>
          </div>
          <div className="col-9">
            {" "}
            <input
              type="text"
              value={tokenDecimal}
              className="form-control"
              placeholder="Token Decimal"
              onChange={(event) => setTokenDecimal(event.target.value)}
              name="tokendecimal"
              ref={register({
                required: "Token Decimal is required",
                pattern: {
                  value: /^(0|[1-9][0-9]*)$/,
                  message: "Only Numbers",
                },
              })}
            />
            {errors.tokendecimal && (
              <div className="form-error">{errors.tokendecimal.message}.</div>
            )}
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-3"><label>Existing Image:</label></div>
          <div className="col-9"><img src={tokenImg} alt="Token Image" height="50px" width="50px" /></div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-3">
            <label>Choose Image:</label>
          </div>
          <div className="col-9">
            <input
              type="file"
              className="form-control"
              placeholder="ImageURL"
              onChange={(event) => setTokenImg(event.target.files[0])}
              name="imageurl"
              ref={register({
                required: "Image URL is required",
              })}
            />
            {errors.imageurl && (
              <div className="form-error">{errors.imageurl.message}.</div>
            )}
          </div>
        </div>

        <br></br>
        <br></br>

        <div align="center">
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </div>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default UpdateToken;
