import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import helper from "src/helpers/axiosHelper";
import { toast } from "react-toastify";
import "./farmingPair.css";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";
import { collar_address, admin_address } from "../Addresses/Address";
import collar_stake_ABI from "../../../Abi/collar_stake.json"
import { enableLoader, loaderText } from "../../../Actions/Actions";
import { useDispatch, useSelector } from "react-redux";


const Web3 = require("web3");
const apiURL = helper.stakeURL();

const AddFarmingPair = () => {
  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });
  const [fromTokenSymbol, setFromTokenSymbol] = useState("");
  const [fromTokenImg, setFromTokenImg] = useState("");
  const [toTokenSymbol, setToTokenSymbol] = useState("");
  const [toTokenImg, setToTokenImg] = useState("");
  const [APR, setAPR] = useState("");
  const [pairInfo, setPairInfo] = useState("");
  const [pairAddress, setPairAddress] = useState("");
  const [pairId, setPairId] = useState("");
  const [allocationPoint, setAllocationPoint] = useState("");
  const [address, setAddress] = useState("");
  const [active, setActive] = useState(false);
  let [color, setColor] = useState("#0d6efd");
  const dispatch = useDispatch()

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    z-index: 5;
  `;


  useEffect(async () => {
    new Promise((resolve, reject) => {
      var web3 = new Web3(window.ethereum);
      const collar_stake_contract = new web3.eth.Contract(collar_stake_ABI, collar_address);

      collar_stake_contract.methods.currentPool().call().then((currentPool) => {
        setPairId(currentPool)
        resolve(currentPool)
      })
        .catch((err) => {

        })
    })

  }, [])

  useEffect(async () => {
    connectMetaMask();
  }, [address]);

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
        console.error(e.message)
        return false;
      }
    } else {
      toast.error("Please Connect Metamask");
    }
  }



  var accounts = window.ethereum.enable();
  window.ethereum.on('accountsChanged', function (accounts) {
    connectMetaMask();
  })

  const apiCall = () => {
    let StakePostData = {
      pair: fromTokenSymbol + "_" + toTokenSymbol,
      fromTokenSymbol: fromTokenSymbol,
      fromTokenImg: fromTokenImg,
      toTokenSymbol: toTokenSymbol,
      toTokenImg: toTokenImg,
      APR: APR,
      pairInfo: pairInfo,
      pairAddress: pairAddress,
      pairId: pairId,
      allocationPoint: allocationPoint,
      stakeStatus: "Live"
    };
    helper
      .postData(apiURL + "/addstake", StakePostData)
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

  const onSubmit = async () => {
    dispatch(enableLoader(true))
    dispatch(loaderText("Loading...."))
    var apr = APR * Math.pow(10, 18)
    var web3 = new Web3(window.ethereum);
    const collar_stake_contract = await new web3.eth.Contract(
      collar_stake_ABI,
      collar_address
    );

    collar_stake_contract.methods.poolCreation(pairAddress, apr.toString())
      .send({ from: address })
      .on("receipt", (hash) => {
        apiCall();
      })
      .on("error", (error) => {
        dispatch(enableLoader(false))

        toast.error(error);
      });
  };

  return (
    <div className="add-farming-container">
      <LoadingOverlay
        active={active}
        spinner={<FadeLoader color={color} css={override} size={150} />}
        text="Please Connect Admin Address..."
      >
        <h5>Add Farm LP Staking</h5>
        <br></br>
        <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-3">
              <label>From Token Symbol:</label>
            </div>
            <div className="col-9">
              <input
                className="form-control"
                placeholder="From Token Symbol"
                autoComplete="off"
                onChange={(event) => setFromTokenSymbol(event.target.value)}
                name="fromtokensym"
                ref={register({
                  required: "From Token Symbol is required",
                  pattern: {
                    value: /^[A-Za-z0-9]*$/,
                    message: "Only Characters",
                  },
                })}
              ></input>
              {errors.fromtokensym && (
                <div className="form-error">{errors.fromtokensym.message}.</div>
              )}
            </div>
            <br></br>
            <br></br>
            <div className="col-3">
              <label>From Token Img:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                placeholder="From Token Image "
                name="fromtokenimg"
                onChange={(event) => setFromTokenImg(event.target.value)}
                ref={register({
                  required: "From Token Img is required",
                })}
              />
              {errors.fromtokenimg && (
                <div className="form-error">{errors.fromtokenimg.message}.</div>
              )}
            </div>
            <br></br>
            <br></br>
            <div className="col-3">
              <label>To Token Symbol:</label>
            </div>
            <div className="col-9">
              <input
                className="form-control"
                placeholder="To Token Symbol"
                autoComplete="off"
                onChange={(event) => setToTokenSymbol(event.target.value)}
                name="totokensym"
                ref={register({
                  required: "To Token Symbol is required",
                  pattern: {
                    value: /^[A-Za-z0-9]*$/,
                    message: "Only Characters",
                  },
                })}
              ></input>
              {errors.totokensym && (
                <div className="form-error">{errors.totokensym.message}.</div>
              )}
            </div>
            <br></br> <br></br>
            <div className="col-3">
              <label>To Token Img:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="To Token Image"
                autoComplete="off"
                name="totokenimg"
                onChange={(event) => setToTokenImg(event.target.value)}
                ref={register({
                  required: "To Token Img is required",
                })}
              />
              {errors.totokenimg && (
                <div className="form-error">{errors.totokenimg.message}.</div>
              )}
            </div>
            <br></br>
            <br></br>
            <div className="col-3">
              <label>APR (%):</label>
            </div>
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
            <br></br>
            <br></br>
            <div className="col-3">
              <label>Pair Info:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                placeholder="Pair Info URL"
                name="pairinfo"
                onChange={(event) => setPairInfo(event.target.value)}
                ref={register({
                  required: "Pair Info URL is required",
                })}
              />
              {errors.pairinfo && (
                <div className="form-error">{errors.pairinfo.message}.</div>
              )}
            </div>
            <br></br>
            <br></br>
            <div className="col-3">
              <label>Pair Address:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                placeholder="Pair Address"
                name="pairaddress"
                onChange={(event) => setPairAddress(event.target.value)}
                ref={register({
                  required: "Pair Address is required",
                  pattern: {
                    value: /^[A-Za-z0-9]*$/,
                    message: "Only Characters",
                  },
                })}
              />
              {errors.pairaddress && (
                <div className="form-error">{errors.pairaddress.message}.</div>
              )}
            </div>
            <br></br>
            <br></br>
            <div className="col-3">
              <label>Pair ID:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Pair ID"
                readOnly
                name="pairid"
                value={pairId}
                onChange={(event) => setPairId(event.target.value)}
                ref={register({
                  required: "Pair ID is required",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only Numerics",
                  },
                })}
              />
              {errors.pairid && (
                <div className="form-error">{errors.pairid.message}.</div>
              )}
            </div>
            <br></br>
            <br></br>
            <div className="col-3">
              <label>Allocation Point:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                placeholder="Allocation Point"
                name="allocationpoint"
                onChange={(event) => setAllocationPoint(event.target.value)}
                ref={register({
                  required: "Allocation Point is required",
                  pattern: {
                    value: /^\d{0,3}(\.(?=\d)\d){0,1}$/,
                    message: "Only Numbers",
                  },
                })}
              />
              {errors.allocationpoint && (
                <div className="form-error">
                  {errors.allocationpoint.message}.
                </div>
              )}
            </div>
            <br></br>

            <br></br>       <br></br>
            <br></br>

            <br></br>
            <div align="center">
              <button className="btn" style={{ background: "#680e9c", color: "white", border: "2px solid #994ac0" }}>Submit</button>
            </div>
            <br></br>

          </div>
        </form>
      </LoadingOverlay>
    </div>
  );
};

export default AddFarmingPair;
