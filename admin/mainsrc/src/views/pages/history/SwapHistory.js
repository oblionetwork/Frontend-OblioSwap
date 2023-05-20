import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import DataTable, { createTheme } from "react-data-table-component";
import { toast } from "react-toastify";
import helper from "src/helpers/axiosHelper";
import { useSelector } from "react-redux";

const SwapHistory = () => {

  var currentChainId = useSelector(state => state.userReducer.currentChainId);
  const [swapHistory, setSwapHistory] = useState([]);
  const [pending, setPending] = React.useState(true);
  const apiURL = helper.swapURL()
  const data = swapHistory;
  const columns = [
    {
      name: "S.No",
      cell: (row, index) => index + 1,
      width: "60px",
    },
    {
      name: "User Address",
      selector: "userAddress",
      sortable: true,
    },
    {
      name: "From Token",
      selector: "fromToken",
      sortable: true,
      width: "120px",
    },
    {
      name: "To Token",
      selector: "toToken",
      sortable: true,
      width: "120px",
    },
    {
      name: "From Amount",
      selector: "fromAmount",
      sortable: true,
      width: "120px",
    },
    {
      name: "To Amount",
      selector: "toAmount",
      sortable: true,
      width: "120px",
    },
    {
      name: "Transaction Hash",
      selector: "hash",
      sortable: true,
      width: "150px",
    },
  ];

  useEffect(() => {
    axios
      .get(apiURL + "/listallswapdata")
      .then((res) => {
        setSwapHistory(res.data.result);
        setPending(false);

      })
      .catch((err) => toast.error(err));
  }, [currentChainId]);

  return (
    <div className="swaphistory-container">
      <h5>Swap History</h5>
      <br></br>

      <div>
        {" "}
        <DataTable
          data={data}
          columns={columns}
          pagination={true}
          highlightOnHover={true}
          progressPending={pending}
          fixedHeader={true}
          subHeaderAlign="right"
        />
      </div>
    </div>
  );
};

export default SwapHistory;
