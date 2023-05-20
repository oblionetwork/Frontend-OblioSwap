import React, { useState } from "react";
import ChangePattern from "./ChangePattern";
import TFA from "./TFA";
import ChangePassword from "./ChangePassword";

const Security = () => {
  return (
    <div>
      <h5>Security</h5>
      <div className="seucrity-container">
        <div className="row">
          <div className="col-6">
            <ChangePassword />
          </div>
          <div className="col-6">
            <TFA />
          </div>
        </div>

        <br></br>
        <div className="row">
          <div className="col-12">
            <ChangePattern />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
