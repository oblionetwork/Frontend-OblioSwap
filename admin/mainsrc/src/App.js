import React, { Component, useState, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import helper from "./helpers/axiosHelper";
import LoadingOverlay from 'react-loading-overlay-ts';
import { useDispatch, useSelector } from "react-redux";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheLayout = React.lazy(() => import("./containers/TheLayout"));

const Login = React.lazy(() => import("./views/pages/login/Login"));
const TFA = React.lazy(() => import("./views/pages/security/TFAPage"));
const AccessDenied = React.lazy(() =>
  import("./views/pages/Access Denied/AccessDenied")
);
const BlockPage = React.lazy(() => import("./views/pages/BlockList/BlockList"));


const whiteListURL = helper.whiteURL();
const blockListURL = helper.blockURL()

function App() {
  const [ipStatus, setIpStatus] = useState();
  const [blockStatus, setBlockedStatus] = useState();
  const dispatch = useDispatch();
  var enableLoaderRedux = useSelector(state => state.userReducer.enableLoader);
  var loaderTextRedux = useSelector(state => state.userReducer.loaderText);
  useEffect(() => {
    axios.get(whiteListURL)
      .then((res) => {
        setIpStatus(res.data.status);
      })
      .catch((err) => console.error(err));

    // axios.get(blockListURL)
    //   .then((blkRes) => {
    //     setBlockedStatus(blkRes.data.status);
    //   });

  }, []);

  return (
    <div className="h-100">
      <React.Fragment>
        <LoadingOverlay
          active={enableLoaderRedux}
          spinner
          text={loaderTextRedux}

        >
          <HashRouter>
            <React.Suspense fallback={loading}>
              <ToastContainer />
              {ipStatus == true ?
                (true ?
                  (
                    <Switch>
                      <Route exact path="/" name="Login Page" render={(props) => <Login {...props} />} />
                      <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
                      <Route exact path="/tfa" name="TFA Page" render={(props) => <TFA {...props} />} />
                      <Route path="/" name="Home" render={(props) => <TheLayout {...props} />} />
                    </Switch>
                  )
                  :
                  (
                    <Switch>
                      <Route exact path="*" name="Blocked" render={(props) => <BlockPage {...props} />} />
                    </Switch>
                  )
                )
                :
                (
                  <Switch>
                    <Route exact path="*" name="Access Denied" render={(props) => <AccessDenied {...props} />} />
                  </Switch>
                )
              }
            </React.Suspense>
          </HashRouter>
        </LoadingOverlay>
      </React.Fragment>
    </div>
  );
}

export default App;
