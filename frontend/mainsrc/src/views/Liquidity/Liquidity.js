import React, {
  Component,
  Fragment,
  useState,
  useRef,
  useEffect,
  createRef,
} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, useHistory, matchPath } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Collapse,
  CardBody,
  Card,
  UncontrolledCollapse,
} from "reactstrap";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";
import InputRange from "react-input-range";
import "./css/liquidity.scss";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import liqmdlicon1Img from "../../assets/images/liq-mdl-icon1.png";
import liqmdlicon2Img from "../../assets/images/liq-mdl-icon2.png";
import liqbtcusdtImg from "../../assets/images/liq-btc-usdt.png";
import liqarrowiconImg from "../../assets/images/liq-arrow-icon.png";
import liqbtcImg from "../../assets/images/liq-btc.png";
import liqusdtImg from "../../assets/images/liq-usdt.png";
import liqarrowlefticonImg from "../../assets/images/arrow-left-icon.png";
import liqaswapbtniconImg from "../../assets/images/swap-btn-icon.png";
import addliqplusImg from "../../assets/images/add-liq-plus.png";
import btcusdtImg from "../../assets/images/btc-usdt.png";
import closeImg from "../../assets/images/close.png";
import alertImg from "../../assets/images/alert.png";
import successImg from "../../assets/images/success.png";
import forwardImg from "../../assets/images/forward.png";
import xpocketImg from "../../assets/images/xpocket.png";
import btcImg from "../../assets/images/btc.png";
import usdtImg from "../../assets/images/usdt.png";
import ltcImg from "../../assets/images/lite.png";
import ltarrImg from "../../assets/images/ltarr.png";
import infoImg from "../../assets/images/info.png";
import cnfimg from "../../assets/images/cnfimg.png";
import successgifImg from "../../assets/images/success.gif";
//////////////
import {
  SwapLiq_Address,
  Router_Address,
  Factory_Address,
  Weth_Address,
  Pocket_Address,
  Address_List
} from "../../constants/Contract_Constants";

import { SwapLiq_ABI, Router_ABI, Factory_ABI, Token_ABI } from "../../constants/Contract_Constants";
//////////
// import Factory_ABI from "../../common/ABI/Factory_ABI.json";
// import Router_ABI from "../../common/ABI/Router_ABI.json";
import Approve_Balance_ABI from "../../common/ABI/Approve_Balance_ABI.json";
import Swap_Liquidity_ABI from "../../common/ABI/Swap_Liquidity_ABI.json"
import Pair_ABI from "../../common/ABI/Pair_ABI.json"
import Pair2_ABI from "../../common/ABI/Pair2_ABI.json"
import Test_ABI from "../../common/ABI/Test_ABI.json"
import { BASE_URL } from "../../constants";
import { useWeb3React } from "@web3-react/core";

// fix  https://github.com/derrickpelletier/react-loading-overlay/pull/57 
LoadingOverlay.propTypes = undefined

const Web3 = require("web3");
const web3 = new Web3(window.ethereum);

const Liquidity = (props) => {

  const context = useWeb3React()
  const { chainId } = context

  const histories = useHistory()

  const [value, setValue] = useState({ min: 0, max: 100 });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  const [isOpen, setIsOpen] = useState(false);
  const toggle3 = () => setIsOpen(!isOpen);

  const [isOpen1, setIsOpen1] = useState(false);
  const toggle4 = () => setIsOpen1(!isOpen1);

  const [modal10, setModal10] = useState(false);
  const toggle10 = () => setModal10(!modal10);

  const [modal11, setModal11] = useState(false);
  const toggle11 = () => setModal11(!modal11);

  const [modal55, setModal55] = useState(false);
  const toggle55 = () => setModal55(!modal55);

  const [modal88, setModal88] = useState(false);
  const toggle88 = () => setModal88(!modal88);

  const [modal101, setModal101] = useState(false);
  const toggle101 = () => setModal101(!modal101);

  const [modal201, setModal201] = useState(false);
  const toggle201 = () => setModal201(!modal201);

  const [modal202, setModal202] = useState(false);
  const toggle202 = () => setModal202(!modal202);

  const [modal203, setModal203] = useState(false);
  const toggle203 = () => setModal203(!modal203);

  const [liq1, setLiq1] = useState(false);
  const [liq2, setLiq2] = useState(true);
  const [liq3, setLiq3] = useState(true);

  const [liqudityHistory, setLiquidityHistory] = useState([])
  const [fromTokenList, setFromTokenList] = useState([])
  const [toTokenList, setToTokenList] = useState([])

  const [tokenList, setTokenList] = useState([])

  const [rewardTokens, setRewardTokens] = useState([])

  const [reward, setReward] = useState("0x0000000000000000000000000000000000000000")
  const [rewardTokenName, setRewardTokenName] = useState("No Reward")

  const [text, setText] = useState("Error")
  const [load, setLoad] = useState(false)

  const [pairAddress, setPairAddress] = useState()


  const [fromTokenAddress, setFromTokenAddress] = useState("0x82C8A6a731BC74df5124E0aD35EC74CE85cB2821");

  // useEffect(()=>{
  //   setFromTokenAddress(Address_List.Pocket_Address[chainId])
  // },[chainId])
  const [toTokenAddress, setToTokenAddress] = useState();
  const [fromTokenName, setFromTokenName] = useState("XPocket");
  const [toTokenName, setToTokenName] = useState("Select");
  const [fromTokenDecimal, setFromTokenDecimal] = useState(18);
  const [toTokenDecimal, setToTokenDecimal] = useState();

  const [fromTokenImg, setFromTokenImg] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPTSURBVHgBxVhfSFNRGP/ObTpzmwn+QfGhGRhK4Z8gXzKb9DaDeloPUak9+qC99BQ4qaAgUCERApk+OpAscm/hDF8yKCdE9oc2oVr4h9Jpupq7fd/Zrt673W13utEPPu7dOd85v98533f+3DFIE6IomvFRj3YUrTBa/AttEW2OMeaDTANJC9HsaF4xNcinLyr0wMRmNIe4fzj2LQQbdqP9FA8O6qM7XXK7mHnYtZL3i9lDXyyfLnbk+OjyLwUgGygvNVFY13Cl2KUyJiO3+JfWp+4OvoC3775DNlBWUgCDvZdISAuKcFOZIKt3DDtfZ42c8GN5HQZGZjiXVMYF4Ojb8GH2o4McJoMeGk5UkGJIF4nabmwG6UHL+zq9SDnQE9tBeWkBjDy0gSlfDySMZsc1tQBaYLtQBzdsp3lbQmfPBM7st1i3NrRRAZXQtmqO66S1dreDcozd7c7zMD50Fawt1QmJqW586Bp0tzXttiVcxr5UYKG8oxm4qFb7ybsSVyYJ6Wpv4vWffRGfshITNJysUJDK8SZ+9BLOkQCLWo3LvcDjZ7XUxMWRiE5hfMmSIYDxHpv0gHNyPpFLPQkwJ6qluE9OfeDxbE0y9WoYe+7h7Td+B5O5JRdAoKVzD/cG6kyLkOnZLzDgmMF2mjYzsw40Qk1IeHWZ1wlFJTzOw87ZtPcRzQIImLXg/7oEdx5MwLPHIbhi9MLmziF4sloE88ECYDm5AGhMEDT3SQJ8EA2DMUEWE8LBbQAyFEHwrJBVyjx2QNzZAtjeAlF/GIS8PNAAH0mdk34l2vHCGwHesUSeEsEtCAfWVP2NBn1iAc2Nx+IaiKG/OLgQqIKxiKmqDoP4J34FNDfKZw3cFIJp6RetawpD0qWDhEyfF4m3FGsiC4VAxJHT+56vMhdoez+rFPBUiB6Lbqmku+OMkk+XAwzjSYnFdDoQjAVcAMgTjepyc0EwmLgw7qvX8zI5rJZq+W7pQ+45qZfRPaeauP2eYVIx0xFgSADJMpyI8w0R37x8RVVVZTFfvjLYeRNOwNgIRFYDRxceJlXmYsgUaOrv37LKi2j0o7sComiXXugsf4Q3F2ua268aKK/oWC8vUaywNulFkcK40dC9wC4vc7nf890v3XsiDaLD1qh2FNtx9L2qAqIi6OaquMfTheTlKy84XZ6UQojY1lqHl5JateO5H8lvygtUF7HaTEigPZ/uAR/xPuDHA4dIjIZcOI5JRnnTkPiIVow8JcTMfhl1wX4g/s9vQxUh9MXr1UBKPj1ohVr6ZpAmoiOqg8gJKv9/wAeR/wcWIQ38A78Khx1azOfaAAAAAElFTkSuQmCC")
  const [ToTokenImg, setToTokenImg] = useState()

  const [fromTokenValue, setFromTokenValue] = useState(0);
  const [toTokenValue, setToTokenValue] = useState(0);
  const [fromBalance, setFromBalance] = useState(0);
  const [toBalance, setToBalance] = useState(0);


  const [GWEI, setGWEI] = useState(0);
  const [tolerance, setTolerance] = useState(0.1);
  const [txnDeadline, setTxnDeadline] = useState(0);

  const [message, setMessage] = useState("Error")


  const [aData, setAData] = useState(0)
  const [bData, setBData] = useState(0)
  const [shareOfPool, setShareOfPool] = useState(0)


  const [liquidityData, setLiquidityData] = useState([])
  const [singleLiqudityData, setSingleLiquidityData] = useState([])
  const [finalLiquidData, setFinalLiquidData] = useState([])

  const [dynamicA, setDynamicA] = useState()
  const [dynamicB, setDynamicB] = useState()
  const [range, setRange] = useState(100)
  const [dynamicBal, setDynamicBal] = useState()
  const [dynamicBal2, setDynamicBal2] = useState()
  const [dynamicA2, setDynamicA2] = useState()
  const [dynamicB2, setDynamicB2] = useState()

  const [importAddress, setImportAddress] = useState()


  const [amountPass, setAmountPass] = useState("")
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")


  const [staticContent, setStaticContent] = useState(false)

  const [trigger, setTrigger] = useState()

  const history = useHistory();

  var meta_address = JSON.parse(window.localStorage.getItem("metaAddress"));

  var Contract_Factory = new web3.eth.Contract(Factory_ABI, Factory_Address);
  var Contract_Router = new web3.eth.Contract(Router_ABI, Router_Address);
  var Contract_Liquidity = new web3.eth.Contract(SwapLiq_ABI, SwapLiq_Address)



  var gas_Price;
  var from_amount;
  var to_amount;


  useEffect(() => {
    var meta_address = JSON.parse(window.localStorage.getItem("metaAddress"));


    var Contract_Balance = new web3.eth.Contract(Token_ABI, fromTokenAddress);




    axios.get("https://bakxlxiqwosd.pocketswap.org/api/currency/listallcurrency")
      .then((res) => {

        setFromTokenList(res.data.result)
        setTokenList(res.data.result)


        var arr = []
        var rewa = [{
          tokenAddress: "0x0000000000000000000000000000000000000000",
          tokenDecimal: 18,
          tokenImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPTSURBVHgBxVhfSFNRGP/ObTpzmwn+QfGhGRhK4Z8gXzKb9DaDeloPUak9+qC99BQ4qaAgUCERApk+OpAscm/hDF8yKCdE9oc2oVr4h9Jpupq7fd/Zrt673W13utEPPu7dOd85v98533f+3DFIE6IomvFRj3YUrTBa/AttEW2OMeaDTANJC9HsaF4xNcinLyr0wMRmNIe4fzj2LQQbdqP9FA8O6qM7XXK7mHnYtZL3i9lDXyyfLnbk+OjyLwUgGygvNVFY13Cl2KUyJiO3+JfWp+4OvoC3775DNlBWUgCDvZdISAuKcFOZIKt3DDtfZ42c8GN5HQZGZjiXVMYF4Ojb8GH2o4McJoMeGk5UkGJIF4nabmwG6UHL+zq9SDnQE9tBeWkBjDy0gSlfDySMZsc1tQBaYLtQBzdsp3lbQmfPBM7st1i3NrRRAZXQtmqO66S1dreDcozd7c7zMD50Fawt1QmJqW586Bp0tzXttiVcxr5UYKG8oxm4qFb7ybsSVyYJ6Wpv4vWffRGfshITNJysUJDK8SZ+9BLOkQCLWo3LvcDjZ7XUxMWRiE5hfMmSIYDxHpv0gHNyPpFLPQkwJ6qluE9OfeDxbE0y9WoYe+7h7Td+B5O5JRdAoKVzD/cG6kyLkOnZLzDgmMF2mjYzsw40Qk1IeHWZ1wlFJTzOw87ZtPcRzQIImLXg/7oEdx5MwLPHIbhi9MLmziF4sloE88ECYDm5AGhMEDT3SQJ8EA2DMUEWE8LBbQAyFEHwrJBVyjx2QNzZAtjeAlF/GIS8PNAAH0mdk34l2vHCGwHesUSeEsEtCAfWVP2NBn1iAc2Nx+IaiKG/OLgQqIKxiKmqDoP4J34FNDfKZw3cFIJp6RetawpD0qWDhEyfF4m3FGsiC4VAxJHT+56vMhdoez+rFPBUiB6Lbqmku+OMkk+XAwzjSYnFdDoQjAVcAMgTjepyc0EwmLgw7qvX8zI5rJZq+W7pQ+45qZfRPaeauP2eYVIx0xFgSADJMpyI8w0R37x8RVVVZTFfvjLYeRNOwNgIRFYDRxceJlXmYsgUaOrv37LKi2j0o7sComiXXugsf4Q3F2ua268aKK/oWC8vUaywNulFkcK40dC9wC4vc7nf890v3XsiDaLD1qh2FNtx9L2qAqIi6OaquMfTheTlKy84XZ6UQojY1lqHl5JateO5H8lvygtUF7HaTEigPZ/uAR/xPuDHA4dIjIZcOI5JRnnTkPiIVow8JcTMfhl1wX4g/s9vQxUh9MXr1UBKPj1ohVr6ZpAmoiOqg8gJKv9/wAeR/wcWIQ38A78Khx1azOfaAAAAAElFTkSuQmCC",
          tokenName: "No Reward",
          tokenSymbol: "No Reward",
        }]

        for (let i = 0; i < res.data.result.length; i++) {
          if (res.data.result[i].tokenName.toLowerCase() !== "xpocket") {
            arr.push(res.data.result[i])

          }
          if (res.data.result[i].tokenName.toLowerCase() == "xpocket") {
            rewa.push(res.data.result[i])
          }
        }
        setRewardTokens(rewa)
        setToTokenList(arr)

      })
    if (meta_address != "" && meta_address != undefined) {
      let usAd = {
        "user_address": meta_address,
      }
      axios.post("https://bakxlxiqwosd.pocketswap.org/api/liquidity/listliquidity", usAd)
        .then((res) => {
          setLiquidityHistory(res.data.result)
        })
    }




    if (meta_address != "" && meta_address != undefined) {
      axios.get("https://bakxlxiqwosd.pocketswap.org/api/liquidity/listuserliquidity/" + meta_address)

        .then(function (response) {
          if (response.data.status == true || response.data.status == 200) {
            removeLiquidityData(response.data.result);

          } else {
          }
        })
        .catch(function (error) { });

      Contract_Balance.methods.balanceOf(meta_address).call()
        .then((bal) => {
          bal = bal / Math.pow(10, 18)
          bal = bal.toFixed(2)
          setFromBalance(bal)
        })

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
      if (name.toLowerCase() == "eth") {
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

      if (name.toLowerCase() == "eth") {
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
            let a = (bal / Math.pow(10, decimal)).toFixed(3);
            setToBalance(a);
          });
      }
    }

  };

  const fromLiquidityData = () => {
    from_amount = fromTokenValue;
    from_amount = amountConvert(fromTokenValue, fromTokenDecimal);


    if (pairAddress == "0x0000000000000000000000000000000000000000") {

      setAData(0)
      setBData(0)
    }
    else {


      if (
        fromTokenAddress != undefined &&
        toTokenAddress != undefined
      ) {
        var Contract_Pair = new web3.eth.Contract(Pair_ABI, pairAddress)
        Contract_Pair.methods.getReserves().call().then((data) => {
          Contract_Pair.methods.token0().call().then((token0) => {
            Contract_Pair.methods.token1().call().then((token1) => {


              if (fromTokenAddress === token0) {
                let data0 = data[0] / Math.pow(10, fromTokenDecimal)
                let data1 = data[1] / Math.pow(10, toTokenDecimal)

                let test = data1 / data0
                test = test * fromTokenValue
                test = test.toFixed(6)
                setToTokenValue(test)

              }
              if (toTokenAddress === token0) {
                let data0 = data[0] / Math.pow(10, toTokenDecimal)
                let data1 = data[1] / Math.pow(10, fromTokenDecimal)

                let test = data0 / data1
                test = test * fromTokenValue
                test = test.toFixed(6)
                setToTokenValue(test)

              }

            })
          })



        })




      }

      else {
        setMessage("connect metamask")
      }

    }


  }

  const transHistory = (
    hash,
    address,
    type,
    fromToken,
    toToken,
    fromTokenAddress,
    toTokenAddress,
    fromAmount,
    toAmount,
    fromImg,
    toImg
  ) => {



    Contract_Factory.methods.getPair(fromTokenAddress, toTokenAddress).call()
      .then((pair_address) => {
        var Contract_Balance = new web3.eth.Contract(Token_ABI, pair_address);

        const pairInfo = "https://sepolia.etherscan.io/address/" + pair_address;
        Contract_Balance.methods.balanceOf(meta_address).call()
          .then((bal) => {
            Contract_Balance.methods.decimals().call()
              .then((decimal) => {
                var tokenbal_ori = bal / Math.pow(10, decimal);
                var lp_value = tokenbal_ori.toFixed(6);
                let headers = { "Content-Type": "application/json" }


                let data = {
                  user_address: address,
                  from_currency: fromToken,
                  to_currency: toToken,
                  from_address: fromTokenAddress,
                  to_address: toTokenAddress,
                  from_amount: fromAmount,
                  to_amount: toAmount,
                  tx_id: hash,
                  pair_address: pair_address,
                  pairInfo: pairInfo,
                  type: type,
                  lp_value: lp_value,
                  from_img: fromImg,
                  to_img: toImg
                }

                axios.post("https://bakxlxiqwosd.pocketswap.org/api/liquidity/addliquidity", data, headers)
                  .then((data) => {
                    setLoad(false)



                    toast.success('Transaction Success', { autoClose: 3000 })
                    setFromTokenValue(0);
                    setToTokenValue(0);
                    toggle203()


                  })
                  .catch((err) => {
                    setLoad(false)
                    toast.error("Transaction Failed")
                  })



                if (type == "add") {
                  setFromTokenValue(0)
                  setToTokenValue(0)

                } else if (type == "remove") {

                  setTimeout(() => {
                    history.push("/");
                  }, 1000);
                }
              })

          })

      })
  };

  const toLiquidityData = () => {
    to_amount = toTokenValue
    to_amount = amountConvert(toTokenValue, toTokenDecimal);

    if (fromTokenAddress !== undefined && toTokenAddress !== undefined) {
      if (pairAddress == "0x0000000000000000000000000000000000000000") {

        setAData(0)
        setBData(0)
      }
      else {

        if (
          fromTokenAddress != undefined &&
          toTokenAddress != undefined
        ) {

          var Contract_Pair = new web3.eth.Contract(Pair_ABI, pairAddress)
          Contract_Pair.methods.getReserves().call().then((data) => {
            Contract_Pair.methods.token0().call().then((token0) => {
              Contract_Pair.methods.token1().call().then((token1) => {

                if (fromTokenAddress === token0) {
                  let data0 = data[0] / Math.pow(10, fromTokenDecimal)
                  let data1 = data[1] / Math.pow(10, toTokenDecimal)

                  let test = data0 / data1
                  test = test * toTokenValue
                  test = test.toFixed(6)
                  setFromTokenValue(test)



                }
                if (toTokenAddress === token0) {
                  let data0 = data[0] / Math.pow(10, toTokenDecimal)
                  let data1 = data[1] / Math.pow(10, fromTokenDecimal)

                  let test = data1 / data0
                  test = test * toTokenValue
                  test = test.toFixed(6)
                  setFromTokenValue(test)

                }

              })
            })



          })

        }
        else {
          setMessage("connect metamask")
        }
      }

    }
  }

  const refresh = () => {
    setFromTokenValue(0)
    setToTokenValue(0)
  }

  const addLiquidity = async () => {
    setText("Approving the tokens")
    setLoad(true)

    var time = Math.floor(Date.now() / 1000);
    var time1 = txnDeadline;
    var time1 = time1 > 0 ? time1 * 600000 : 1 * 600000;
    var deadline = parseInt(time + 800).toString();

    var new_address;
    var new_value


    if (GWEI == 0) {
      web3.eth.getGasPrice((e, gasPrice) => {
        gas_Price = gasPrice
      });
    } else {
      gas_Price = GWEI + (GWEI * (tolerance / 100));
    }

    if (meta_address != "" && meta_address != undefined) {

      var approve_fn1 = await new web3.eth.Contract(Token_ABI, fromTokenAddress);
      var approve_fn2 = await new web3.eth.Contract(Token_ABI, toTokenAddress);

      var Contract_Liquidity = await new web3.eth.Contract(SwapLiq_ABI, SwapLiq_Address)
      var deposit_function = await new web3.eth.Contract(Test_ABI, new_address)

      to_amount = amountConvert(toTokenValue, toTokenDecimal);
      from_amount = amountConvert(fromTokenValue, fromTokenDecimal);
      const gasLimit = 10000000

console.log(from_amount,"--------",to_amount) 

      if (parseFloat(fromTokenValue) > parseFloat(fromBalance) || parseFloat(toTokenValue) > parseFloat(toBalance)) {
        toast.error("Not Enough Balance")
        setLoad(false)
      } else if (fromTokenName.toLocaleLowerCase() !== "eth" && toTokenName.toLocaleLowerCase() !== "eth") {


        approve_fn1.methods.approve(SwapLiq_Address, from_amount)
          .send({ from: meta_address })
          .on("receipt", (hash) => {


            approve_fn2.methods.approve(SwapLiq_Address, to_amount)
              .send({ from: meta_address })
              .on("receipt", (hash) => {
                setText("Adding Liquidity")


                Contract_Liquidity.methods.addLiquidity([fromTokenAddress, toTokenAddress, meta_address, from_amount, to_amount, 0, 0, deadline])
                  .send({
                    from: meta_address,
                    value: 0,
                    // gasLimit: web3.utils.toHex(gasLimit),
                    gasPrice: gas_Price

                  })
                  .on("receipt", (hash) => {
                    from_amount = from_amount / Math.pow(10, fromTokenDecimal);
                    to_amount = to_amount / Math.pow(10, toTokenDecimal);
                    setTimeout(function () {
                      selectFrom(fromTokenAddress, fromTokenName, fromTokenDecimal, fromTokenImg)
                      selectTo(toTokenAddress, toTokenName, toTokenDecimal, ToTokenImg)
                      transHistory(
                        hash.blockHash,
                        meta_address,
                        "add",
                        fromTokenName,
                        toTokenName,
                        fromTokenAddress,
                        toTokenAddress,
                        from_amount,
                        to_amount,
                        fromTokenImg,
                        ToTokenImg
                      );
                    }, 1000)


                  })
                  .on("error", (err) => {
                    setLoad(false)

                    toast.error('Transaction Cancelled', { autoClose: 10000 })

                  })

              })
              .on("error", (err) => {
                setLoad(false)

                toast.error('Transaction Cancelled', { autoClose: 10000 })

              })

          })
          .on("error", (err) => {
            setLoad(false)
            toast.error('Transaction Cancelled', { autoClose: 10000 })


          })
      } else if (fromTokenName.toLocaleLowerCase() == "eth" || toTokenName.toLocaleLowerCase() == "eth") {
        if (fromTokenName.toLocaleLowerCase() == "eth") {
          new_address = fromTokenAddress
          new_value = from_amount
        }
        if (toTokenName.toLocaleLowerCase() == "eth") {
          new_address = toTokenAddress
          new_value = to_amount
        }
        var deposit_function = await new web3.eth.Contract(Test_ABI, new_address)
        deposit_function.methods.deposit()
          .send({ from: meta_address, value: new_value })
          .on("receipt", (hash) => {

            approve_fn1.methods.approve(SwapLiq_Address, from_amount)
              .send({ from: meta_address })
              .on("receipt", (hash) => {


                approve_fn2.methods.approve(SwapLiq_Address, to_amount)
                  .send({ from: meta_address })
                  .on("receipt", (hash) => {
                    setText("Adding Liquidity")


                    Contract_Liquidity.methods.addLiquidity([fromTokenAddress, toTokenAddress, meta_address, from_amount, to_amount, 0, 0, deadline])
                      .send({
                        from: meta_address,
                        value: 0,
                        // gasLimit: web3.utils.toHex(gasLimit),
                      })
                      .on("receipt", (hash) => {
                        from_amount = from_amount / Math.pow(10, fromTokenDecimal);
                        to_amount = to_amount / Math.pow(10, toTokenDecimal);
                        setTimeout(function () {
                          transHistory(
                            hash.blockHash,
                            meta_address,
                            "add",
                            fromTokenName,
                            toTokenName,
                            fromTokenAddress,
                            toTokenAddress,
                            from_amount,
                            to_amount,
                            fromTokenImg,
                            ToTokenImg
                          );
                        }, 1000)


                      })
                      .on("error", (err) => {
                        setLoad(false)

                        toast.error('Transaction Cancelled', { autoClose: 10000 })

                      })

                  })
                  .on("error", (err) => {
                    setLoad(false)
                    toast.error('Transaction Cancelled', { autoClose: 10000 })

                  })

              })
              .on("error", (err) => {
                setLoad(false)

                toast.error('Transaction Cancelled', { autoClose: 10000 })


              })
          })

      }

    } else {
      setLoad(false)

      toast.warning("Connect Metamask", { autoClose: 10000 })

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

  const liquidityPerToken = () => {
    // 

    Contract_Factory.methods
      .getPair(fromTokenAddress, toTokenAddress)
      .call()
      .then((pair_address) => {
        setPairAddress(pair_address)
      })

    from_amount = amountConvert(1, fromTokenDecimal);
    to_amount = amountConvert(1, toTokenDecimal)

    Contract_Factory.methods
      .getPair(fromTokenAddress, toTokenAddress)
      .call()
      .then((pair_address) => {
        if (pair_address == "0x0000000000000000000000000000000000000000") {
        }
        else {

          var Contract_Pair = new web3.eth.Contract(Pair_ABI, pair_address)
          Contract_Pair.methods.getReserves().call().then((data) => {
            Contract_Pair.methods.token0().call().then((token0) => {
              Contract_Pair.methods.token1().call().then((token1) => {


                if (fromTokenAddress === token0) {
                  let data0 = data[0] / Math.pow(10, fromTokenDecimal)
                  data0 = data0.toFixed(18)
                  let data1 = data[1] / Math.pow(10, toTokenDecimal)
                  data1 = data1.toFixed(18)

                  let test = data1 / data0
                  test = test * 1
                  setAData(test)



                }
                if (toTokenAddress === token0) {
                  let data0 = data[0] / Math.pow(10, toTokenDecimal)
                  data0 = data0.toFixed(18)
                  let data1 = data[1] / Math.pow(10, fromTokenDecimal)
                  data1 = data1.toFixed(18)

                  let test = data0 / data1
                  test = test * 1
                  setAData(test)

                }
                let Pair_fn = new web3.eth.Contract(Pair_ABI, pair_address)
                Pair_fn.methods.totalSupply().call()
                  .then((total_supply) => {
                    Pair_fn.methods.balanceOf(meta_address).call()
                      .then((balance) => {
                        let share_of_pool = balance / total_supply
                        share_of_pool = (share_of_pool.toFixed(3)) * 100
                        setShareOfPool(share_of_pool)

                      })
                  })

              })
            })



          })

        }


      })

    Contract_Factory.methods
      .getPair(fromTokenAddress, toTokenAddress)
      .call()
      .then((pair_address) => {
        if (pair_address == "0x0000000000000000000000000000000000000000") {
          toast.warning("add pair for first time")

          setShareOfPool(0)

          setAData(0)
          setBData(0)
        }
        else {

          if (
            fromTokenAddress != undefined &&
            toTokenAddress != undefined
          ) {

            var Contract_Pair = new web3.eth.Contract(Pair_ABI, pair_address)
            Contract_Pair.methods.getReserves().call().then((data) => {
              Contract_Pair.methods.token0().call().then((token0) => {
                Contract_Pair.methods.token1().call().then((token1) => {

                  if (fromTokenAddress === token0) {
                    let data0 = data[0] / Math.pow(10, fromTokenDecimal)
                    data0 = data0.toFixed(18)
                    let data1 = data[1] / Math.pow(10, toTokenDecimal)
                    data1 = data1.toFixed(18)

                    let test = data0 / data1
                    test = test * 1
                    setBData(test)



                  }
                  if (toTokenAddress === token0) {
                    let data0 = data[0] / Math.pow(10, toTokenDecimal)
                    data0 = data0.toFixed(18)
                    let data1 = data[1] / Math.pow(10, fromTokenDecimal)
                    data1 = data1.toFixed(18)

                    let test = data1 / data0
                    test = test * 1
                    setBData(test)

                  }

                })
              })



            })

          }
          else {
            setMessage("connect metamask")
          }
        }
      })


  }

  const rangeSetting = (value) => {
    let A = (dynamicA * range) / 100
    let B = (dynamicB * range) / 100
    let bal = dynamicBal

    bal = (bal * range) / 100
    bal = bal.toFixed(3)
    setRange(value)
    setDynamicB2(B)
    setDynamicA2(A)
    setDynamicBal2(bal)
  }

  const removeLiquidityData = (data) => {
    let arr = []
    data.forEach((item, i) => {
      let Contract_pair = new web3.eth.Contract(Pair_ABI, item.pair_address)

      Contract_pair.methods.balanceOf(meta_address).call()
        .then((bal) => {
          Contract_pair.methods.decimals().call()
            .then((decimal) => {
              let balance = bal / Math.pow(10, decimal);

              balance = balance.toFixed(10)


              let contract_deciFrom = new web3.eth.Contract(Token_ABI, item.from_address)
              let contract_deciTo = new web3.eth.Contract(Token_ABI, item.to_address)
              contract_deciFrom.methods.decimals().call()
                .then((from_decimal) => {

                  contract_deciTo.methods.decimals().call()
                    .then((to_decimal) => {

                      arr[i] = {}
                      arr[i].pair_name = [item.from_currency, item.to_currency]
                      arr[i].pair_address = item.pair_address
                      arr[i].from_amount = item.from_amount
                      arr[i].to_amount = item.to_amount
                      arr[i].from_token = item.from_currency
                      arr[i].to_token = item.to_currency
                      arr[i].from_address = item.from_address
                      arr[i].to_address = item.to_address
                      arr[i].from_decimal = from_decimal
                      arr[i].to_decimal = to_decimal
                      arr[i].quoteA_value = "0"
                      arr[i].quoteB_value = "0"
                      arr[i].pool_share = "0"
                      arr[i].pair_decimal = decimal
                      arr[i].balance = balance
                      arr[i].from_img = item.from_img
                      arr[i].to_img = item.to_img


                      setTimeout(() => {
                        setLiquidityData(arr)

                      }, 1000);


                    })
                })
            })
        })

    })

  }

  const removeLiquidityOneData = (data) => {
    let arr = []
    arr.push(data)
    setSingleLiquidityData(arr)
    setDynamicBal(data.balance)
    setDynamicA(data.from_amount)
    setDynamicB(data.to_amount)
  }

  const removeLiquidity = (data, e) => {
    e.preventDefault()
    setText("Approving Tokens")
    setLoad(true)
    var A_Address = data.from_address
    var B_Address = data.to_address
    let pair_address = data.pair_address
    var balance = dynamicBal2
    balance == undefined ? balance = dynamicBal : balance = dynamicBal2
    balance = amountConvert(balance, 18)
    var approve_removeLiquidity = new web3.eth.Contract(Pair_ABI, pair_address)


    var time = Math.floor(Date.now() / 1000);
    var time1 = txnDeadline;
    var time1 = time1 > 0 ? time1 * 600000 : 1 * 600000;
    var deadline = parseInt(time + 800).toString();

    if (meta_address != "" && meta_address != undefined) {

      if (GWEI == 0) {
        web3.eth.getGasPrice((e, gasPrice) => {
          gas_Price = gasPrice;
        });
      } else {
        gas_Price = GWEI + GWEI * (tolerance / 100);
      }

      approve_removeLiquidity.methods.approve(SwapLiq_Address, balance)
        .send({ from: meta_address })
        .on("receipt", (hash) => {
          // var promise = new Promise(function (resolve, reject) {
          //   if (hash) {
          //     resolve();
          //   }
          //   else {
          //     reject()
          //   }

          // })
          // promise.
          //   then(function () {

          Contract_Liquidity.methods.removeLiquidity([A_Address, B_Address, balance, 0, 0, reward, meta_address, deadline])
            .send({ from: meta_address })
            .on("receipt", (hash) => {
              setTimeout(function () {
                transHistory(
                  hash.blockHash,
                  meta_address,
                  "remove",
                  data.from_token,
                  data.to_token,
                  A_Address,
                  B_Address,
                  dynamicA2,
                  dynamicB2,
                  data.from_img,
                  data.to_img
                );
              }, 1000)
            })
            .on("error", (err) => {
              setMessage("transaction cancelled")
              setLoad(false)
            })

            //}).
            .catch(function (err) {
              toast.error("Something Went Wrong")

            });




        })
        .on("error", (err) => {
          setLoad(false)
        })

    }
    else {
      setLoad(false)

    }

  }

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
  useEffect(() => {
    if (fromTokenAddress !== undefined && toTokenAddress !== undefined) {
      liquidityPerToken();
    }
  }, [fromTokenAddress, toTokenAddress])


  if (fromTokenName.toLowerCase() == toTokenName.toLowerCase()) {
    setToTokenName("select")


    setAData(0)
    setBData(0)
    setToTokenImg()
    toast.error('Select Different Token', { autoClose: 10000 })

  }


  const addToken = () => {

    let checkContract = web3.utils.isAddress(importAddress)
    if (checkContract) {
      var Contract_Find = new web3.eth.Contract(Token_ABI, importAddress)

      if (meta_address !== "" && meta_address !== undefined) {
        var tokenDec = "";
        var tokenNam = "";
        var tokenSym = "";
        var tokenMg = "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"
        var tokenAddr = importAddress;

        Contract_Find.methods.name().call().then((name) => { tokenNam = name })
        Contract_Find.methods.decimals().call().then((decimal) => tokenDec = decimal)
        Contract_Find.methods.symbol().call().then((symbol) => tokenSym = symbol)



        setTimeout(() => {
          if (tokenDec != "" && tokenNam != "" && tokenSym != "" && tokenMg != "" && tokenAddr != "") {

            const req = JSON.stringify({
              "tokenDecimal": tokenDec,
              "tokenName": tokenNam,
              "tokenSymbol": tokenSym,
              "tokenImg": tokenMg,
              "tokenAddress": tokenAddr,
              // "tokenType": "token",
              // "createdAt": Date.now
            });

            const headers = {
              "Content-Type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "true",
            }
            // ok
            axios.post("https://bakxlxiqwosd.pocketswap.org/api/currency/addcurrency", req, { headers })
              .then((response) => {
                toast.success('Token Added Successfully', { autoClose: 10000 })
                // history.push("/")

              })
              .catch((err) => {
                toast.error("Transaction Cancelled")
              })
          }
        }, 2000)



      }
    }

    else {

      toast.error('Enter Valid Address', { autoClose: 10000 })

    }


  }

  // 在这里做 添加 移除流动性

  return (
    <Fragment>

      <LoadingOverlay active={load} spinner text={text} styles={{

        content: (base) => ({
          ...base,
          color: '#033C6C',
          height: '500px'
        }),
        spinner: (base) => ({
          ...base,
          margin: 'auto auto auto 100px',
          width: '100px',
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
                  <div className="row justify-content-center mx-0">
                    <div className="col-xl-7 Liq-main-xb my-5">
                      <div className="LiqRdsl mb-4">
                        <a onClick={() => histories.push("/swap")} className="btn LiqRdslbtn">Swap</a>
                        <a href="#" className="btn LiqRdslbtn active">Liquidity</a>
                      </div>
                      <div
                        className={` BrdRdsGrdtn mt-5 ${liq1 ? "d-none" : null
                          }`}
                      >

                        <div className="LiqHdd">
                          <div>
                            <h4 className="Tx20M033c">Liquidity</h4>
                            <p className="Tx14R033op">
                              Add Liquidity to receive LP Tokens

                            </p>
                          </div>
                          <div>
                            <a className="LiqMdlicon mr-2 cursor-pointer">
                            </a>

                          </div>
                        </div>
                        <div className="LiqHdd">
                          <h4 className="Tx20M033c">Your Liquidity</h4>
                        </div>
                        {liquidityData && liquidityData.map((data, i) => {
                          return (
                            <div className="LiqBox" /*key={i}*/>
                              {data.balance > 0.0001 ? (
                                <>
                                  <div
                                    className="d-flex justify-content-between align-items-center bg-collapse cursor-pointer"
                                    onClick={toggle3}
                                  >
                                    <div className="d-flex align-items-center">
                                      <label className="Tx15M033">
                                        {data.pair_name}<br></br>
                                        <span className="Tx14R033">{data.balance}</span>
                                      </label>
                                    </div>
                                    <div className="LqCollp">
                                      <a className="navbar-toggle collapsed">
                                        <span id={"show-hide-col" + i}>
                                          <img
                                            src={liqarrowiconImg}
                                            className="Lqcollp-arr"
                                          />
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <UncontrolledCollapse toggler={"#show-hide-col" + i} className="LqBg10Rfbf6 " >
                                    <Card>
                                      <CardBody>
                                        <div className="row align-items-center">
                                          <div className="col-sm-6 col-lg-6 col-xl-6 col-md-6">
                                            <img src={data.to_img} className="mr-3" />
                                            <label className="Tx14R033">Pooled {data.from_token}</label>
                                          </div>
                                          <div className="col-sm-6 col-lg-6 col-xl-6 col-md-6 text-xl-right text-sm-right">
                                            <label className="Tx14R033 val">{data.from_amount}</label>
                                          </div>
                                        </div>
                                        <div className="row mt-2  align-items-center">
                                          <div className="col-sm-6 col-lg-6 col-xl-6 col-md-6">
                                            <img src={data.from_img} className="mr-3" />
                                            <label className="Tx14R033">
                                              Pooled {data.to_token}
                                            </label>
                                          </div>
                                          <div className="col-sm-6 col-lg-6 col-xl-6 col-md-6 text-xl-right text-sm-right">
                                            <label className="Tx14R033">{data.to_amount}</label>
                                          </div>
                                        </div>
                                        <div className="row mt-2  align-items-center">
                                          <div className="col-sm-6 col-lg-6 col-xl-6 col-md-6">

                                          </div>
                                          <div className="col-sm-6 col-lg-6 col-xl-6 col-md-6 text-xl-right text-sm-right">

                                          </div>
                                          <div className="col-sm-12 col-xl-12 col-lg-12 text-center col-md-12 mt-3">
                                            <div className="mb-4">
                                              <button
                                                className="btn Lqbtn Lqbtn135 mr-2 mb-2"
                                                type="button" onClick={() => {
                                                  setLiq2(!liq2);
                                                  setLiq1(!liq1);
                                                  setFromTokenName(data.from_token);
                                                  setToTokenName(data.to_token);
                                                  setFromTokenAddress(data.from_address);
                                                  setToTokenAddress(data.to_address);
                                                  setFromTokenImg(data.from_img);
                                                  setToTokenImg(data.to_img);
                                                  setFromTokenDecimal(data.from_decimal);
                                                  setToTokenDecimal(data.to_decimal);
                                                }}>Add Liquidity</button>
                                              <button
                                                className="btn Lqbtn Lqbtn135 mb-2"
                                                type="button"
                                                onClick={() => {
                                                  setLiq3(!liq3);
                                                  setLiq1(!liq1);
                                                  removeLiquidityOneData(data)
                                                }}
                                              >
                                                Remove
                                              </button>
                                            </div>

                                          </div>
                                        </div>

                                      </CardBody>
                                    </Card>
                                  </UncontrolledCollapse>
                                </>) : (<div className="row align-items-center">  <div className="col-sm-12 col-lg-12 col-xl-12 col-md-12"><label className="Tx14R033">Remove liquidity Available for LP greater than 0.0001 </label></div></div>)}

                            </div>

                          )
                        })}

                        <div className="LiqBox">

                        </div>
                        <div className="IpPl">
                          <p>Don't see a pool you joined? <span>Import it.</span></p>
                          <p>Or, if you staked your LP tokens in a farm, unstake them<br />
                            to see them here.</p>
                        </div>
                        <div className="text-center mt-4">
                          <button
                            className="btn Lqbtn w-100"
                            type="button"
                            onClick={() => {
                              setLiq2(!liq2);
                              setLiq1(!liq1);
                            }}
                          >
                            Add Liquidity
                          </button>

                        </div>
                      </div>


                      <div
                        className={`Liq-main-xb BrdRdsGrdtn p-0 mt-5 ${liq2 ? "d-none" : null
                          }`}
                      >


                        <div className="LiqHdd mb-4">
                          <h4 className="Tx20M033c mx-2">Add Liquidity</h4>
                          <a className="LiqMdlicon cursor-pointer" onClick={toggle2}><img src={liqmdlicon1Img} style={{ 'marginLeft': '400px' }} /></a>
                          <a className="LiqMdlicon cursor-pointer" onClick={toggle1}><img src={liqmdlicon2Img} /></a>

                        </div>
                        <div className="LiqBox pt-0">
                          <div className="LqBg10Rfbf6 p-4" style={{ borderRadius: "10px" }}>
                            <div className="d-flex justify-content-between align-items-end flex-wrap">
                              <div className="mb-0">
                                <div className="LqAdInp form-group mb-0">
                                  <input
                                    className="input form-control pl-0 border-0"
                                    type="text"
                                    placeholder="0.00"
                                    value={fromTokenValue}
                                    onKeyUp={fromLiquidityData}

                                    readOnly={staticContent ? "readonly" : null}
                                    onChange={(e) => {
                                      const amount = e.target.value;
                                      var regexp = new RegExp(
                                        "^[0-9]*[.]?[0-9]*$"
                                      );
                                      if (regexp.test(amount)) {
                                        setFromTokenValue(amount);
                                      }
                                    }}
                                  />
                                </div>

                              </div>
                              <div><p className="Tx12R033op mb-2 text-left">
                                Balance: {fromBalance}
                              </p>
                                <div
                                  className="d-flex align-items-center mb-2"
                                  onClick={toggle10}
                                >
                                  <div className="">
                                    <img src={fromTokenImg} className="mr-2" height="30px" width="30px" style={{ borderRadius: "50%" }} />

                                  </div>
                                  <div className="">
                                    <p className="Tx15M033 mb-0">{fromTokenName}</p>
                                  </div>
                                  <div className="ml-3">
                                    <img src={liqarrowlefticonImg} className="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-center mt-3">
                            <img src={addliqplusImg} />
                          </div>
                          <div className="LqBg10Rfbf6 mt-3 mb-4 p-4" style={{ borderRadius: "10px" }}>
                            <div className="d-flex justify-content-between align-items-end flex-wrap">
                              <div className="mb-0">
                                <div className="LqAdInp form-group mb-0">
                                  <input
                                    className="input form-control pl-0 border-0"
                                    type="text"
                                    placeholder="0.00"
                                    value={toTokenValue}
                                    onKeyUp={toLiquidityData}
                                    readOnly={staticContent ? "readonly" : null}

                                    onChange={(e) => {
                                      const amount = e.target.value;
                                      var regexp = new RegExp(
                                        "^[0-9]*[.]?[0-9]*$"
                                      );
                                      if (regexp.test(amount)) {
                                        setToTokenValue(amount);
                                      }
                                    }}
                                  />
                                </div>
                              </div>
                              <div><p className="Tx12R033op mb-2 text-left">
                                Balance: {toBalance}
                              </p>
                                <div
                                  className="d-flex align-items-center mb-2"
                                  onClick={toggle11}
                                >
                                  <div className="">
                                    <img src={ToTokenImg} className="mr-2" height="30px" width="30px" style={{ borderRadius: "50%" }} />
                                  </div>
                                  <div className="">
                                    <p className="Tx15M033 mb-0">{toTokenName}</p>
                                  </div>
                                  <div className="ml-3">
                                    <img src={liqarrowlefticonImg} className="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="LqPrsPlls mt-3">
                            <p className="Tx15M033" style={{ color: "#708DB7" }}>Prices and Pool Share</p>
                            <div className="LqBg10Rfbf6 ">
                              <div className="row">
                                <div className="col-md-4 p-3">
                                  <div className="text-center ">
                                    <h4 className="Tx14M033">{aData.toFixed(6)}</h4>
                                    <p className="Tx14M033op">{toTokenName} per {fromTokenName}</p>
                                  </div>
                                </div>
                                <div className="col-md-4 p-3">
                                  <div className="text-center ">
                                    <h4 className="Tx14M033">{bData.toFixed(6)}</h4>
                                    <p className="Tx14M033op">{fromTokenName} per {toTokenName}</p>
                                  </div>
                                </div>
                                <div className="col-md-4 p-3">
                                  <div className="text-center ">
                                    <h4 className="Tx14M033">{shareOfPool} %</h4>
                                    <p className="Tx14M033op">Share of Pool</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-4">

                          <button className="btn Lqbtn Lqbtn135 mb-3  d-block w-100" disabled={fromTokenValue <= 0 || toTokenValue <= 0} type="button" onClick={addLiquidity}>
                            Supply
                          </button>
                        </div>

                      </div>


                      <div className={`Swp-main mt-5 ${liq3 ? "d-none" : null}`}>
                        {singleLiqudityData ? singleLiqudityData.map((data, i) => {
                          return (
                            <div className="Liq-main-xb BrdRdsGrdtn mb-4" key={i}>
                              <div className="LiqHdd ">
                                <div>
                                  <h4 className="Tx20M033c">Remove Liquidity</h4>
                                  <p className="Tx14R033op">
                                    Remove Liquidity to receive Tokens Back
                                  </p>

                                </div>
                                <div className="d-flex ">
                                  <a className="LiqMdlicon mr-2 " onClick={toggle101}>
                                    <button className=" font-weight-bold btn BtnRng ">Reward Token :{rewardTokenName} </button>
                                  </a>

                                  <a onClick={toggle2} className="LiqMdlicon mr-2 mt-2">
                                    <img src={liqmdlicon1Img} />
                                  </a>
                                  <a onClick={toggle1} className="LiqMdlicon mt-2">
                                    <img src={liqmdlicon2Img} />
                                  </a>
                                </div>
                              </div>

                              <div className="LiqBox">
                                <div className="LqBg10Rfbf6 mt-3">
                                  <div className="RmLqRng">



                                    <div className="RmLqBtns mb-4">
                                      <div className="d-flex justify-content-between flex-wrap">
                                        <div className="" onClick={() => { setRange(25); setDynamicA2((dynamicA * 25) / 100); setDynamicB2((dynamicB * 25) / 100); setDynamicBal2(((dynamicBal * 25) / 100).toFixed(3)) }}>
                                          <button className="btn BtnRng">25%</button>
                                        </div>
                                        <div className="" onClick={() => { setRange(50); setDynamicA2((dynamicA * 50) / 100); setDynamicB2((dynamicB * 50) / 100); setDynamicBal2(((dynamicBal * 50) / 100).toFixed(3)) }}>
                                          <button className="btn BtnRng">50%</button>
                                        </div>
                                        <div className="" onClick={() => { setRange(70); setDynamicA2((dynamicA * 75) / 100); setDynamicB2((dynamicB * 75) / 100); setDynamicBal2(((dynamicBal * 75) / 100).toFixed(3)) }}>
                                          <button className="btn BtnRng">75%</button>
                                        </div>
                                        <div className="" onClick={() => { setRange(100); setDynamicA2(dynamicA); setDynamicB2(dynamicB); setDynamicBal2(dynamicBal) }}>
                                          <button className="btn BtnRng">Max</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="RmLqDet">
                                    <div className="d-flex justify-content-between flex-wrap mb-2">
                                      <p className="Tx14R033 mb-0">
                                        <span>
                                          <img src="" className="mr-2" />
                                        </span>
                                        Available LP
                                      </p>
                                      <p className="Tx14M033 mb-0">{dynamicBal2 ? dynamicBal2 : dynamicBal}</p>
                                    </div>
                                    <div className="d-flex justify-content-between flex-wrap mb-2">
                                      <p className="Tx14R033 mb-0">
                                        <span>
                                          <img src={data.from_img} className="mr-2" height="30px" width="30px" style={{ borderRadius: "50%" }} />
                                        </span>
                                        {data.from_token}
                                      </p>
                                      <p className="Tx14M033 mb-0">{dynamicA2 ? dynamicA2 : dynamicA}</p>
                                    </div>
                                    <div className="d-flex justify-content-between flex-wrap mb-2">
                                      <p className="Tx14R033 mb-0">
                                        <span>
                                          <img src={data.to_img} className="mr-2" height="30px" width="30px" style={{ borderRadius: "50%" }} />
                                        </span>
                                        {data.to_token}
                                      </p>
                                      <p className="Tx14M033 mb-0">{dynamicB2 ? dynamicB2 : dynamicB}</p>
                                    </div>

                                  </div>
                                </div>
                              </div>
                              <div className="text-center mt-4">
                                <button
                                  className="btn Lqbtn Lqbtn135 disabled mb-2 mx-1"
                                  type="button"
                                  onClick={() => { history.push("/") }}

                                >
                                  Cancel
                                </button>
                                <button
                                  className="btn Lqbtn Lqbtn135  mb-2 mx-1"
                                  type="button"
                                  onClick={() => { let a = []; a.push(data); setFinalLiquidData(a); toggle() }}
                                >
                                  Approve
                                </button>
                              </div>


                            </div>
                          )
                        }) : null}

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
            Confirm
          </ModalHeader>
          <button className="btn close1" onClick={toggle}>
            <img src={closeImg} />
          </button>
          <ModalBody className="selecttoken-block">
            {finalLiquidData ? finalLiquidData.map((data, i) => {

              return (
                <div class="row" key={i}>
                  <div class="col-md-12">
                    <form>
                      <div>
                        <label class="font-15 d-block  fw-600 mb-3  primary-text">
                          You will Receive
                        </label>
                        <label class="font-15  fw600 mb-2  primary-text">
                          {dynamicBal2}
                        </label>
                        <label class="font-15 d-block fw-400 mb-2  primary-text">
                          {data.from_token}/{data.to_token} Pool Tokens
                        </label>
                        <p class="font-14 mt-3 fw-400  grey-text" style={{ fontStyle: "italic" }}>
                          Output is estimated. If the price changes by more than 0.8%
                          your transaction will revert.
                        </p>
                      </div>
                      <div style={{ background: "#F5F5F5", borderRadius: "20px" }} className="p-3">
                        <div class="d-flex mt-3 align-items-center justify-content-between ">
                          <label class="font-14  fw-400  grey-text">
                            {data.from_token} Deposited
                          </label>
                          <label class="font-14  fw-400  primary-text">
                            {data.from_amount} {data.from_token}
                          </label>
                        </div>
                        <div class="d-flex mt-2 align-items-center justify-content-between ">
                          <label class="font-14  fw-400  grey-text">
                            {data.to_token} Deposited
                          </label>
                          <label class="font-14  fw-400 primary-text">
                            {data.to_amount} {data.to_token}
                          </label>
                        </div>
                        <div class="d-flex mt-2 align-items-center justify-content-between ">

                        </div>

                      </div>
                      <div class="text-center mt-4" >
                        <button class="btn primary-btn font-15 fw-600 w-100 conf-supp-btn" onClick={(e) => { removeLiquidity(data, e); toggle() }}>
                          Confirm Supply
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )
            }) : null}

          </ModalBody>
        </Modal>

        <Modal
          isOpen={modal1}
          toggle={toggle1}
          className="con-wal-modal recent-transaction"
        >
          <ModalHeader toggle={toggle1} className="border-bottom-0">
            Recent Transactions
          </ModalHeader>
          <button className="btn close1" onClick={toggle1}>
            <img src={closeImg} />
          </button>
          <ModalBody className="selecttoken-block">

            {liqudityHistory.map((data, i) => {

              return (
                <div class="row" key={i}>
                  <div class="col-md-12">
                    <form>
                      <div class="mt-2">
                        <div class="d-xl-flex d-sm-flex align-items-center justify-content-between bg-token px-3 py-3 mt-2">
                          <label class="font-14  fw-400 mb-0 grey-text">
                            Liquidity {data.from_amount} {data.from_currency} for {data.to_amount} {data.to_currency}
                          </label>
                          <div>
                            <a href={`https://sepolia.etherscan.io/tx/${data.tx_id}`}> <img src={forwardImg} class="mr-2 hover-forward" /></a>
                            <img src={successImg} />
                          </div>
                        </div>


                      </div>
                    </form>
                  </div>
                </div>
              )
            })
            }

          </ModalBody>
        </Modal>

        <Modal
          isOpen={modal2}
          toggle={toggle2}
          className="con-wal-modal recent-transaction"
        >
          <ModalHeader toggle={toggle2} className="border-bottom-0">
            Settings
          </ModalHeader>
          <button className="btn close1" onClick={toggle2}>
            <img src={closeImg} />
          </button>
          <ModalBody className="selecttoken-block">
            <div class="row">
              <div class="col-md-12">
                <form>
                  <label class="font-15 d-block fw-500 mb-3  primary-text">
                    Default Transaction Speed (GWEI)<img src={infoImg} className="ml-2" />
                  </label>
                  <div class="row">
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xl-4">
                      <div class="bg-tokenn px-3 py-2 text-center" onClick={() => { setGWEI(5); toggle2() }}>
                        <label>
                          Standard (5)
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xl-4">
                      <div class="bg-tokenn px-3 py-2 text-center" onClick={() => { setGWEI(6); toggle2() }}>
                        <label>
                          Fast (6)
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xl-4">
                      <div class="bg-tokenn px-3 py-2 text-center" onClick={() => { setGWEI(7); toggle2() }}>
                        <label>
                          Instant (7)
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-md-12">
                <form>
                  <label class="font-15 d-block fw-500 mb-3  primary-text">
                    Slippage Tolerance
                  </label>

                  <div class="row">
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xl-4" onClick={() => { setTolerance(0.5); toggle2() }}>
                      <div class="bg-token px-3 py-2 text-center">
                        <label class="font-14  fw-500 mb-0 primary-text">
                          0.5%
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xl-4" onClick={() => { setTolerance(1); toggle2() }}>
                      <div class="bg-token px-3 py-2 text-center">
                        <label class="font-14  fw-500 mb-0 primary-text">
                          1%
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xl-4" onClick={() => { setTolerance(2); toggle2() }}>
                      <div class="bg-token px-3 py-2 text-center">
                        <label class="font-14  fw-500 mb-0 primary-text">
                          2%
                        </label>
                      </div>
                    </div>
                  </div>
                  <label class="font-15 mt-4 d-block fw-500 mb-3  primary-text">
                    Transaction Deadline
                  </label>

                  <div class="d-flex align-items-center active">
                    <div class="bg-token px-5 py-2 text-center mr-3 active">
                      <input type="text" placeholder="0" value={txnDeadline} maxLength="3"
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
                </form>
              </div>
            </div>
          </ModalBody>
        </Modal>

        <Modal isOpen={modal10} toggle={toggle10} className="con-wal-modal">
          <ModalHeader toggle={toggle10} className="border-bottom-0">
            Select Token
          </ModalHeader>
          <button className="btn close1" onClick={toggle10}>
            <img src={closeImg} />
          </button>
          <ModalBody className="selecttoken-block">
            <div class="row">
              <div class="col-md-12">
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control font-14"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Search"
                      onChange={(e) => fromSearch(e)}
                    />
                  </div>
                  <div class="mt-4">
                    {fromTokenList.map((data, i) => {
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
                              toggle10();
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
                  </div>
                </form>
                {/* 外侧的添加token，添加的是地址 */}
                <div class="text-center py-2">
                  <button className="btn-dblue btn Lqbtn btn-13550 w-100 py-3" onClick={() => { toggle88(); toggle10() }}>Add Token(Symbol)</button>
                </div>
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
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control font-14"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Search"
                      onChange={(e) => toSearch(e)}

                    />
                  </div>
                  <div class="mt-4">
                    {toTokenList.map((data, i) => {
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
                <div class="text-center py-3">
                  <button className="btn-dblue btn Lqbtn btn-13550 w-100 py-3" onClick={() => { toggle88(); toggle11() }}>Add Token</button>
                </div>

              </div>
            </div>
          </ModalBody>

          <Modal isOpen={modal55} toggle={toggle55} className="con-wal-modal modal-dialog-centered">
            <ModalHeader toggle={toggle55} className="border-bottom-0 justify-content-center">Add Tokens</ModalHeader>

            <ModalBody className="pt-0">
              <div class="altTx text-center">

                {message}
              </div>
            </ModalBody>
          </Modal>
        </Modal>

        <Modal isOpen={modal88} toggle={toggle88} className="con-wal-modal modal-sm">
          <ModalHeader toggle={toggle88} className="border-bottom-0">Add Token</ModalHeader>

          <ModalBody className="">
            {/* 添加符号 */}
            <div class="col">
              <input type="colour" onChange={(e) => setImportAddress(e.target.value)} className="input form-control pl-0  border border-primary" />
              <div class="text-center py-2">
                <button className="btn-dblue btn Lqbtn btn-13550 w-100 py-2" onClick={() => { addToken(); toggle88() }}>Add Token(Address)</button>
              </div>
            </div>
          </ModalBody>
        </Modal>

        <Modal isOpen={modal101} toggle={toggle101} className="con-wal-modal">
          <ModalHeader toggle={toggle101} className="border-bottom-0">
            Select Reward Token
          </ModalHeader>
          <button className="btn close1" onClick={toggle101}>
            <img src={closeImg} />
          </button>
          <ModalBody className="selecttoken-block">
            <div class="row">
              <div class="col-md-12">
                <form>

                  <div class="mt-4">
                    {rewardTokens.map((data, i) => {
                      return (

                        <div class="mt-4" key={i}>
                          <div
                            onClick={() => {
                              setReward(
                                data.tokenAddress,
                              );
                              setRewardTokenName(data.tokenName)
                              toggle101();
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
                  </div>
                </form>

              </div>
            </div>
          </ModalBody>
        </Modal>

        <Modal isOpen={modal201} toggle={toggle201} className="con-wal-modal">
          <ModalHeader toggle={toggle201} className="border-bottom-0">
            Are you sure want to Continue?
          </ModalHeader>
          <button className="btn close1" onClick={toggle201}>
            <img src={closeImg} />
          </button>
          <ModalBody className="pt-0">

            <div class="form-row justify-content-between">
              <div class="col-auto i5100">
                <button className="btn btn-dblue btn-16050 my-1 mdlBtn" onClick={(e) => { toggle201() }}>
                  cancel
                </button>
              </div>

              <div class="col-auto i5100">
                <button className="btn btn-danger btn-16050 my-1 mdlBtn" >
                  Approve
                </button>
              </div>
            </div>

          </ModalBody>
        </Modal>

        <Modal isOpen={modal202} toggle={toggle202} className="con-wal-modal cnfimgpop">
          <ModalHeader toggle={toggle202} className="border-bottom-0">
            Waiting for confirmation
          </ModalHeader>
          <button className="btn close1" onClick={toggle202}>
            <img src={closeImg} />
          </button>
          <ModalBody className="selecttoken-block">
            <img src={cnfimg} className="my-3 mx-auto d-block" />
            <p>Supplying 0.24656 BTC and 20 ADA</p>
            <span>Confirm the transaction in your wallet.</span>
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
};

export default Liquidity;
