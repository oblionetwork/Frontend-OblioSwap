import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import DataTable, { createTheme } from "react-data-table-component";
import { BASE_URL } from "src/helpers/axiosHelper";

const StakeHistory = () => {

  useEffect(() => {
    axios
      .get(BASE_URL+"/api/stake/")
      .then(res => {
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className="stakehistoy-container">
      <h5>Stake History</h5>
    </div>
  );
};

export default StakeHistory;
