import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import helper from "src/helpers/axiosHelper";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";
import { admin_address, router_address, liquidity_address } from "../Addresses/Address";
import RouterABI from "../../../Abi/router_contract.json"
import ApproveABI from "../../../Abi/approve_abi.json"
import LiquidityABI from "../../../Abi/liqudity_abi.json"
import ClipLoader from "react-spinners/ClipLoader";
import { enableLoader, loaderText } from "../../../Actions/Actions";
import { useDispatch, useSelector } from "react-redux";

const Web3 = require("web3");
const web3 = new Web3(window.ethereum);
const apiURL = helper.pairsURL();
const currencyURL = helper.currencyURL()

const AddPairs = () => {

  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });
  const [listCurrencies, setListCurrencies] = useState([]);
  const [listCurrenciesTwo, setListCurrenciesTwo] = useState([]);
  const [selectedToken, setSelectedToken] = useState("");
  const [selectedOppToken, setSelectedOppToken] = useState("");
  const [tokenAAddress, setTokenAAddress] = useState("0x8cA9D2772CCB6b13574244A81A27FeeB1aBCF59F");
  const [tokenBAddress, setTokenBAddress] = useState("0xa36085F69e2889c224210F603D836748e7dC0088");
  const [tokenAAmount, setTokenAAmount] = useState("");
  const [tokenBAmount, setTokenBAmount] = useState("");
  const [address, setAddress] = useState("");
  const [active, setActive] = useState(false);

  const [message, setMessage] = useState("Please Connect Metamask")
  const dispatch = useDispatch()

  let [color, setColor] = useState("#0d6efd");
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    z-index: 5;
  `;

  var time = Math.floor(Date.now() / 1000);
  var time1 = 50;
  var dead_time = time1 > 0 ? time1 * 60000 : 1 * 60000;
  dead_time = parseInt(dead_time);
  var deadline = (time + dead_time).toString();
  useEffect(() => {
    connectMetaMask();
  }, [address]);

  useEffect(() => {
    axios
      .get("https://bakxlxiqwosd.pocketswap.org/api/currency/listallcurrency")
      .then((res) => {
        setListCurrencies(res.data.result);
        setSelectedToken(res.data.result[0].tokenName);
        let default_token = res.data.result[0].tokenName;
        let filtered = res.data.result.filter(
          (temp) => temp.tokenName != default_token
        );
        setListCurrenciesTwo(filtered);
      })
      .catch((err) => toast.error(err));
  }, []);

  const apiCall = () => {
    let addPairData = {
      tokenA: selectedToken,
      tokenB: selectedOppToken,
      tokenAAddress: tokenAAddress,
      tokenBAddress: tokenBAddress,
      tokenAAmount: tokenAAmount,
      tokenBAmount: tokenBAmount,
    };
    helper
      .postData(apiURL + "/addpair", addPairData)
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

  const connectMetaMask = async () => {
    setActive(true);
    setMessage("Please Connect Metamask")
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
        toast.error(e.message);
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




  const handleToken = (event) => {
    var selectedtoken = event.target.value;
    setSelectedToken(selectedtoken);

    // let filtered = listCurrencies.filter(
    //   (temp) => temp.tokenName != event.target.value
    // );
    listCurrencies.map((dat) => {
      if (dat.tokenName === event.target.value) {

        setTokenAAddress(dat.tokenAddress)
      }

    })
    // setListCurrenciesTwo(filtered);
  };
  useEffect(() => {
    if (selectedOppToken === selectedToken) {
      setSelectedToken("Xpocket")
      setSelectedOppToken("Link")
      setTokenAAddress("0x8cA9D2772CCB6b13574244A81A27FeeB1aBCF59F")
      setTokenBAddress("0xa36085F69e2889c224210F603D836748e7dC0088")
    }

  }, [selectedOppToken, selectedToken])

  const handleOppositeToken = (event) => {
    var selectedopptoken = event.target.value;
    setSelectedOppToken(selectedopptoken);
    listCurrencies.map((dat) => {
      if (dat.tokenName === event.target.value) {

        setTokenBAddress(dat.tokenAddress)
      }
    })
  };

  const onSumit = async () => {
    dispatch(enableLoader(true))
    dispatch(loaderText("Loading......"))
    let pancakeRouter = new window.web3.eth.Contract(
      RouterABI,
      router_address
    );

    let LiquidityRouter = new window.web3.eth.Contract(ApproveABI, tokenAAddress);

    let LiquidityRouterTwo = new window.web3.eth.Contract(
      ApproveABI,
      tokenBAddress
    );

    if (selectedToken == "ETH" || selectedOppToken == "ETH") {

      let aAmount = parseFloat(tokenAAmount) * Math.pow(10, 18);
      let bAmount = parseFloat(tokenBAmount) * Math.pow(10, 18);
      dispatch(loaderText("waiting for Token Approval......"))

      LiquidityRouter.methods
        .approve(
          router_address, //pancake's cntrct address
          aAmount.toString() //approve amount
        )
        .send({ from: address })
        .on("receipt", (hash) => {

          dispatch(loaderText("Adding Liquidity...."))

          pancakeRouter.methods
            .addLiquidityETH(
              tokenAAddress, //abc token addresss
              bAmount.toString(), //equal to approve amount or lesser
              0,
              0,
              address, //user address
              deadline
            )
            .send({ from: address, value: bAmount.toString() }) //0.1 BNB
            .on("receipt", (hash) => {
              apiCall();
            })
            .on("error", (error) => {
              dispatch(enableLoader(false))
              toast.error(error);
            });
        })
        .on("error", (error) => {
          dispatch(enableLoader(false))
          toast.error(error);
        });
    } else {
      let aAmount = parseFloat(tokenAAmount) * Math.pow(10, 18);
      let bAmount = parseFloat(tokenBAmount) * Math.pow(10, 18);
      dispatch(enableLoader(true))
      dispatch(loaderText("Waiting for A Token Approval......"))
      await new Promise((reso, rej) => {
        LiquidityRouter.methods
          .approve(router_address, aAmount.toString())
          .send({ from: address })
          .on("receipt", (hash) => {
            reso(true);
          })
          .on("error", (error) => {
            dispatch(enableLoader(false))
            toast.error(error);
          });
      });

      dispatch(loaderText("Waiting for B Token Approval......"))

      await new Promise((reso, rej) => {
        LiquidityRouterTwo.methods
          .approve(router_address, bAmount.toString())
          .send({ from: address })
          .on("receipt", (ftx) => {
            reso(true);
          })
          .on("error", (error) => {
            dispatch(enableLoader(false))
            toast.error(error);
          });
      });

      dispatch(loaderText("Adding Liquidity...."))


      pancakeRouter.methods
        .addLiquidity(
          tokenAAddress, //token a
          tokenBAddress, //token b
          aAmount.toString(),
          bAmount.toString(),
          0,
          0,
          address,
          deadline
        )
        .send({ from: address })
        .on("receipt", (hash) => {
          apiCall();
        })
        .on("error", (error) => {
          toast.error(error);
        });
    }
  };


  var Contract_Liquidity = new web3.eth.Contract(LiquidityABI, liquidity_address)
  var approve_fn1 = new web3.eth.Contract(ApproveABI, tokenAAddress);
  var approve_fn2 = new web3.eth.Contract(ApproveABI, tokenBAddress);

  var from_amount = tokenAAmount
  var to_amount = tokenBAmount


  const onSubmit = () => {
    let a = web3.utils.isAddress(tokenAAddress);
    let b = web3.utils.isAddress(tokenBAddress)

    if (a && b) {
      approve_fn1.methods.decimals().call()
        .then((deci1) => {


          approve_fn2.methods.decimals().call()
            .then((deci2) => {
              setActive(true);
              setMessage("Loading...")


              to_amount = amountConvert(to_amount, deci1);
              from_amount = amountConvert(from_amount, deci2);


              approve_fn1.methods.approve(liquidity_address, from_amount)
                .send({ from: address })
                .on("receipt", (hash) => {
                  approve_fn2.methods.approve(liquidity_address, to_amount)
                    .send({ from: address })
                    .on("receipt", (hash) => {
                      Contract_Liquidity.methods.addLiquidity([tokenAAddress, tokenBAddress, address, from_amount, to_amount, 0, 0, deadline])
                        .send({ from: address })
                        .on("receipt", (hash) => {
                          apiCall()
                        })
                        .on("error", (err) => {
                          alert("Transaction Cancelled")
                          setActive(false);

                        })
                    })
                    .on("error", (err) => {
                      alert("Transaction Cancelled")
                      setActive(false);

                    })
                })
                .on("error", (err) => {
                  alert("Transaction Cancelled")
                  setActive(false);

                })
            })
        })
    }
    else {
      toast.error("Enter Valid Address")
    }

  }

  const amountConvert = (amount, decimal, type = "towei") => {
    if (type == "towei") {
      let coinwei = Math.pow(10, decimal);
      let sendAmount = amount * coinwei;

      return (sendAmount = getNumber(sendAmount));
    } else if (type == "fromwei") {
      let coinwei = Math.pow(10, decimal);
      let sendAmount = amount / coinwei;
      return (sendAmount = getNumber(sendAmount));
    }
  };

  const getNumber = (x) => {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split("e-")[1]);
      if (e) {
        x *= Math.pow(10, e - 1);
        x = "0." + new Array(e).join("0") + x.toString().substring(2);
      }
    }
    else {
      var e = parseInt(x.toString().split("+")[1]);

      if (e > 20) {
        e -= 20;
        x /= Math.pow(10, e);
        x += new Array(e + 1).join("0");
      }
    }
    if (!Number.isInteger(x)) {
      x = x.toString();
    }

    return x.toString();
  };


  return (
    <div className="add-pairs-container">
      <LoadingOverlay
        active={active}
        spinner={<FadeLoader color={color} css={override} size={150} />}
      // text="Please Connect Admin Address..."
      >
        <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
          <h5>Add Liquidity</h5>
          <br></br>
          <div className="row">
            <div className="col-3">
              {" "}
              <label> Token A:</label>
            </div>
            <div className="col-9">
              <select
                className="form-select"
                onChange={handleToken}
                name="tokenone"
                ref={register({
                  required: "select one option",
                })}
                value={selectedToken}
              >
                {listCurrencies &&
                  listCurrencies.length > 0 &&
                  listCurrencies.map((value, index) => {
                    return (
                      <>
                        <option
                          key={index}
                          value={value.tokenName}
                          selected={index == 0}
                        >
                          {value.tokenName}
                        </option>
                      </>
                    );
                  })}
              </select>
              {errors.tokenone && (
                <div className="form-error">{errors.tokenone.message}.</div>
              )}
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col-3">
              <label> Token B:</label>
            </div>
            <div className="col-9">
              <select
                className="form-select"
                name="oppositetoken"
                onChange={handleOppositeToken}
                ref={register({
                  required: "select one option",
                })}
              >
                {listCurrenciesTwo &&
                  listCurrenciesTwo.length > 0 &&
                  listCurrenciesTwo.map((value, index) => {
                    return (
                      <>
                        <option
                          key={index}
                          value={value.tokenName}
                          selected={index == 0}
                        >
                          {value.tokenName}
                        </option>
                      </>
                    );
                  })}
              </select>
              {errors.oppositetoken && (
                <div className="form-error">
                  {errors.oppositetoken.message}.
                </div>
              )}
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col-3">
              <label>Token A Address:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Token A Address"
                autoComplete="off"
                name="tokenaaddress"
                value={tokenAAddress}
                readonly
                // onChange={(event) => {let a = web3.utils.isAddress(event.target.value); a?setTokenAAddress(event.target.value): setTokenAAddress("")}}
                ref={register({
                  required: "Token A Address is required",
                  pattern: {
                    value: /^[A-Za-z0-9]*$/,
                    message: "Only Characters",
                  },
                })}
              />
              {errors.tokenaaddress && (
                <div className="form-error">
                  {errors.tokenaaddress.message}.
                </div>
              )}
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-3">
              <label>Token B Address:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Token B Address"
                autoComplete="off"
                name="tokenbaddress"
                value={tokenBAddress}
                readonly

                // onChange={(event) => {let a = web3.utils.isAddress(event.target.value);a?setTokenBAddress(event.target.value):setTokenBAddress("")}}
                ref={register({
                  required: "Token B Address is required",
                  pattern: {
                    value: /^[A-Za-z0-9]*$/,
                    message: "Only Characters",
                  },
                })}
              />
              {errors.tokenbaddress && (
                <div className="form-error">
                  {errors.tokenbaddress.message}.
                </div>
              )}
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col-3">
              <label>Token A Amount:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter Token A Amount"
                className="form-control"
                autoComplete="off"
                name="tokenaamount"
                onChange={(event) => setTokenAAmount(event.target.value)}
                ref={register({
                  required: "Token A Amount is required",
                  pattern: {
                    value: /[+-]?([0-9]*[.])?[0-9]+/,
                    message: "Only Numerics",
                  },
                })}
              />
              {errors.tokenaamount && (
                <div className="form-error">{errors.tokenaamount.message}.</div>
              )}
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col-3">
              <label>Token B Amount:</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Token B Amount"
                autoComplete="off"
                name="tokenbamount"
                onChange={(event) => setTokenBAmount(event.target.value)}
                ref={register({
                  required: "Token B Amount is required",
                  pattern: {
                    value: /[+-]?([0-9]*[.])?[0-9]+/,
                    message: "Only Numerics",
                  },
                })}
              />
              {errors.tokenbamount && (
                <div className="form-error">{errors.tokenbamount.message}.</div>
              )}
            </div>


          </div>
          <br></br>
          <br></br>
          <div align="center">
            <button className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }}>Submit</button>
          </div>
        </form>

        <br></br>
        <br></br>
        <br></br>
      </LoadingOverlay>
    </div>
  );
};

export default AddPairs;
