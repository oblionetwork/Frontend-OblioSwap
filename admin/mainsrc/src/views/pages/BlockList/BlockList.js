import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AccessDeniedCss from "../Access Denied/AccessDenied.css";
import axios from "axios";

const BlockList = () => {
  return (
    <div className="" align="center" style={{ marginTop: "18rem" }}>
      <strong>
        {" "}
        <h5 style={{ fontWeight: "800", color: "red", fontSize: "2rem" }}>
          You are Blocked{" "}
        </h5>
      </strong>
      <p style={{}}>
        Please Contact Administrator.{" "}
      </p>
    </div>
  );
};

export default BlockList;
