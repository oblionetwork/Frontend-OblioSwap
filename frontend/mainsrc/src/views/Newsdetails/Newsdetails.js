import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import "./css/newsdetails.scss";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import subnewsImg from '../../assets/images/subnews.png';
import newsprofileImg from '../../assets/images/newsprofile.png';
import newsbannerImg from '../../assets/images/newsbanner.png';
import axios from "axios";
import { toast } from "react-toastify";

const Newsdetails = (props) => {

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
            <section class="news-detail-wrapper">
              <div class="container">
                {data && data.map((dat) => {
                  return (
                    <div class="">
                      <h1>{dat.Heading}
                      </h1>
                      <img src={newsbannerImg} class="img-fluid w-100" alt="" />
                      <div class="profile-wrapper">
                        {/* <div class="profile-box">
                                <img src={newsprofileImg} class="news-profile" alt="" />
                                <div class="">
                                    <h4>Andrea</h4>
                                    <h5>
                                        Posted
                                        <span>12 hours ago</span>
                                    </h5>
                                </div>
                            </div> */}
                        {/* <h3>10May | 2022</h3> */}
                      </div>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae lorem eget dictum viverra volutpat auctor nulla. Feugiat eros sit id volutpat, et amet arcu dictum sit. Mattis nulla eu etiam tempor. Volutpat faucibus faucibus viverra et non. Vitae volutpat dignissim tortor morbi ultrices leo porttitor sed. Duis viverra vitae in posuere eget in. Sit blandit ut venenatis nibh lectus laoreet eu massa aliquet. Dictum sit tempor enim, laoreet tincidunt amet, congue. Duis sit gravida velit ipsum. Tristique eu eget sem quis. In aenean dolor, enim, pulvinar. Eget nulla aliquam tellus urna, vel urna suscipit viverra lectus. Fringilla risus pulvinar libero maecenas porta. In tortor at vitae tellus urna.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae lorem eget dictum viverra volutpat auctor nulla. Feugiat eros sit id volutpat, et amet arcu dictum sit. Mattis nulla eu etiam tempor. Volutpat faucibus faucibus viverra et non. Vitae volutpat dignissim tortor morbi ultrices leo porttitor sed. Duis viverra vitae in posuere eget in. Sit blandit ut venenatis nibh lectus laoreet eu massa aliquet. Dictum sit tempor enim, laoreet tincidunt amet, congue. Duis sit gravida velit ipsum.</p>
                        <p>
                            Tristique eu eget sem quis. In aenean dolor, enim, pulvinar. Eget nulla aliquam tellus urna, vel urna suscipit viverra lectus. Fringilla risus pulvinar libero maecenas porta. In tortor at vitae tellus urna.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae lorem eget dictum viverra volutpat auctor nulla. Feugiat eros sit id volutpat, et amet arcu dictum sit. Mattis nulla eu etiam tempor. Volutpat faucibus faucibus viverra et non. Vitae volutpat dignissim tortor morbi ultrices leo porttitor sed. Duis viverra vitae in posuere eget in. Sit blandit ut venenatis nibh lectus laoreet eu massa aliquet. Dictum sit tempor enim, laoreet tincidunt amet, congue. Duis sit gravida velit ipsum.</p>
                            <p>
                                Tristique eu eget sem quis. In aenean dolor, enim, pulvinar. Eget nulla aliquam tellus urna, vel urna suscipit viverra lectus. Fringilla risus pulvinar libero maecenas porta. In tortor at vitae tellus urna.</p> */}

                      {/* <p>{dat.Detail}</p> */}
                      <p dangerouslySetInnerHTML={{ __html: dat.Detail }}></p>


                    </div>
                  )
                })}

              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );

}

export default Newsdetails;