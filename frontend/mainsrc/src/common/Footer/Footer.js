/*eslint-disable*/
import React, { Fragment, Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import axios from 'axios';
import "./css/footer.scss";
import logoImg from '../../assets/images/footer-logo.png';
import fbImg from '../../assets/images/facebook.png';
import twitterImg from '../../assets/images/twitter.png';
import linkedImg from '../../assets/images/linked.png';
import youtubeImg from '../../assets/images/youtube.png';
import hackenImg from '../../assets/images/hacken.png';
import telegram from '../../assets/images/Telegram_logo.svg.png';
import Github from  "../../assets/images/git.png"
import { BASE_URL } from '../../constants';


const Footer = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get( "https://bakxlxiqwosd.pocketswap.org/api/sitesettings/getsitesettings")
      .then((res) => {
        setData(res.data.result)
      })
  }, [])

  return (
    <Fragment>

      {/* <div className="footer container-fluid">
        <img src={logoImg} className="d-block mx-auto" />
        <ul className="footer-links">
          <li>
            <a href="https://xpocket.finance/">About Us</a>
          </li>
          <li>
            <Link to="/terms">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
        </ul>
        <div className="soc-icons mb-4">
          <a href={data?.facebookURL}><img src={fbImg} /></a>
          <a href={data?.twitterURL}><img src={twitterImg} /></a>
          <img src={linkedImg} />
          <img src={youtubeImg} />
        </div>
        <p>Copyright @{data?.copyRightsText} Finance. All Rights Reserved.</p>
      </div> */}
      <div className='footer container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-4 col-12 logodv'>
              <img src={logoImg} className="img-fluid" />
            </div>
            <div className='col-md-2 col-sm-4 col-6'>
              <h5>About</h5>
              <ul>
                {/* <li>
                  <Link to="">Docs</Link>
                </li> */}
                {/* <li>
                  <a href='#'>Team</a>
                </li> */}
                <li>
                  <Link to="/about">About Pocket Swap</Link>
                </li>
                <li>
                  <Link to="/about">Next-Gen Staking</Link>
                </li>
                <li>
                  <Link to="/about">Pocket Token</Link>
                </li>
              </ul>
            </div>
            <div className='col-md-2 col-sm-4  col-6'>
              <h5>Features</h5>
              <ul>
                <li>
                  <Link to="/swap">Exchange</Link>
                </li>
                <li>
                  <Link to="/liquidity">Liquidity</Link>
                </li>
                {/* <li>
                  <a href='#'>Farms</a>
                </li>
                <li>
                  <a href='#'>Launchpools</a>
                </li>
                <li>
                  <a href='#'>Fixed Staking</a>
                </li>
                <li>
                  <a href='#'>Analytics</a>
                </li> */}
              </ul>
            </div>
            <div className='col-md-2 col-sm-4 col-6'>
              <h5>Service</h5>
              <ul>
                <li>
                  <a href='#'>Apply for listing</a>
                </li>
                <li>
                  <a href='#'>Promotional banners</a>
                </li>
                {/* <li>
                  <a href='#'>Apply to Launch</a>
                </li>
                <li>
                  <a href='#'>$10M Program</a>

                </li>
                <li>
                  <a href='#'>Space Agents</a>
                </li> */}
              </ul>
            </div>
            <div className='col-md-3  col-sm-4 col-12 cmty'>
              <h5>Community</h5>
              <ul>
                <li>
                  <Link to="" onClick={() => window.open(data?.telegramURL)}><img width="35px" height= "40px" src={telegram} /></Link>
                </li>
                <li>
                  <Link to="" onClick={() => window.open(data?.twitterURL)}><img src={twitterImg} /></Link>
                </li>
                <li>
                  <Link to="" onClick={() => window.open(data?.linkedinURL)}><img src={linkedImg} /></Link>
                </li>
                <li>
                  <Link to="" onClick={() => window.open(data?.gitURL)}><img width="35px" height= "40px" src={Github} /></Link>
                </li>
              </ul>
              <Link to="" onClick={() => window.open(data?.hackenURL)}><img  src={hackenImg} /></Link>
            </div>
            <div className='col-lg-12 mt-3'>
              <p>Copyright @ {data?.copyRightsText} Finance. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>


    </Fragment>
  );
}

export default Footer;
