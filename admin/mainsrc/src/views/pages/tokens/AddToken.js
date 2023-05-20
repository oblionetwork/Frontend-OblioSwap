import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import helper from "../../../helpers/axiosHelper";
import { useSelector } from "react-redux";

import approve_abi from "../../../Abi/approve_abi"

const apiURL = helper.currencyURL();


const Web3 = require("web3");
const web3 = new Web3(window.ethereum);


const AddToken = () => {

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

  const valueChange = (data) => {
    let test = web3.utils.isAddress(data)

    if (test) {
      var contract = new web3.eth.Contract(approve_abi, data.toString())

      contract.methods.name().call().then((nam) => {
        setTokenName(nam)
        contract.methods.symbol().call().then((sym) => {
          setTokenSymbol(sym)
          contract.methods.decimals().call().then((deci) => {
            setTokenDecimal(deci)


          })
        })
      })
    }
    else {
      setTokenName("")
      setTokenSymbol("")
      setTokenDecimal("")
    }

  }

  const onSubmit = () => {

    if (tokenImg && tokenName && tokenAddress && tokenDecimal && tokenDecimal) {

      var formData = new FormData();

      formData.set("myImage", tokenImg);
      formData.append("tokenName", tokenName)
      formData.append("tokenAddress", tokenAddress)
      formData.append("tokenDecimal", tokenDecimal)
      formData.append("tokenSymbol", tokenSymbol)

      const headers = {
        'content-type': 'multipart/form-data'
      };

      helper
        .postData("https://bakxlxiqwosd.pocketswap.org/api/currency/addcurrency", formData, { headers })
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
    }
    else {
      toast.error("Please Fill All Necessary Fields")
    }
  };
  return (
    <div className="add-token-container">
      <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
        <h5>Add Token</h5>
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
              autoComplete="off"
              name="tokenaddress"
              onChange={(event) => { setTokenAddress(event.target.value); valueChange(event.target.value) }}
              ref={register({
                required: "Token Address is required",
                // pattern: {
                //   value: /^0x[a-fA-F0-9]{40}$/,
                //   message: "Only Characters",
                // },
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
            <label>Token Name:</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              name="tokenname"
              autoComplete="off"
              className="form-control"
              value={tokenName}
              readonly
            // placeholder="Token Name"
            // onChange={(event) => setTokenName(event.target.value)}
            // ref={register({
            //   required: "Token Name is required",
            //   pattern: {
            //     value: /^[A-Za-z0-9]*$/,
            //     message: "Only Characters",
            //   },
            // })}
            />
            {/* {errors.tokenname && (
              <div className="form-error">{errors.tokenname.message}.</div>
            )} */}
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
              className="form-control"
              autoComplete="off"
              // placeholder="Token Symbol"
              value={tokenSymbol}
              name="tokensymbol"
              readonly
            // onChange={(event) => setTokenSymbol(event.target.value)}
            // ref={register({
            //   required: "Token Symbol is required",
            //   pattern: {
            //     value: /^[a-zA-Z ]*$/,
            //     message: "Only Characters",
            //   },
            // })}
            />
            {/* {errors.tokensymbol && (
              <div className="form-error">{errors.tokensymbol.message}.</div>
            )} */}
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
              className="form-control"
              value={tokenDecimal}
              //  placeholder="Token Decimal"
              autoComplete="off"
              readonly
            // onChange={(event) => setTokenDecimal(event.target.value)}
            // name="tokendecimal"
            // ref={register({
            //   required: "Token Decimal is required",
            //   pattern: {
            //     value: /^(0|[1-9][0-9]*)$/,
            //     message: "Only Numbers",
            //   },
            // })}
            />
            {/* {errors.tokendecimal && (
              <div className="form-error">{errors.tokendecimal.message}.</div>
            )} */}
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-3">
            <label>Choose File:</label>
          </div>
          <div className="col-9">
            <input
              type="file"
              className="form-control"
              placeholder="ImageURL"
              onChange={(event) => setTokenImg(event.target.files[0])}
              name="imageurl"
              ref={register({
                required: "Token Image is required",
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
          <button className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }} type="submit">
            Submit
          </button>
        </div>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default AddToken;
