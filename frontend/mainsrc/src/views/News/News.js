import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import "./css/news.scss";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import subnewsImg from '../../assets/images/subnews.png';
import newsprofileImg from '../../assets/images/newsprofile.png';
import newsbannerImg from '../../assets/images/newsbanner.png';
import axios from "axios";
import { toast } from "react-toastify";

const News = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://bakxlxiqwosd.pocketswap.org/api/cms/listallcms")
            .then((res) => {

                setData(res.data.result)
            })
            .catch((err) => {
                toast.error("Something went wrong")
            })

    }, [])
    return (
        <Fragment>
            <Header />
            <div className="cnt-load-div">
                <div className="container-fluid p-0">
                    <div className="cnt-div">
                        <section class="latestnews-wrapper">
                            <div class="container">
                                <div class="heading">
                                    <h1>Latest News</h1>
                                </div>
                                <div class="news-banner-wrapper flex-lg-nowrap flex-wrap">
                                    <div class="">
                                        {data && data.map((dat) => {
                                            return (
                                                <div class="main-banner">
                                                    <div class="profile-box">
                                                        {/* <img src={newsprofileImg} class="news-profile" alt="" /> */}
                                                        {/* <div class="">
                                        <h4>Andrea</h4>
                                        <h5>
                                            Posted
                                            <span>12 hours ago</span>
                                        </h5>
                                    </div> */}

                                                    </div>
                                                    {/* <div class="news-ban">
                                                        <img src={newsbannerImg} class="news-banner img-fluid" alt="" />
                                                        <div class="date">
                                                            <h1>10{new Date(dat.createdAt).getFullYear}/ {new Date(dat.createdAt).getMonth()}</h1>
                                                            <h2>May</h2>
                                                        </div>
                                                    </div> */}
                                                    <div class="news-content">
                                                        <h2>{dat.Heading}</h2>
                                                        <p dangerouslySetInnerHTML={{ __html: dat.Detail }}></p>
                                                    </div>

                                                </div>
                                            )
                                        })}

                                        {/* <div class="main-banner">
                              <div class="profile-box">
                                  <img src={newsprofileImg} class="news-profile" alt="" />
                                  <div class="">
                                      <h4>Andrea</h4>
                                      <h5>
                                          Posted
                                          <span>12 hours ago</span>
                                      </h5>
                                  </div>

                              </div>
                              <div class="news-ban">
                                  <img src={newsbannerImg} class="news-banner img-fluid" alt="" />
                                  <div class="date">
                                      <h1>10</h1>
                                      <h2>May</h2>
                                  </div>
                              </div>
                              <div class="news-content">
                                  <h2>
                                      The Financial Express
                                      28% GST on cryptocurrency: Another
                                      shocker for crypto community </h2>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At adipiscing proin elementum
                                      eget sit ornare interdum elit semper. Fermentum tristique pulvinar nunc, egestas
                                      facilisis accumsan. Auctor habitant at amet velit. Placerat vel accumsan non est amet.
                                      Augue vestibulum rhoncus, <a href="#">
                                          See more
                                      </a> </p>
                              </div>

                          </div> */}
                                    </div>
                                    {/* <div class="sub-news-wrapper"> 
                          <div class="input-group">
                              <input type="text" class="form-control" placeholder="Search events" aria-label="Search events"
                                  aria-describedby="basic-addon2" />
                              <div class="input-group-append">
                                  <span class="input-group-text" id="basic-addon2">Search</span>
                              </div>
                          </div>
                          <h2>Recent Events</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At adipiscing proin elementum eget sit
                              ornare </p>
                          <div class="sub-news-box">
                              <div class="news-img">
                                  <img src={subnewsImg} class="subnews img-fluid" alt="" />
                                  <div class="date">
                                      <h1>10</h1>
                                      <h2>May</h2>
                                  </div>
                                  <h3>
                                      The Financial Express
                                      28% GST on cryptocurrency: Another</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At adipiscing proin elementum
                                      eget sit ornare </p>
                              </div>

                          </div>
                          <div class="sub-news-box">
                              <div class="news-img">
                                  <img src={subnewsImg} class="subnews img-fluid" alt="" />
                                  <div class="date">
                                      <h1>10</h1>
                                      <h2>May</h2>
                                  </div>
                                  <h3>
                                      The Financial Express
                                      28% GST on cryptocurrency: Another</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At adipiscing proin elementum
                                      eget sit ornare </p>
                              </div>

                          </div>
                          <div class="sub-news-box">
                              <div class="news-img">
                                  <img src={subnewsImg} class="subnews img-fluid" alt="" />
                                  <div class="date">
                                      <h1>10</h1>
                                      <h2>May</h2>
                                  </div>
                                  <h3>
                                      The Financial Express
                                      28% GST on cryptocurrency: Another</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At adipiscing proin elementum
                                      eget sit ornare </p>
                              </div>

                          </div>
                      </div> */}

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );

}

export default News;