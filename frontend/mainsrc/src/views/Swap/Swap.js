import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route , useHistory} from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import "./css/swap.scss";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import liqmdlicon1Img from '../../assets/images/liq-mdl-icon1.png';
import liqmdlicon2Img from '../../assets/images/liq-mdl-icon2.png';
import liqbtcusdtImg from '../../assets/images/liq-btc-usdt.png';
import liqarrowiconImg from '../../assets/images/liq-arrow-icon.png';
import liqbtcImg from '../../assets/images/liq-btc.png';
import liqusdtImg from '../../assets/images/liq-usdt.png';
import liqarrowlefticonImg from '../../assets/images/arrow-left-icon.png';
import liqaswapbtniconImg from '../../assets/images/swap-btn-icon.png';
import addliqplusImg from '../../assets/images//add-liq-plus.png';
import closeImg from '../../assets/images/close.png';
import xpocketImg from '../../assets/images/xpocket.png';
import btcImg from '../../assets/images/btc.png';
import usdtImg from '../../assets/images/usdt.png';
import ltcImg from '../../assets/images/lite.png';
import alertImg from '../../assets/images/alert.png';
import successImg from '../../assets/images/success.png'
import forwardImg from '../../assets/images/forward.png';
import successgifImg from "../../assets/images/success.gif";

import infoImg from '../../assets/images/info.png';
import adacImg from '../../assets/images/adac.png';
import bnbcImg from '../../assets/images/bnbc.png';
import btccImg from '../../assets/images/btcc.png';
import ethcImg from '../../assets/images/ethc.png';
import usdtcImg from '../../assets/images/usdtc.png';
import swapbtnImg from '../../assets/images/swapbtn.png';


/////////////////

import {
  SwapLiq_Address,
  Router_Address,
  Factory_Address,
  Weth_Address,
  Pocket_Address,
  Address_List
} from "../../constants/Contract_Constants";
import { SwapLiq_ABI, Router_ABI, Factory_ABI,Token_ABI } from "../../constants/Contract_Constants";

///////////


// import { Address_List } from "../../constants/Contract_Constants";
// import Factory_ABI from "../../common/ABI/Factory_ABI.json";
// import Router_ABI from "../../common/ABI/Router_ABI.json";
import Approve_Balance_ABI from "../../common/ABI/Approve_Balance_ABI.json";
import Swap_Liquidity_ABI from "../../common/ABI/Swap_Liquidity_ABI.json"
import Pair_ABI from "../../common/ABI/Pair_ABI.json"
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../constants";
import { useWeb3React } from "@web3-react/core";

// fix  https://github.com/derrickpelletier/react-loading-overlay/pull/57 
LoadingOverlay.propTypes = undefined

const Web3 = require("web3");
const web3 = new Web3(window.ethereum);

const Swap = (props) => {

  const context = useWeb3React()
  const { chainId } = context

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modal11, setModal11] = useState(false);
  const toggle11 = () => setModal11(!modal11);

  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  const [modal3, setModal3] = useState(false);
  const toggle3 = () => setModal3(!modal3);

  const [modal55, setModal55] = useState(false);
  const toggle55 = () => setModal55(!modal55);

  const [modal203, setModal203] = useState(false);
  const toggle203 = () => setModal203(!modal203);

  const [fromTokenAddress, setFromTokenAddress] = useState("0x82C8A6a731BC74df5124E0aD35EC74CE85cB2821");


  const history = useHistory()


  const [toTokenAddress, setToTokenAddress] = useState();
  const [fromTokenName, setFromTokenName] = useState("XPocket");
  const [toTokenName, setToTokenName] = useState("Select");
  const [fromTokenDecimal, setFromTokenDecimal] = useState(18);
  const [toTokenDecimal, setToTokenDecimal] = useState();

  const [fromTokenImg, setFromTokenImg] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPTSURBVHgBxVhfSFNRGP/ObTpzmwn+QfGhGRhK4Z8gXzKb9DaDeloPUak9+qC99BQ4qaAgUCERApk+OpAscm/hDF8yKCdE9oc2oVr4h9Jpupq7fd/Zrt673W13utEPPu7dOd85v98533f+3DFIE6IomvFRj3YUrTBa/AttEW2OMeaDTANJC9HsaF4xNcinLyr0wMRmNIe4fzj2LQQbdqP9FA8O6qM7XXK7mHnYtZL3i9lDXyyfLnbk+OjyLwUgGygvNVFY13Cl2KUyJiO3+JfWp+4OvoC3775DNlBWUgCDvZdISAuKcFOZIKt3DDtfZ42c8GN5HQZGZjiXVMYF4Ojb8GH2o4McJoMeGk5UkGJIF4nabmwG6UHL+zq9SDnQE9tBeWkBjDy0gSlfDySMZsc1tQBaYLtQBzdsp3lbQmfPBM7st1i3NrRRAZXQtmqO66S1dreDcozd7c7zMD50Fawt1QmJqW586Bp0tzXttiVcxr5UYKG8oxm4qFb7ybsSVyYJ6Wpv4vWffRGfshITNJysUJDK8SZ+9BLOkQCLWo3LvcDjZ7XUxMWRiE5hfMmSIYDxHpv0gHNyPpFLPQkwJ6qluE9OfeDxbE0y9WoYe+7h7Td+B5O5JRdAoKVzD/cG6kyLkOnZLzDgmMF2mjYzsw40Qk1IeHWZ1wlFJTzOw87ZtPcRzQIImLXg/7oEdx5MwLPHIbhi9MLmziF4sloE88ECYDm5AGhMEDT3SQJ8EA2DMUEWE8LBbQAyFEHwrJBVyjx2QNzZAtjeAlF/GIS8PNAAH0mdk34l2vHCGwHesUSeEsEtCAfWVP2NBn1iAc2Nx+IaiKG/OLgQqIKxiKmqDoP4J34FNDfKZw3cFIJp6RetawpD0qWDhEyfF4m3FGsiC4VAxJHT+56vMhdoez+rFPBUiB6Lbqmku+OMkk+XAwzjSYnFdDoQjAVcAMgTjepyc0EwmLgw7qvX8zI5rJZq+W7pQ+45qZfRPaeauP2eYVIx0xFgSADJMpyI8w0R37x8RVVVZTFfvjLYeRNOwNgIRFYDRxceJlXmYsgUaOrv37LKi2j0o7sComiXXugsf4Q3F2ua268aKK/oWC8vUaywNulFkcK40dC9wC4vc7nf890v3XsiDaLD1qh2FNtx9L2qAqIi6OaquMfTheTlKy84XZ6UQojY1lqHl5JateO5H8lvygtUF7HaTEigPZ/uAR/xPuDHA4dIjIZcOI5JRnnTkPiIVow8JcTMfhl1wX4g/s9vQxUh9MXr1UBKPj1ohVr6ZpAmoiOqg8gJKv9/wAeR/wcWIQ38A78Khx1azOfaAAAAAElFTkSuQmCC")
  const [ToTokenImg, setToTokenImg] = useState()

  const [fromTokenValue, setFromTokenValue] = useState(0);
  const [toTokenValue, setToTokenValue] = useState(0);
  const [fromBalance, setFromBalance] = useState();
  const [toBalance, setToBalance] = useState();


  const [swapHistory, setSwapHistory] = useState([])
  const [fromTokenList, setFromTokenList] = useState([])
  const [toTokenList, setToTokenList] = useState([])

  const [tokenList, setTokenList] = useState([])


  const [GWEI, setGWEI] = useState(0);
  const [tolerance, setTolerance] = useState(0.1);
  const [txnDeadline, setTxnDeadline] = useState();
  const [gasData, setGasData] = useState(0)

  const [message, setMessage] = useState("Error")

  const [text, setText] = useState("Error")
  const [load, setLoad] = useState(false)

  var meta_address = JSON.parse(window.localStorage.getItem("metaAddress"));





  var Contract_Factory = new web3.eth.Contract(Factory_ABI,Factory_Address);
  var Contract_Router = new web3.eth.Contract(Router_ABI, Router_Address);
  var Contract_Swap = new web3.eth.Contract(SwapLiq_ABI, SwapLiq_Address )


  var approve_fn1 = new web3.eth.Contract(Token_ABI, fromTokenAddress);
  var approve_fn2 = new web3.eth.Contract(Token_ABI, toTokenAddress);

  var gas_Price;
  var from_amount;
  var to_amount;

  useEffect(() => {
      axios.get("https://bakxlxiqwosd.pocketswap.org/api/currency/listallcurrency")   
         .then((res) => {
        setFromTokenList(res.data.result)
        setTokenList(res.data.result)

        var arr = []

        for (let i = 0; i < res.data.result.length; i++) {
          if (res.data.result[i].tokenName !== "XPocket") {
            arr.push(res.data.result[i])

          }
        }
        setToTokenList(arr)

      })


    if (meta_address != "" && meta_address != undefined) {
        var Contract_Balance = new web3.eth.Contract(Token_ABI, fromTokenAddress)

           Contract_Balance.methods
        .balanceOf(meta_address)
        .call()
        .then((bal) => {
          let a = (bal / Math.pow(10, 18)).toFixed(3);
          setFromBalance(a);
        });
    }

  }, [meta_address])

  const selectFrom = (address, name, decimal, img) => {
    var Contract_Balance = new web3.eth.Contract(Token_ABI, address);



    setFromTokenName(name);
    setFromTokenAddress(address);
    setFromTokenDecimal(decimal)
    setFromTokenImg(img)

    let arr = []
    let list = [...tokenList]

    list.map((data) => {
      if (data.tokenName !== name) {
        arr.push(data)
      }
    })
    setToTokenList(arr)

    if (meta_address != "" && meta_address != undefined) {

      if (meta_address != "" && meta_address != undefined) {
        if (name == "Eth") {
          web3.eth.getBalance(meta_address).then((balc) => {
            let a = (balc / Math.pow(10, 18));
            let b = a.toFixed(2)
            setFromBalance(b);

          });
        }
        else {
          Contract_Balance.methods
            .balanceOf(meta_address)
            .call()
            .then((bal) => {
              let a = (bal / Math.pow(10, decimal)).toFixed(3);
              setFromBalance(a);
            });
        }
      }
    };
  }

  const selectTo = (address, name, decimal, img) => {
    var Contract_Balance = new web3.eth.Contract(Token_ABI, address);

    setToTokenName(name);
    setToTokenAddress(address);
    setToTokenDecimal(decimal)
    setToTokenImg(img)

    let arr = []
    let list = [...tokenList]

    list.map((data) => {
      if (data.tokenName !== name) {
        arr.push(data)
      }
    })
    setFromTokenList(arr)


    if (meta_address != "" && meta_address != undefined) {
      if (name == "Eth") {
        web3.eth.getBalance(meta_address).then((balc) => {
          let a = (balc / Math.pow(10, 18));
          let b = a.toFixed(2)
          setToBalance(b);

        });
      }
      else {

        Contract_Balance.methods
          .balanceOf(meta_address)
          .call()
          .then((bal) => {
            let a = (bal / Math.pow(10, decimal));
            a = a.toFixed(3)

            setToBalance(a);
          });
      }
    }

  };

  const fromSearch = (e) => {
    let arr = []
    let a = [...tokenList]



    if (e.target.value !== "" && e.target.value !== undefined) {
      let token = e.target.value
      let test = token.toLowerCase()
      var searchResult = a.filter(word => word.tokenName.toLowerCase().indexOf(test) > -1);
      setFromTokenList(searchResult)
    }
    else {
      setFromTokenList(a)

    }
  }

  const toSearch = (e) => {
    let arr = []
    let a = [...tokenList]



    if (e.target.value !== "" && e.target.value !== undefined) {
      let token = e.target.value
      let test = token.toLowerCase()
      var searchResult = a.filter(word => word.tokenName.toLowerCase().indexOf(test) > -1);
      setToTokenList(searchResult)
    }
    else {
      setToTokenList(a)

    }
  }

  const fromLiquidityData = () => {
    from_amount = fromTokenValue;
    from_amount = amountConvert(from_amount, fromTokenDecimal);
    if (
      fromTokenAddress != undefined &&
      toTokenAddress != undefined
    ) {
 
      if (from_amount >= 1) {
        Contract_Router.methods.getAmountsOut(from_amount, [fromTokenAddress, toTokenAddress])
          .call()
          .then((value) => {
            let data = value[1] / Math.pow(10, toTokenDecimal)
            data = data.toFixed(6)

            setToTokenValue(data)
          })
          .catch((err) => {
            setFromTokenValue("")
            setToTokenValue("")
            toast.warning("Not Enough Liquidity To Swap")
          })

      }
    }
    else {
      setMessage("connect metamask")
    }


  }

  const toLiquidityData = () => {
    to_amount = toTokenValue
    to_amount = amountConvert(toTokenValue, toTokenDecimal);
    if (
      fromTokenAddress != undefined &&
      toTokenAddress != undefined
    ) {
      if (to_amount >= 1) {
        Contract_Router.methods.getAmountsIn(to_amount, [fromTokenAddress, toTokenAddress])
          .call()
          .then((value) => {
            let data = value[0] / Math.pow(10, fromTokenDecimal)
            data = data.toFixed(6)
            setFromTokenValue(data)
          })
          .catch((err) => {
            setFromTokenValue("")
            setToTokenValue("")
            toast.warning("Not Enough Liquidity To Swap")
          })
      }
    }
    else {
      setMessage("connect metamask")
    }
  }

  const refresh = () => {
    setFromTokenValue("")
    setToTokenValue("")
  }

  const swapButton = (e) => {
    e.preventDefault()
    setFromTokenName(toTokenName);
    setToTokenName(fromTokenName);
    setFromTokenAddress(toTokenAddress);
    setToTokenAddress(fromTokenAddress);
    setFromTokenValue("");
    setToTokenValue("");
    setFromBalance(toBalance);
    setToBalance(fromBalance);
    setFromTokenImg(ToTokenImg)
    setToTokenImg(fromTokenImg)

    setFromTokenDecimal(toTokenDecimal)
    setToTokenDecimal(fromTokenDecimal)
  };

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

  const swap = (e) => {
    toggle1()
    setText("Approving Tokens....")
    setLoad(true)
    e.preventDefault()
    var time = Math.floor(Date.now() / 1000);
    var time1 = txnDeadline;
    var time1 = time1 > 0 ? time1 * 60000 : 1 * 60000;
    var dead_time = parseInt(time1);
    var deadline = (time + dead_time).toString();

    if (GWEI == 0) {
      web3.eth.getGasPrice((e, gas) => {
        gas_Price = gas;
      });
    } else {
      gas_Price = GWEI + (GWEI * (tolerance / 100));
    }




    if (meta_address != "" && meta_address != undefined) {
      from_amount = fromTokenValue;
      to_amount = toTokenValue;

      from_amount = amountConvert(from_amount, fromTokenDecimal);
      to_amount = amountConvert(to_amount, toTokenDecimal);


      if (
        from_amount != "" &&
        from_amount != undefined &&
        to_amount != "" &&
        to_amount != undefined
      ) {

        approve_fn1.methods
          .approve(SwapLiq_Address, from_amount)
          .send({ from: meta_address })

          .on("receipt", (receipt) => {
            approve_fn2.methods
              .approve(SwapLiq_Address, to_amount)
              .send({ from: meta_address })

              .on("receipt", async(receipt) => {
                setText("Swapping ....") 

                let swapContract = Contract_Swap.methods.swap([fromTokenAddress, toTokenAddress, meta_address, deadline, from_amount, 0])

                swapContract
                  .send({ 
                    from: meta_address,
                    // gasLimit: web3.utils.toHex(1500000),
                    // gasPrice : gas_Price     
                   })
                  .on("receipt", (hash) => {
                    from_amount = from_amount / Math.pow(10, fromTokenDecimal);
                    to_amount = to_amount / Math.pow(10, toTokenDecimal);
                    setTimeout(function () {
                      selectFrom(fromTokenAddress, fromTokenName, fromTokenDecimal, fromTokenImg)
                      selectTo(toTokenAddress, toTokenName, toTokenDecimal, ToTokenImg)

                      transHistory(hash.blockHash, meta_address, fromTokenName, toTokenName, to_amount, from_amount);

                    }, 10000);

                  })
                  .on("error", (err) => {
                    setLoad(false)

                    toast.error('Transaction Cancelled', err, { autoClose: 10000 })

                  })

              })
              .on("error", (err) => {
                setLoad(false)

                toast.error('Transaction Cancelled', err, { autoClose: 10000 })

              })
          })
          .on("error", (err) => {
            setLoad(false)

            toast.error('Transaction Cancelled', err, { autoClose: 10000 })

          })

      }

      else {
        setMessage("connect metamask")
      }

    }
    else {
     
      toast.error('Transaction Cancelled', { autoClose: 10000 })

      setLoad(false)
    }

  }

  const transHistory = (
    hash,
    address,
    fromToken,
    toToken,
    toAmount,
    fromAmount,

  ) => {

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hash: hash,
        userAddress: address,
        fromToken: fromToken,
        toToken: toToken,
        toAmount: toAmount,
        fromAmount: fromAmount,

      }),
    };
    fetch(
        "https://bakxlxiqwosd.pocketswap.org/api/swap/addswap", request
    )
      .then((data) => {
        toast.success('Transaction Successfull', { autoClose: 10000 })

        setLoad(false)

      })
      .catch((err)=>{
        setLoad(false)
      })


  };

  if (fromTokenName == toTokenName) {
    setToTokenName("select")

    toast.error('Select Different Token', { autoClose: 10000 })

  }

  if (fromTokenName.toLowerCase() == toTokenName.toLowerCase()) {
    setToTokenName("select")


    
    setToTokenImg()
    toast.error('Select Different Token', { autoClose: 10000 })

  }


  const detailsSetting = () =>{
    web3.eth.getGasPrice((e, gasPrice) => {
     gasPrice = web3.utils.fromWei(gasPrice, 'ether');
      setGasData(gasPrice)
    });
  }
  useEffect(() => {
    if (fromTokenAddress !== undefined && toTokenAddress !== undefined) {
      detailsSetting();
    }
  }, [fromTokenAddress, toTokenAddress])





  return (
    <Fragment>

      <LoadingOverlay active={load} spinner text={text} styles={{

        content: (base) => ({
          ...base,
          color: '#033C6C',
          height: '500px',

        }),
        spinner: (base) => ({
          ...base,
          margin: 'auto auto auto auto',
          width: '90px',
          '& svg circle': {
            stroke: '#033C6C'
          }
        }),
        overlay: (base) => ({
          ...base,
          background: 'rgb(0, 0, 0, 0.7)'
        })
      }}>
        <Header />
        <div className="cnt-load-div">
          <div className="container-fluid p-0">
            <div className="cnt-div">
              <div className="liqpage">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-7">
                      <div className="Swp-main mt-5">
                        <div className="Liq-main-xb BrdRdsGrdtn mb-4">
                          <div className="LiqRdsl mb-4">
                            <a href="#" className="btn LiqRdslbtn active">Swap</a>
                            <a onClick={()=>history.push("/liquidity")} className="btn LiqRdslbtn">Liquidity</a>
                          </div>
                          <div className="LiqHdd">
                            <div>
                              <h4 className="Tx20M033c">Exchange</h4>
                              <p className="Tx14R033op">Trade tokens in an instant</p>
                            </div>
                            <div>
                              <a className="LiqMdlicon cursor-pointer" onClick={toggle3}><img src={liqmdlicon1Img} /></a>
                            </div>
                          </div>
                     
                          <div className="LiqBox">
                            <div className="LqBg10Rfbf6 mt-3 mb-2">
                              <div className="d-flex justify-content-between align-items-end flex-wrap">
                                <div className="d-block">
                                  <div className="LqAdInp form-group mb-0">
                                    <input className="input form-control pl-0 border-0" type="text" placeholder="0.00"
                                      value={fromTokenValue}
                                      onKeyUp={fromLiquidityData}
                                      onChange={(e) => {
                                        const amount = e.target.value;
                                        var regexp = new RegExp(
                                          "^[0-9]*[.]?[0-9]*$"
                                        );
                                        if (regexp.test(e.target.value)) {
                                          setFromTokenValue(amount);
                                        }
                                      }} />
                                  </div>                                  
                                </div>                                
                                <div className="" >
                                  <p className="Tx12R033op mb-2 d-block text-left">Balance: {fromBalance}</p>
                                  <div className="d-flex align-items-center mb-2 cursor-pointer" onClick={toggle}>
                                    <img src={fromTokenImg} height="30px" width="30px" style={{ borderRadius: "50%" }} />
                                    <div className="mx-2">
                                      <p className="Tx15M033 mb-0">{fromTokenName}</p>
                                    </div>                                    
                                      <img src={liqarrowlefticonImg} className="" />                                    
                                  </div>                                  
                                </div>
                              </div>
                            </div>
                         
                            <div className="text-center mt-3">
                              <img src={liqaswapbtniconImg} onClick={(e) => { swapButton(e) }} />
                            </div>
                            <div className="LqBg10Rfbf6 mt-3 mb-2">
                              <div className="d-flex justify-content-between flex-wrap align-items-center">
                                <div className="mb-0">
                                  <p className="Tx14R033 mb-0">To Estimated</p>
                                  <div className="LqAdInp form-group mb-1">
                                    <input className="input form-control pl-0 border-0" type="text" placeholder="0.00"
                                      value={toTokenValue}
                                      onKeyUp={toLiquidityData}
                                      onChange={(e) => {
                                        const amount = e.target.value;
                                        var regexp = new RegExp(
                                          "^[0-9]*[.]?[0-9]*$"
                                        );
                                        if (regexp.test(e.target.value)) {
                                          setToTokenValue(amount);
                                        }
                                      }} />
                                  </div>                                  
                                </div>
                                <div className="" >
                                  <p className="Tx12R033op mb-2 d-block text-left">Balance: {toBalance}</p>
                                  <div className="d-flex align-items-center mb-2 cursor-pointer" onClick={toggle11}>
                                    <img src={ToTokenImg} height="30px" width="30px" style={{ borderRadius: "50%" }} />
                                    <div className="mx-2">
                                      <p className="Tx15M033 mb-0">{toTokenName}</p>
                                    </div>
                                      <img src={liqarrowlefticonImg} className="" />
                                  </div>                                  
                                </div>
                              </div>
                            </div>
                           
                          </div>
                          <div className="text-center">
                            <button className="btn Lqbtn Lqbtn135 w-100" type="button"disabled={fromTokenValue <= 0 && toTokenValue <= 0 } 
                            onClick={toggle1}
                             >Swap</button>
                          </div>
                          <div className="Liq-main-xb BrdRdsGrdtn p-4 my-4">
                          <div className="d-flex justify-content-between flex-wrap mb-2">
                            <p className="Tx14R033op mb-0">Minimum Received<img src={infoImg} className="ml-2"/></p>
                            <p className="Tx14M033 mb-0">{toTokenValue ? toTokenValue : 0} {toTokenName}</p>
                          </div>
                
                          <div className="d-flex justify-content-between flex-wrap ">
                            <p className="Tx14R033op mb-0">Trade Fee<img src={infoImg} className="ml-2"/></p>
                            <p className="Tx14M033 mb-0">{gasData} ETH</p>
                          </div>
                        </div>
                        </div>                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Modal isOpen={modal} toggle={toggle} className="con-wal-modal">
          <ModalHeader toggle={toggle} className="border-bottom-0">
            Select Token
          </ModalHeader>
          <button className="btn close1" onClick={toggle}>
            <img src={closeImg} />
          </button>
          <ModalBody className="selecttoken-block">
            <div class="row">
              <div class="col-md-12">
                <form>
                  <div class="form-group position-relative mb-4">
                    <input
                      type="text"
                      className="form-control font-14"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Search name or address"
                      onChange={(e) => fromSearch(e)}
                    />
                    <button className="btn searchbtn">Search</button>
                  </div>
               

                  {fromTokenList.map((data,i) => {
                    return (

                      <div class="mt-4" key={i}>
                        <div
                          onClick={() => {
                            selectFrom(
                              data.tokenAddress,
                              data.tokenName,
                              data.tokenDecimal,
                              data.tokenImg
                            );
                            toggle();
                            refresh()
                          }}
                          class="d-flex align-items-center justify-content-between bg-token px-3 py-2"
                        >
                          <div>
                            <img src={data.tokenImg} height="30px" width="30px" style={{ borderRadius: "50%" }} />
                            <label class="font-14  fw-400 mb-0 primary-text ml-2">
                              {data.tokenName}
                            </label>
                          </div>
                        </div>

                      </div>

                    )
                  })}

                </form>
              </div>
            </div>
          </ModalBody>
        </Modal>

        <Modal isOpen={modal11} toggle={toggle11} className="con-wal-modal">
          <ModalHeader toggle={toggle11} className="border-bottom-0">
            Select Token
          </ModalHeader>
          <button className="btn close1" onClick={toggle11}>
            <img src={closeImg} />
          </button>
          <ModalBody className="selecttoken-block">
            <div class="row">
              <div class="col-md-12">
                <form>
                
                  <div class="form-group position-relative mb-4">
                    <input
                      type="text"
                      className="form-control font-14"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Search name or address"
                      onChange={(e) => toSearch(e)}
                    />
                    <button className="btn searchbtn">Search</button>
                  </div>
                 
                  <div class="mt-4">
                    {toTokenList.map((data,i) => {
                      return (
                        <div
                          key={i}
                          onClick={() => {
                            selectTo(
                              data.tokenAddress,
                              data.tokenName,
                              data.tokenDecimal,
                              data.tokenImg
                            );
                            toggle11();
                            refresh()

                          }}
                          class="d-flex align-items-center justify-content-between bg-token px-3 py-2"
                        >
                          <div>
                            <img src={data.tokenImg} height="30px" width="30px" style={{ borderRadius: "50%" }} />
                            <label class="font-14  fw-400 mb-0 primary-text ml-2">
                              {data.tokenName}
                            </label>
                          </div>
                        </div>
                      )
                    })}



                  </div>
                </form>
              </div>
            </div>
          </ModalBody>
        </Modal>

        <Modal isOpen={modal1} toggle={toggle1} className="con-wal-modal">
          <ModalHeader toggle={toggle1} className="border-bottom-0">Confirm</ModalHeader>
          <button className="btn close1" onClick={toggle1}><img src={closeImg} /></button>
          <ModalBody className="selecttoken-block">
            <div class="row">
              <div class="col-md-12">
                <form>
                  <div class="d-flex align-items-center justify-content-between py-3 border-bottom">
                    <label class="font-14  fw-400 mb-0 grey-text">You pay</label>
                    <label class="font-14  fw-400 mb-0 primary-text">{fromTokenValue} {fromTokenName}</label>
                  </div>
                  <div class="d-flex mt-2 align-items-center justify-content-between py-3 border-bottom">
                    <label class="font-14  fw-400 mb-0 grey-text">Max slippage</label>
                    <label class="font-14  fw-400 mb-0 primary-text">{tolerance}%</label>
                  </div>

                  <div class="d-flex mt-2 align-items-center justify-content-between py-3">
                    <label class="font-14  fw-400 mb-0 grey-text">You get</label>
                    <label class="font-14  fw-400 mb-0 primary-text">{toTokenValue} {toTokenName}</label>
                  </div>
                  <div class="text-center mt-4">
                    <button class="btn primary-btn font-15 fw-600" onClick={(e) => { swap(e) }}>Swap</button>
                  </div>
                </form>
              </div>
            </div>
          </ModalBody>
        </Modal>

        <Modal isOpen={modal2} toggle={toggle2} className="con-wal-modal recent-transaction">
          <ModalHeader toggle={toggle2} className="border-bottom-0">Recent Transactions</ModalHeader>
          <button className="btn close1" onClick={toggle2}><img src={closeImg} /></button>
          <ModalBody className="selecttoken-block">
            {swapHistory.map((data,i) => {
              return (
                <div class="row" key={i}>
                  <div class="col-md-12">
                    <form>
                      <div class="mt-2">
                        <div class="d-xl-flex d-sm-flex align-items-center justify-content-between bg-token px-3 py-3 mt-2">
                          <label class="font-14  fw-400 mb-0 grey-text">Swap {data.fromAmount} {data.fromToken} for {data.toAmount} {data.toToken}</label>
                          <div>
                            <a href={`https://sepolia.etherscan.io/tx/${data.hash}`}> <img src={forwardImg} class="mr-2 hover-forward" /></a>
                            <img src={successImg} />
                          </div>
                        </div>


                      </div>
                    </form>
                  </div>
                </div>
              )
            })}


          </ModalBody>
        </Modal>

        <Modal isOpen={modal3} toggle={toggle3} className="con-wal-modal recent-transaction">
          <ModalHeader toggle={toggle3} className="border-bottom-0 p-4">Settings</ModalHeader>
          <button className="btn close1" onClick={toggle3}><img src={closeImg} /></button>
          <ModalBody className="selecttoken-block p-4">
          <div class="row">
              <div class="col-md-12">
                <form>
                  <label class="font-15 d-block fw-500 mb-3  primary-text">
                  Default Transaction Speed (GWEI)<img src={infoImg} className="ml-2"/>
                  </label>
                  <div class="row">
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xl-4">
                      <div class="bg-tokenn px-3 py-2 text-center" onClick={()=>{setGWEI(5); toggle3()}}>
                        <label>
                        Standard (5)
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xl-4">
                      <div class="bg-tokenn px-3 py-2 text-center" onClick={()=>{setGWEI(6); toggle3()}}>
                        <label>
                        Fast (6)
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xl-4">
                      <div class="bg-tokenn px-3 py-2 text-center" onClick={()=>{setGWEI(7); toggle3()}}>
                        <label>
                        Instant (7)
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <form>
                  <label class="font-15 d-block fw-500 mb-3  primary-text">
                    Slippage Tolerance<img src={infoImg} className="ml-2"/>
                  </label>

                  <div class="row">
                    <div class="col-sm-3 col-lg-3 col-md-3 col-xl-3" onClick={() => { setTolerance(0.5); toggle3() }}>
                      <div class="bg-tokenn text-center">
                        <label>
                          0.5%
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-3 col-lg-3 col-md-3 col-xl-3" onClick={() => { setTolerance(1); toggle3() }}>
                      <div class="bg-tokenn text-center">
                        <label>
                          1%
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-3 col-lg-3 col-md-3 col-xl-3" onClick={() => { setTolerance(2); toggle3() }}>
                      <div class="bg-tokenn text-center">
                        <label>
                          2%
                        </label>
                      </div>
                    </div>
                  
                  </div>
                  <label class="font-15 mt-4 d-block fw-500 mb-3  primary-text">
                    Transaction Deadline
                  </label>

                  <div class="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div class="bg-tokenn-input text-center mr-3 active">
                        <input type="text" placeholder="0" value={txnDeadline} maxLength="2"
                          onChange={(e) => {
                            const value = e.target.value;
                            var regexp = new RegExp(
                              "^[0-9]*?[0-9]*$"
                            );
                            if (regexp.test(value)) {
                              setTxnDeadline(value);
                            }
                          }} />
                      </div>
                      <label class="font-14  fw-500 mb-0 primary-text">Mins</label>
                    </div>
                    
                  </div>
                </form>
              </div>
            </div>
          </ModalBody>
        </Modal>

        <Modal isOpen={modal55} toggle={toggle55} className="con-wal-modal modal-dialog-centered">
          <ModalHeader toggle={toggle55} className="border-bottom-0 justify-content-center">Alert</ModalHeader>

          <ModalBody className="pt-0">
            <div class="altTx text-center">
              {message}
            </div>
          </ModalBody>
        </Modal>
     
        <Modal isOpen={modal203} toggle={toggle203} className="con-wal-modal cnfimgpop">
          <ModalHeader toggle={toggle203} className="border-bottom-0">
            Transaction submitted
          </ModalHeader>
          <button className="btn close1" onClick={toggle203}>
            <img src={closeImg} />
          </button>
          <ModalBody className="selecttoken-block">
            <img src={successgifImg} className="my-3 mx-auto d-block img-fluid" width="200" />
            <p>View balance in your wallet</p>
          </ModalBody>
        </Modal>
      </LoadingOverlay>
    </Fragment>
  );

}

export default Swap;