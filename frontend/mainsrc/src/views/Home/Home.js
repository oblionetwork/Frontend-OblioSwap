import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/home.scss";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import phoneImg from '../../assets/images/phone.png';
import usersImg from '../../assets/images/users.png';
import tradesImg from '../../assets/images/trades.png';
import iosImg from '../../assets/images/ios.png';
import antroidImg from '../../assets/images/android.png';
import mobImg from '../../assets/images/mob.png';
import test1 from "../../assets/images/bph1.png"
import test2 from "../../assets/images/bph2.png"
import slide1Img from "../../assets/images/slide1.png"
import slide2Img from "../../assets/images/slide2.png"
import slide3Img from "../../assets/images/slide3.png"
import bnbImg from "../../assets/images/bnb.png"
import kucImg from "../../assets/images/kuc.png"
import bnsImg from "../../assets/images/bns.png"
import credImg from "../../assets/images/cred.png"
import axios from "axios";

const Web3 = require("web3");
const web3 = new Web3(window.ethereum);

const Home = (props) => {
  const [modal99, setModal99] = useState(false);
  const toggle99 = () => setModal99(!modal99);

  const [message, setMessage] = useState("Error")
  const [test, setTest] = useState(1)

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://bakxlxiqwosd.pocketswap.org/api/sitesettings/getsitesettings")
      .then((res) => {
        setData(res.data.result)
      })
  }, [])


  const history = useHistory()


  let address = localStorage.getItem("metaAddress");

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {

      try {
        const netId = await window.ethereum.request({ method: "eth_chainId" });

        if (parseInt(netId, 16) == 3) {
          await window.ethereum.enable();

          await window.ethereum.request({ method: "eth_requestAccounts" })
          const accounts = await web3.eth.getAccounts();

          localStorage.setItem("metaAddress", JSON.stringify(accounts[0]));
          history.push("/")

          setTest(test + 1)

          setTimeout(() => {
            setMessage("Metamask Connected Successfully")
            toggle99()
          }, 1000);

        } else {
          setMessage("select Ropsten Network")
          toggle99()
          setTimeout(() => {
            window.location.reload()

          }, 1000);
          return false;
        }
      } catch (e) {
        setMessage("No metamask Detected")
        toggle99()

      }
    }
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Fragment>
      <Header />
      <div className="cnt-load-div">
        <div className="container-fluid p-0">
          <div className="cnt-div">
            <div className="homepage">
              <div className="container-fluid p-0">
                <div className="banner">
                  <div className="container">
                    <h1>{data?data.siteName: "Pocket Swap"}</h1>
                    <p>Trade and Earn in Seconds</p>
                    <div className="wal-btn-div">
                      {/* {address && address.length > 0 ? <button className="btn con-wal-btn mx-2" >Wallet Connected</button> : <button className="btn con-wal-btn mx-2" onClick={() => { connectMetaMask() }}>Connect Wallet</button>
                      } */}
                      <Link to="/swap"> <button className="btn swap-btn mx-2">Trade Now</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white container-fluid p-0">
                <div className="container">
                  <Slider {...settings} className="ccsld">
                    <img src={slide1Img} />
                    <img src={slide2Img} />
                    <img src={slide3Img} />
                    <img src={slide1Img} />
                    <img src={slide2Img} />
                    <img src={slide3Img} />
                    <img src={slide1Img} />
                    <img src={slide2Img} />
                    <img src={slide3Img} />
                  </Slider>
                </div>
               
                <div className="container">
                  <div className="user-cnt-div row py-5 align-items-center">
                    <div className="col-lg-6 w-100">
                      <h3>
                        Built on OKC & Ethereum
                      </h3>
                    
                    </div>
                    <div className="col-lg-6">
                      <img src={test2} className="w-100" />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="currency-div row align-items-center">
                    <div className="col-lg-5">
                      <img src={mobImg} className="img-fluid mx-auto d-block" />
                    </div>
                    <div className="col-lg-7">
                      <h3>Pocket Swap and Yield farming will be soon  available on XPocket App </h3>
                     
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="stginv">
                <div className="container">
                  <div className="stginvdt p-5 mb-5">
                    <h1>Our Strategic Investor</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ridiculus dolor orci lorem pulvinar. Eget faucibus quis quam sodales sit est magna. In tellus in sed nunc iaculis magna at. Sed fames mauris non augue feugiat .</p>
                    <button className="btn dtbtn">Details</button>
                  </div>
               
                  <div className="exg row justify-content-center">
                    <div className="col-lg-12">
                      <h3 className="mb-4">Xpocket Partners</h3>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <img src={bnbImg} className="img-fluid mb-3" />
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <img src={kucImg} className="img-fluid mb-3" />
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <img src={bnsImg} className="img-fluid mb-3" />
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <img src={credImg} className="img-fluid mb-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );

}

export default Home;