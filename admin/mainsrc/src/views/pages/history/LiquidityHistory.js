import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import axios from "axios";
import DataTable, { createTheme } from "react-data-table-component";
import helper from "src/helpers/axiosHelper";
import { useSelector } from "react-redux";

const LiquidityHistory = () => {

  var currentChainId = useSelector(state => state.userReducer.currentChainId);
  const [liquidityList, setLiquidityList] = useState([]);
  const [pending, setPending] = React.useState(true);
  const apiURL = helper.liquidityURL()
  const data = liquidityList;
  const columns = [
    {
      name: "S.No",
      cell: (row, index) => index + 1,
      width: "60px",
    },
    {
      name: "User Address",
      selector: "user_address",
      sortable: true,
    },
    {
      name: "From Currency",
      selector: "from_currency",
      sortable: true,
      width: "150px",
    },

    {
      name: "To Currency",
      selector: "to_currency",
      sortable: true,
      width: "150px",
    },

    {
      name: "From Address",
      selector: "from_address",
      sortable: true,
      width: "300px",
    },
    {
      name: "To Address",
      selector: "to_address",
      sortable: true,
    },
    {
      name: "From Amount",
      selector: "from_amount",
      sortable: true,
      width: "150px",
    },
    {
      name: "To Amount",
      selector: "to_amount",
      sortable: true,
      width: "150px",
    },
    {
      name: "Transaction Hash",
      selector: "tx_id",
      sortable: true,
    },
    {
      name: "Pair Address",
      selector: "pair_address",
      sortable: true,
    },
    {
      name: "Pair Info",
      selector: "pairInfo",
      sortable: true,
    },
  ];
  useEffect(() => {
    axios
      .get(
        apiURL
      )
      .then((res) => {
        setLiquidityList(res.data.result);
        setPending(false);
      })
      .catch((err) => toast.error(err));
  }, [currentChainId]);
  return (
    <div className="liquidityhistory-container">
      <br></br>

      <h5>Liquidity History</h5>
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

export default LiquidityHistory;
