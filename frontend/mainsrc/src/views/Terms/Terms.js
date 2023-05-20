import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import "./css/terms.scss";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

const Terms = (props) => {
    return (
        <Fragment>
            <Header />
            <div className="cnt-load-div">
                <div className="container-fluid p-0">
                    <div className="cnt-div">
                        <section class="terms-wrapper">
                            <div class="container">
                                <div class="heading">
                                    <h1>Terms and Conditions</h1>
                                </div>
                                <p>These terms and conditions outline the rules and regulations for the use of xpocket's Website, located at
                                    xpocket.com. </p>
                                <p> By accessing this website we assume you accept these terms and conditions. Do not continue to use
                                    Xpocket.com if you do not agree to take all of the terms and conditions stated on this page.</p>
                                <p> The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice
                                    and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and
                                    compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us",
                                    refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms
                                    refer to the offer, acceptance and consideration of payment necessary to undertake the process of our
                                    assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s
                                    needs in respect of provision of the Company’s stated services, in accordance with and subject to,
                                    prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural,
                                    capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                                </p>
                                <h2>Cookies</h2>
                                <p>We employ the use of cookies. By accessing Xpocket.com, you agreed to use cookies in agreement with the
                                    xpocket's Privacy Policy.</p>
                                <p>

                                    Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are
                                    used by our website to enable the functionality of certain areas to make it easier for people visiting
                                    our website. Some of our affiliate/advertising partners may also use cookies.</p>
                                <h2>License</h2>
                                <p>Unless otherwise stated, xpocket and/or its licensors own the intellectual property rights for all
                                    material on Xpocket.com. All intellectual property rights are reserved. You may access this from
                                    Xpocket.com for your own personal use subjected to restrictions set in these terms and conditions.</p>
                                <h3>You must not:</h3>
                                <ul>
                                    <li>
                                        Republish material from Xpocket.com
                                    </li>
                                    <li> Sell, rent or sub-license material from Xpocket.com</li>
                                    <li> Reproduce, duplicate or copy material from Xpocket.com</li>
                                    <li> Redistribute content from Xpocket.com</li>
                                </ul>
                                <p>
                                    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. xpocket does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of xpocket,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, xpocket shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                                </p>
                                <h3>You warrant and represent that:</h3>
                                <ul>
                                    <li>
                                        Republish material from Xpocket.com
                                    </li>
                                    <li> Sell, rent or sub-license material from Xpocket.com</li>
                                    <li> Reproduce, duplicate or copy material from Xpocket.com</li>
                                    <li> Redistribute content from Xpocket.com</li>
                                </ul>
                                <h4>Hyperlinking to our Content</h4>
                                <h3>The following organizations may link to our Website without prior written approval:</h3>
                                <ul>
                                    <li>
                                        Republish material from Xpocket.com
                                    </li>
                                    <li> Sell, rent or sub-license material from Xpocket.com</li>
                                    <li> Reproduce, duplicate or copy material from Xpocket.com</li>
                                    <li> Redistribute content from Xpocket.com</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );

}

export default Terms;