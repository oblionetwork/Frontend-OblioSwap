/*eslint-disable*/
import React, { Fragment, Component, useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container, Modal, ModalHeader, ModalBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import "./css/header.scss";
import { toast, ToastContainer } from "react-toastify";
//Images
import logoImg from '../../assets/images/logo.png';
import cnfimg from '../../assets/images/cnfimg.png';
import xpocketTransparent from "../../assets/images/xpocketTransparent.png"

import metamaskImg from '../../assets/images/metamask.png';
import closeImg from '../../assets/images/close.png';
import prodImg from '../../assets/images/prod.png';
import prod1Img from '../../assets/images/prod1.png';
import prod2Img from '../../assets/images/prod2.png';
import xpocket from "../../assets/images/xpocket.png"
import ChainSelect from '../../components/ChainSelect';
import { getAvailableChainFlag } from '../../utils';
import { useWeb3React } from '@web3-react/core';

const Web3 = require("web3");
const web3 = new Web3(window.ethereum);

const Header = (props) => {

  const history = useHistory()

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modal55, setModal55] = useState(false);
  const toggle55 = () => setModal55(!modal55);

  const [modal99, setModal99] = useState(false);
  const toggle99 = () => setModal99(!modal99);

  const [scroll, setScroll] = useState(false);

  const [message, setMessage] = useState("Error")
  const [render, setRender] = useState(1)


  const histories = useHistory()



  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const context = useWeb3React()
  const { chainId } = context


  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const netId = await window.ethereum.request({ method: "eth_chainId" });

        if (parseInt(netId, 16) == 11155111) {

          await window.ethereum.request({ method: "eth_requestAccounts" })
          const accounts = await web3.eth.getAccounts();

          let acc = accounts[0].toLowerCase()

          localStorage.setItem("metaAddress", JSON.stringify(acc));


          setTimeout(() => {
            toast.success("Metamask Connected Successfully")

            setRender(render + 1)

          }, 100);

        } else {
          alert("Connect To sepolia Network")

          setTimeout(() => {
            window.location.reload()

          }, 1000);
          return false;
        }
      } catch (e) {
        toast.error('No metamask Detected')


      }
    }
  }



  const disconnectMetaMask = async () => {
    localStorage.clear()
    history.push("/")

  }
  let address = localStorage.getItem("metaAddress");


  if (address) {
    window.ethereum.on('networkChanged', function (networkId) {
      if (!getAvailableChainFlag(networkId)) {

        localStorage.clear()
        history.push("/")

        window.location.reload()
      }


    })

    window.ethereum.on('accountsChanged', function (accounts) {
      localStorage.clear()
      history.push("/")
      let acc = accounts[0].toLowerCase()
      localStorage.setItem("metaAddress", JSON.stringify(acc));

      window.location.reload()
    })
  }

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Fragment>
      <header className="com-head">
        <Navbar expand="xl" className={colorChange ? 'navbar colorChange fixed-top' : 'navbar fixed-top'}>
          <Container>
            <NavbarBrand href="/" className='mr-5'>
              <img width="35px" height="30px" src={xpocketTransparent} />
            </NavbarBrand>
            <NavbarToggler onClick={toggleNav} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto  align-items-center" navbar>

                <NavItem>
                  <Link to="/swap">Trade</Link>
                </NavItem>
                <NavItem>
                  <Link to="/liquidity">Earn</Link>
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                      More
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={() => histories.push("/about")}>About Pocket Swap</DropdownItem>

                      <DropdownItem onClick={() => histories.push("/about")}>Pocket Token</DropdownItem>
                      <DropdownItem onClick={() => histories.push("/about")}>Next-Gen Staking</DropdownItem>

                      <DropdownItem onClick={() => histories.push("/news")}>Events & News</DropdownItem>
                      <DropdownItem onClick={() => { window.location.assign("https://www.pocketswap.org/services") }} >Apply For Listing</DropdownItem>
                      <DropdownItem onClick={() => { window.location.assign("https://www.pocketswap.org/services") }}>Promo Banners</DropdownItem>

                      <DropdownItem>Audit</DropdownItem>
                      <DropdownItem onClick={() => histories.push("/newsdetails")}>Docs</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                      <img src={prodImg} className="mr-2" />Xpocket Products
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem className='text-left' onClick={() => { window.location.assign("https://www.xpocket.finance") }}><img src={prod2Img} className="mr-2" />Decentralized Mobile Wallet App</DropdownItem>
                      <DropdownItem className='text-left' onClick={() => { window.location.assign("https://www.xpocket.finance") }}><img src={prod1Img} className="mr-2" />Crypto P2E Mobile Games</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
              </Nav>
              {address === null || address === "undefined" ? (
                <button className="btn con-wal-btn" onClick={connectMetaMask}>
                  Connect Wallet
                </button>
              ) : (
                <button className="btn con-wal-btn " onClick={toggle55}>{address.slice(1, 5) + "....." + address.slice(39, 43)}</button>
              )}

            </Collapse>
          </Container>
        </Navbar>
      </header>

      <Modal isOpen={modal} toggle={toggle} className="con-wal-modal modal-sm">
        <button className="btn close2" onClick={toggle}><img src={closeImg} /></button>
        <ModalBody className="p-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <img src={metamaskImg} className="mx-auto d-block mb-3" />
              <label className="b-block font-15 primary-text fw-500 mb-3">Metamask</label>
            </div>
          </div>
        </ModalBody>
      </Modal>


      <Modal isOpen={modal55} toggle={toggle55} className="con-wal-modal modal-dialog-centered">
        <ModalHeader toggle={toggle55} className="border-bottom-0">Are you sure want to Disconnect?</ModalHeader>

        <ModalBody className="pt-0">

          <div class="form-row justify-content-between">
            <div class="col-auto i5100">
              <button className="btn btn-dblue btn-16050 my-1 mdlBtn" onClick={(e) => { e.preventDefault(); toggle55() }}>
                cancel
              </button>
            </div>

            <div class="col-auto i5100">
              <button className="btn btn-danger btn-16050 my-1 mdlBtn" onClick={() => { disconnectMetaMask(); toggle55() }}>
                Disconnect Wallet
              </button>
            </div>
          </div>

        </ModalBody>
      </Modal>

      <Modal isOpen={modal99} toggle={toggle99} className="con-wal-modal modal-dialog-centered">
        <ModalHeader toggle={toggle99} className="border-bottom-0 justify-content-center">Alert</ModalHeader>

        <ModalBody className="pt-0">
          <div class="altTx text-center">
            {message}
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
  // }
}

export default Header;
