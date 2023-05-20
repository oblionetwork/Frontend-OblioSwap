import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import helper from "src/helpers/axiosHelper";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";
import { admin_address, smartChef } from "../Addresses/Address";
const Web3 = require("web3");

const apiURL = helper.poolURL();

const AddPool = () => {
  
  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });
  const [fromTokenSymbol, setFromTokenSymbol] = useState("");
  const [fromTokenImg, setFromTokenImg] = useState("");
  const [APR, setAPR] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [pairId, setPairId] = useState("");
  const [fromDecimal, setFromDecimal] = useState("");
  const [rewardToken, setRewardToken] = useState("");
  const [address, setAddress] = useState("");
  const [allocationPoint, setAllocationPoint] = useState("");
  const [active, setActive] = useState(true);
  let [color, setColor] = useState("#0d6efd");

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    z-index: 5;
  `;

  useEffect(async () => {
    connectMetaMask();
  }, [address]);



  var accounts = window.ethereum.enable();
  window.ethereum.on('accountsChanged', function (accounts) {
    connectMetaMask();

  })

  const connectMetaMask = async () => {
    setActive(true);

    if (typeof window.ethereum !== "undefined") {
      var web3 = new Web3(window.ethereum);

      try {
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        if (accounts[0] === admin_address) {
          setAddress(accounts[0]);
          setActive(false);
        }
        const balance = await web3.eth.getBalance(accounts[0]);
        window.web3 = await new Web3(window.ethereum);

        return true;
      } catch (e) {
        // toast.error(e.message)
      }
    } else {
      toast.error("Please Connect Metamask");
    }
  }

  const apiCall = () => {
    let addPoolData = {
      fromTokenSymbol: fromTokenSymbol,
      fromTokenImg: fromTokenImg,
      APR: APR,
      fromAddress: fromAddress,
      pairId: pairId,
      fromDecimal: fromDecimal,
      rewardToken: rewardToken,
      allocationPoint: allocationPoint,
    };

    axios
      .post(apiURL + "/addpool", addPoolData)
      .then((res) => {
        if (res.data.status == 200) {
          toast.success(res.data.message);
          reset();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err));
  };
  const onSubmit = () => {

  };
  return (
    <div className="pool-container">
      <LoadingOverlay
        active={active}
        spinner={<FadeLoader color={color} css={override} size={150} />}
        text="Please Connect Admin Address..."
      >
        <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
          <h5>Add Pool</h5>
          <br></br>
          <div className="row">
            <div className="col-3">
              <label> Token Symbol:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                placeholder=" Token Symbol"
                name="fromtokensymbol"
                onChange={(event) => {
                  setFromTokenSymbol(event.target.value);
                }}
                ref={register({
                  required: " Token Symbol is required",
                  pattern: {
                    value: /^[A-Za-z0-9]*$/,
                    message: "Only Characters",
                  },
                })}
              />
              {errors.fromtokensymbol && (
                <div className="form-error">
                  {errors.fromtokensymbol.message}.
                </div>
              )}
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col-3">
              <label> Token Image:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                placeholder=" Token Image"
                name="fromtokenimage"
                onChange={(event) => setFromTokenImg(event.target.value)}
                ref={register({
                  required: " Token Image is required",
                })}
              />
              {errors.fromtokenimage && (
                <div className="form-error">
                  {errors.fromtokenimage.message}.
                </div>
              )}
            </div>

            <br></br>
            <br></br>
            <br></br>
          </div>

          <div className="row">
            <div className="col-3">APR (%)</div>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="APR Fee"
                name="aprfee"
                autoComplete="off"
                onChange={(event) => setAPR(event.target.value)}
                ref={register({
                  required: "APR Fee is required",
                  pattern: {
                    value: /^\d{0,3}(\.(?=\d)\d){0,1}$/,
                    message: "Only Numerics",
                  },
                })}
              />
              {errors.aprfee && (
                <div className="form-error">{errors.aprfee.message}.</div>
              )}
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-3"> Token Address:</div>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                placeholder=" Address"
                onChange={(event) => setFromAddress(event.target.value)}
                name="fromaddress"
                ref={register({
                  required: "Token Address is required",
                  pattern: {
                    value: /^[A-Za-z0-9]*$/,
                    message: "Only Characters",
                  },
                })}
              />
              {errors.fromaddress && (
                <div className="form-error">{errors.fromaddress.message}.</div>
              )}
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col-3">
              <label>Pair Id:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                value={pairId}
                readOnly
                autoComplete="off"
                className="form-control"
                placeholder="Pair ID"
                onChange={(event) => setPairId(event.target.value)}
                name="pairid"
                ref={register({
                  required: "Pair Id is required",
                  pattern: {
                    value: /^[A-Za-z0-9]*$/,
                    message: "Only Characters",
                  },
                })}
              />
              {errors.pairid && (
                <div className="form-error">{errors.pairid.message}.</div>
              )}
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col-3">Token Decimal:</div>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                placeholder=" Decimal"
                name="fromdecimal"
                onChange={(event) => setFromDecimal(event.target.value)}
                ref={register({
                  required: " Token Decimal is required",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only Numerics",
                  },
                })}
              />
              {errors.fromdecimal && (
                <div className="form-error">{errors.fromdecimal.message}.</div>
              )}
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col-3">
              <label>Reward Token:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                placeholder="Reward Token"
                onChange={(event) => setRewardToken(event.target.value)}
                name="rewardtoken"
                ref={register({
                  required: "Reward Token is required",
                  pattern: {
                    value: /^[A-Za-z0-9]*$/,
                    message: "Only Numerics",
                  },
                })}
              />
              {errors.rewardtoken && (
                <div className="form-error">{errors.rewardtoken.message}.</div>
              )}
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col-3">
              <label>Allocation Point:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                placeholder="Allocation Point"
                name="allocpoint"
                onChange={(event) => setAllocationPoint(event.target.value)}
                ref={register({
                  required: "Allocation Point required",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only Numerics",
                  },
                })}
              />
              {errors.allocpoint && (
                <div className="form-error">{errors.allocpoint.message}.</div>
              )}
            </div>
          </div>
          <br></br>
          <div align="center">
            <button className="btn" style={{ background: "#680e9c", color: "white", border: "2px solid #994ac0" }} type="submit">
              Submit
            </button>
          </div>
        </form>
      </LoadingOverlay>
    </div>
  );
};

export default AddPool;
