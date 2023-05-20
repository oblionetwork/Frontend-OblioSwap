import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import "./css/pagenotfound.scss";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import pnfImg from '../../assets/images/404.png';

const Terms = (props) => {
  return (
    <Fragment>
      <div class="cms d-flex justify-content-center align-items-center vh-100 px-3">
        <div class="text-center">
          <img src={pnfImg} class="img-fluid" alt="" />
          <div>
            <a href="#">Back To Home</a>

          </div>
        </div>
      </div>
    </Fragment>
  );

}

export default Terms;