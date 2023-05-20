import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import DataTable, { createTheme } from "react-data-table-component";
import helper from "src/helpers/axiosHelper";

const PoolHistory = () => {

  const [poolhistory, setPoolHistory] = useState([]);
  const [pending, setPending] = React.useState(true);
  const apiURL = helper.poolURL()
  const data = poolhistory;
  const columns = [
    {
      name: "S.No",
      cell: (row, index) => index + 1,
      width: "80px",
    },
    {
      name: "From Token Symbol",
      selector: "fromTokenSymbol",
      sortable: true,
    },
    {
      name: "From Token Image",
      selector: "fromTokenImg",
      sortable: true,
      width: "10px",
    },
    {
      name: "APR",
      selector: "APR",
      sortable: true,
      width: "80px",
    },
    {
      name: "From Address",
      selector: "fromAddress",
      sortable: true,
    },
    {
      name: "Pair ID",
      selector: "pairId",
      sortable: true,
      width: "80px",
    },
    {
      name: "From Decimal",
      selector: "fromDecimal",
      sortable: true,
      width: "80px",
    },
    {
      name: "Reward Token",
      selector: "RewardToken",
      sortable: true,
    },
  ];
  useEffect(() => {
    axios
      .get(apiURL + "/listpooldata")
      .then((res) => {
        setPoolHistory(res.data.result);
        setPending(false);
      })
      .catch((err) => toast.error(err));
  }, []);
  return (
    <div className="poolhistory-container">
      <h5> Pool History</h5>
      <br></br>
      <div>
        {" "}
        <DataTable
          data={data}
          columns={columns}
          pagination={true}
          progressPending={pending}
          highlightOnHover={true}
          fixedHeader={true}
          subHeaderAlign="right"
        />
      </div>
    </div>
  );
};

export default PoolHistory;
