import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PatternLock from "react-pattern-lock";
import { toast } from "react-toastify";
import axios from "axios";
import helper from "src/helpers/axiosHelper";

const apiURL = helper.securityURL();

const ChangePattern = () => {
  const [currentPattern, setCurrentpattern] = useState("");
  const [newPattern, setNewPattern] = useState("");
  const [confirmPattern, setConfirmPattern] = useState("");

  const [path, setPath] = useState([]);
  const [success, setSuccess] = useState(false);

  const [pathTwo, setPathTwo] = useState([]);
  const [successTwo, setSuccessTwo] = useState(false);

  const [pathThree, setPathThree] = useState([]);
  const [successThree, setSuccessThree] = useState(false);

  const onChange = (path) => {
    setPath([...path]);
  };
  const onFinish = () => {
    setSuccess(true);
    setTimeout(() => {
      setPath([]);
      setSuccess(false);
    }, 10000);
  };

  const onChangeTwo = (pathTwo) => {
    setPathTwo([...pathTwo]);
  };
  const onFinishTwo = () => {
    setSuccessTwo(true);
    setTimeout(() => {
      setPathTwo([]);
      setSuccessTwo(false);
    }, 10000);
  };

  const onChangeThree = (pathThree) => {
    setPathThree([...pathThree]);
  };
  const onFinishThree = () => {
    setSuccessThree(true);
    setTimeout(() => {
      setPathThree([]);
      setSuccessThree(false);
    }, 10000);
  };

  const onSubmit = () => {
    var patharrone = path.join();
    var patharraytwo = pathTwo.join();
    var patharraythree = pathThree.join();

    setCurrentpattern(patharrone);
    setNewPattern(patharraytwo);
    setConfirmPattern(patharraythree);

    if (path.length > 0 && pathTwo.length > 0 && pathThree.length > 0) {

      let postData = {
        currentpattern: patharrone,
        newpattern: patharraytwo,
        confirmpattern: patharraythree,
      };

      helper
        .postData("https://bakxlxiqwosd.pocketswap.org/api/securitysettings/changepattern", postData)
        .then((res) => {
          if (res.data.status == 200) {
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          toast.error(err);
        });



    } else {
      toast.error("Please Draw Pattern");
    }
  };

  return (
    <div className="changepattern-container">
      <div className="">
        <h6>Change Pattern</h6>
        <div className="row">
          <div className="col-4">
            <h6>Old Pattern:</h6>{" "}
            <PatternLock
              width={250}
              size={3}
              onChange={onChange}
              path={path}
              onFinish={onFinish}
              connectorThickness={8}
              success={success}
            />
          </div>
          <div className="col-4">
            <h6>New Pattern:</h6>{" "}
            <PatternLock
              width={250}
              size={3}
              onChange={onChangeTwo}
              path={pathTwo}
              onFinish={onFinishTwo}
              connectorThickness={8}
              success={successTwo}
            />
          </div>

          <div className="col-4">
            <h6>Confirm Pattern:</h6>{" "}
            <PatternLock
              width={250}
              size={3}
              onChange={onChangeThree}
              path={pathThree}
              onFinish={onFinishThree}
              connectorThickness={8}
              success={successThree}
            />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div align="center">
            <button
              className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }}
              type="submit"
              onClick={onSubmit}
            >
              Submit
            </button>
            <br></br>

            <br></br>

          </div>


        </div>
      </div>
    </div>
  );
};

export default ChangePattern;
