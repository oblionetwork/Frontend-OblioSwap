import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AccessDeniedCss from "./AccessDenied.css";
import axios from "axios";
import download from "../../../../src/assets/icons/download.png"

const AccessDenied = () => {
  return (
    <div className="" align="center" style={{ marginTop: "15rem" }}>
      <img src={download} alt="Access Denied Image" />
      <strong>
        {" "}
        <h5 style={{}}>
          Access Denied{" "}
        </h5>
      </strong>
      <p style={{}}>
        You don't have permission to access this site.{" "}
      </p>
    </div>
  );
};

export default AccessDenied;
