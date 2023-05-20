import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import "./css/tokensale.scss";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import chartImg from '../../assets/images/chart.png';

const Tokensale = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="cnt-load-div">
        <div className="container-fluid p-0">
          <div className="cnt-div">
            <section class="token-wrapper cal">
              <div class="container">
                <div class="token-wrap-bg">
          
                  <div class="chart-details">
                  
                    <div>
                      <h2>About Pocket Swap:</h2>
                      <h5>

                        Pocket Swap is an Ethereum & OKChain-based DEX protocol that allows users to trustlessly swap their tokens and coins across multiple blockchains.
                        Pocket Swap pools tokens into smart contracts and users trade against these liquidity pools.
                        Anyone can swap tokens or add tokens to a pool to earn fees.
                        It obviates the need for trusted intermediaries, prioritizing
                        decentralization, transparency, and security.
                        To learn more about OKC and its benefits, visit this page https://www.okx.com/okc.</h5>
                    </div>
                    <br></br>
                    <div>
                      <h2>Fees & Next-Gen Staking:</h2>
                      <h5>In general, a flexible fee is taken by the pool contract on every transaction/trade on Pocket Swap.
                        Around 83% of this fee is divided between the liquidity providers proportionally to their share.
                        For example, if a user provides 50% of the pool’s liquidity, he will earn 50% of the total collected fee.
                        The remaining ~17% will go towards POCKET token holders, proportionally.
                        The more tokens the user holds (stakes), the bigger the reward.
                        This is called the Next-Gen Staking, a revolutionary method for users to stake their assets and earn passive income.
                        In order to stake, the user is just required to hold POCKET tokens to receive rewards from the Pocket Swap trade fees.</h5>
                    </div>
                    <br></br>
                    <div>
                      <h2>Yield Farming/Liquidity:</h2>
                      <h5>Yield farming is a process where a user provides liquidity to DeFi protocols/pools and is rewarded with a yield/reward,
                        usually in the form of the platforms native token offering.

                        Liquidity providers provide assets to the PocketSwap liquidity pools.
                        In the return, they are compensated with a portion of the swap fees as a reward.
                        In general, a flexible fee is taken by the pool contract on every transaction/trade on PocketSwap, aimed to be around 0.3%.
                        And, 83% of this fee is divided between the liquidity providers proportionally to their share.
                        For example, if a user provides 50% of the pool's liquidity, he will earn 50% of the collected fee.
                        The remaining 17% of the fee will go towards the POCKET token holders, proportionally, as a staking reward.
                      </h5>
                    </div>
                    <br></br>
                    <div>
                      <h2>What are the Liquidity Pools?</h2>
                      <h5>Liquidity Pools are pools of tokens, locked in a smart contract to facilitate trading by providing liquidity.
                        They are used by Automated Market Makers (AMM) to reduce price change when trading on the decentralized exchanges.</h5>
                    </div>
                    <div>
                      <h2>How to Deposit Assets to Pocket Swap Pools?</h2>
                      <h5>Depositing assets on PocketSwap is completely permissionless and noncustodial.
                        Liquidity providers can add liquidity to existing pools.
                        Once a new asset pool is listed, anybody can add liquidity to it, and from that perspective, PocketSwap is permissionless.
                        The ability to use and withdraw assets is completely non-custodial.
                        Only the original depositor has the ability to withdraw them, at any time.
                        If a user wants to deposit for example USDT/ETH pair, the process will go through only if there is either USDT/POCKET or ETH/POCKET existing pair.
                        Such act is necessary as we are converting fees to POCKET to pay the holders with an additional staking reward.</h5>
                    </div>
                    <br></br>
                    <div>
                      <h2>Process</h2>
                      <h5>Liquidity can be added to existing pools to increase the depth and
                        attract swappers. The deeper the liquidity, the lower the fee. However,
                        deep pools generally have higher swap volume which generates more
                        fee revenue. Liquidity providers are incentivized to deposit symmetrically.</h5>
                    </div>
                    <br></br>
                    <div>
                      <h2>Withdrawing Assets</h2>
                      <h5>Liquidity providers can withdraw their assets at any time.
                        The network processes their request and the liquidity provider receives their
                        percentage according to their ownership of the pool, and, unlike on
                        other DEXs where the user gets back the same assets that he deposited,
                        on Pocket Swap, all users will be able to choose the currency in which
                        they will receive their rewards, out from all available assets on Pocket Swap.
                        Users are able to choose between 1% and 100% of how much liquidity they want to withdraw.
                      </h5>
                    </div>
                    <br></br>
                    <div>
                      <h2>Reward/Compensation:</h2>
                      <h5>Liquidity providers deposit their assets in liquidity pools and earn yield in return.
                        Liquidity providers earn a yield on the assets they deposit.
                        Someone who has deposited in the BTC/POCKET pool will be able to choose the Reward Token between all available currencies.
                        If there is not enough liquidity in the chosen currency, the user will earn the reward in the same currencies he deposited.
                        This yield is made up of fees and rewards. Fees are paid by swappers and
                        traders. The Liquidity providers are rewarded from the portion of the trade fees (~83%).
                        Most swaps cause the ratio of assets in the liquidity pool to diverge from the market rate.
                        The higher the trading volume on Pocket Swap, the higher the rewards for Liquidity Providers.
                        Yield is paid out to liquidity providers when they remove/withdraw assets from the pool.</h5>
                    </div>
                    <br />
                    <br />
                    <div>

                      <h2>Pocket Token:

                      </h2>
                     <h5>
                       

The complete XPocket ecosystem is powered by the dual chain token called POCKET token.
POCKET is built on Ethereum & OKC blockchains.
<br></br>
<h5>
Symbol: POCKET
</h5>
<h5>
Type: ERC-20, OKC
</h5>
<h5>
Total Supply: 50,000,000 (25M on ETH, 25M on OKC)
</h5>
To Learn more about the Distribution and Use cases of Pocket Token, visit our main website:
https://xpocket.finance/pocket-token/
                     </h5>
                    </div>
                  </div>
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

export default Tokensale;