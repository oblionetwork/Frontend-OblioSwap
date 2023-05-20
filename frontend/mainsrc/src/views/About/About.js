import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import "./css/about.scss";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import aboutImg from '../../assets/images/about.png';

const About = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="cnt-load-div">
        <div className="container-fluid p-0">
          <div className="cnt-div">
            <div className="homepage">
              <section class="cal">
                <div class="container">
                  <div class="sec-heading">
                    <h3>About Us</h3>
                  </div>
                  <div class="row pt-5 pb-3 ">
                    <div class="col-md-12 col-lg-6 pt-5 order-2 order-lg-1">
                      <div class="sec-content">
                        <h5>Who Are we ?</h5>
                        <h6 class="pr-color">Id magna ex in ullamco dolor adipisicing fugiat exercitation exercitation. </h6>
                        <p>Id magna ex in ullamco dolor adipisicing fugiat exercitation exercitation. Reprehenderit duis Lorem non elit Lorem aute nisi minim duis non sit. Dolor do quis eu do et velit. Sit esse adipisicing. Id magna ex in ullamco dolor adipisicing fugiat exercitation exercitation. Reprehenderit duis Lorem non elit Lorem aute nisi minim duis non sit. Dolor do quis eu do et velit. Sit esse adipisicing. Id magna ex in ullamco dolor adipisicing fugiat exercitation exercitation. Reprehenderit duis Lorem non elit Lorem aute nisi minim duis non sit. Dolor do quis eu do et velit. Sit esse adipisicing. </p>
                      </div>
                    </div>
                    <div class="col-md-12 col-lg-6 text-center  order-1 order-lg-2">
                      <img src={aboutImg} class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="sec-content py-4">
                    <p>Laboris commodo voluptate qui nostrud labore culpa esse deserunt occaecat non nostrud veniam irure. Ullamco Lorem ad cillum amet officia eu quis aute. Labore dolore voluptate labore quis culpa duis cupidatat sunt esse cillum. Veniam dolor adipisicing ut Lorem et. Voluptate ullamco minim cillum laboris Lorem sit anim minim non adipisicing excepteur laboris ex adipisicing. Fugiat elit esse eiusmod sit. Consectetur sint proident deserunt tempor anim. Mollit consectetur exercitation tempor enim magna dolore non magna. Veniam nisi elit veniam consectetur consequat ex fugiat aliquip. Excepteur non est enim mollit quis reprehenderit aute quis. Sint deserunt ex qui dolore. Dolore in aliqua ullamco anim fugiat qui. Commodo cillum consequat pariatur proident non exercitation magna nostrud aute nostrud eiusmod occaecat. Commodo ad enim id incididunt Lorem deserunt reprehenderit quis. Nostrud cillum cupidatat consequat dolore cillum cupidatat id pariatur esse in. Dolor laborum id fugiat reprehenderit est aliqua est eiusmod excepteur minim id laborum excepteur ad. Anim dolor consequat quis cillum elit duis. Ad ipsum est ad cupidatat deserunt amet incididunt irure reprehenderit Lorem. Aliquip duis incididunt eiusmod proident commodo consequat reprehenderit Lorem quis. Labore anim culpa nisi occaecat consequat.
                    </p>
                    <p>Laboris commodo voluptate qui nostrud labore culpa esse deserunt occaecat non nostrud veniam irure. Ullamco Lorem ad cillum amet officia eu quis aute. Labore dolore voluptate labore quis culpa duis cupidatat sunt esse cillum. Veniam dolor adipisicing ut Lorem et. Voluptate ullamco minim cillum laboris Lorem sit anim minim non adipisicing excepteur laboris ex adipisicing. Fugiat elit esse eiusmod sit. Consectetur sint proident deserunt tempor anim. Mollit consectetur exercitation tempor enim magna dolore non magna. Veniam nisi elit veniam consectetur consequat ex fugiat aliquip. Excepteur non est enim mollit quis reprehenderit aute quis. Sint deserunt ex qui dolore. Dolore in aliqua ullamco anim fugiat qui. Commodo cillum consequat pariatur proident non exercitation magna nostrud aute nostrud eiusmod occaecat. </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );

}

export default About;