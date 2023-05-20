import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import InputRange from 'react-input-range';
import "./css/sample.scss";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";


const Liquidity = (props) => {

  const [value, setValue] = useState({ min: 2, max: 10 })

  return (
    <Fragment>
      <Header />
      <div className="cnt-load-div">
        <div className="container-fluid p-0">
          <div className="cnt-div">
            <div className="liqpage">
              Sample

              <InputRange
                maxValue={20}
                minValue={0}
                value={value}
                onChange={value => setValue(value)} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );

}

export default Liquidity;