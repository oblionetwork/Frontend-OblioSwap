import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import "./css/privacy.scss";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

const Privacy = (props) => {
    return (
        <Fragment>
            <Header />
            <div className="cnt-load-div">
                <div className="container-fluid p-0">
                    <div className="cnt-div">
                        <section class="terms-wrapper">
                            <div class="container">
                                <div class="heading">
                                    
                                    <h1>Privacy Policy</h1>
                                </div>
                                <p>At Xpocket.com, accessible from xpocket.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Xpocket.com and how we use it. </p>
                                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                                </p>
                                <p> This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Xpocket.com. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the TermsFeed Free Privacy Policy Generator.
                                </p>
                                <h2>Consent</h2>
                                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                            
                                <h2>Information we collect</h2>
                                <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                                </p>
                                <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                                </p>
                                <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                                <h2>How we use your information</h2>
                                <h3>We use the information we collect in various ways, including to:</h3>
                                <ul>
                                    <li>
                                        Provide, operate, and maintain our website
                                    </li>
                                    <li> Improve, personalize, and expand our website
                                    </li>
                                    <li>  Understand and analyze how you use our website
                                    </li>
                                    <li>    Develop new products, services, features, and functionality
                                    </li>
                                    <li>    Communicate with you, either directly or through one of our partners, including for customer service, to provide you with update</li>
                                    <li>    Send you emails
                                    </li>
                                    <li>    Find and prevent fraud
                                    </li>
                                </ul>
                                
                                <h2>Log Files</h2>
                                <p>Xpocket.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );

}

export default Privacy;