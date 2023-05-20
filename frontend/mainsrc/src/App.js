import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './style.scss';
import { ToastContainer } from "react-toastify";
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';


const ViewHome = React.lazy(() => import('./views/Home/Home'));
const ViewAbout = React.lazy(() => import('./views/About/About'));
const ViewPrivacy = React.lazy(() => import('./views/Privacy/Privacy'));
const ViewTerms = React.lazy(() => import('./views/Terms/Terms'));
const ViewPagenotfound = React.lazy(() => import('./views/Pagenotfound/Pagenotfound'));
const ViewLiquidity = React.lazy(() => import('./views/Liquidity/Liquidity'));
const ViewSwap = React.lazy(() => import('./views/Swap/Swap'));
const ViewNews = React.lazy(() => import('./views/News/News'));
const ViewNewsdetails = React.lazy(() => import('./views/Newsdetails/Newsdetails'));
const ViewTokensale = React.lazy(() => import('./views/Tokensale/Tokensale'));

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

const App = (props) => {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <React.Fragment>
          <Suspense fallback={<div className="loading" />}>

            <Router history={props.history}>
              <Switch>
                <Route path="/" exact render={props => <ViewHome {...props} />} />
                <Route path="/about2" exact render={props => <ViewAbout {...props} />} />
                <Route path="/privacy" exact render={props => <ViewPrivacy {...props} />} />
                <Route path="/terms" exact render={props => <ViewTerms {...props} />} />
                <Route path="/pagenotfound" exact render={props => <ViewPagenotfound {...props} />} />
                <Route path="/liquidity" exact render={props => <ViewLiquidity {...props} />} />
                <Route path="/swap" exact render={props => <ViewSwap {...props} />} />
                <Route path="/news" exact render={props => <ViewNews {...props} />} />
                <Route path="/newsdetails" exact render={props => <ViewNewsdetails {...props} />} />
                <Route path="/about" exact render={props => <ViewTokensale {...props} />} />
              </Switch>

            </Router>

          </Suspense>
          <ToastContainer />
        </React.Fragment>
      </Web3ReactProvider>
    </>

  );
}
export default App;