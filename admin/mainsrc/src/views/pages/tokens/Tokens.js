import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";
import DataTable, { createTheme } from "react-data-table-component";
import axios from "axios";
import { FiEdit, FiMinus } from "react-icons/fi";
import { toast } from "react-toastify";
import helper from "src/helpers/axiosHelper";

import {
  CSelect,
} from '@coreui/react'
import { useSelector } from "react-redux";

const Tokens = () => {

  const [currencyListData, setCurrencyListData] = useState([]);
  const [pending, setPending] = React.useState(true);

  const [trigger, setTrigger] = useState(1)
  let history = useHistory();
  const data = currencyListData;
  const apiURL = helper.currencyURL()
  const columns = [
    {
      name: "S.No",
      cell: (row, index) => index + 1,
      width: "80px"

    },
    {
      name: "Name",
      selector: "tokenName",
      sortable: true,
      width: "100px"
    },
    {
      name: "Symbol",
      selector: "tokenSymbol",
      sortable: true,
      width: "100px"
    },
    {
      name: "Image",
      selector: "tokenImg",
      sortable: true,
      cell: props => <div><img src={props.tokenImg} height="30px" /></div>,
      width: "100px"

    },
    {
      name: "Address",
      selector: "tokenAddress",
      sortable: true,
      width: "300px"

    },
    {
      name: "Decimal",
      selector: "tokenDecimal",
      sortable: true,
      width: "100px"

    },
    {
      name: "CreatedAt",
      selector: "createdAt",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          {new Date(row.createdAt).toLocaleString()}
        </div>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => clickHandler(row._id)}
          id={row.ID}
        >
          <FiEdit />
        </button>
      ),
    },
    {
      name: "Remove",
      cell: (row) => (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => removeClick(row._id)}
          id={row.ID}
        >
          {/* <h6>{row._id}</h6> */}
          <FiMinus />
        </button>
      ),
    },
  ];

  const clickHandler = (id) => {

    history.push("/8q0MGEX8BL8fFOBZD0yjng/" + id);
  };

  const removeClick = (id) => {
    let data = {
      id: id
    }
    axios.post("https://bakxlxiqwosd.pocketswap.org/api/currency/delete", data)
      .then((res) => {
        setTrigger(trigger + 1)
        toast.success("Token Removed Successfully")
      })
      .then((err) => {

        toast.error("Somethign went wrong")
      })

  }

  var currentChainId = useSelector(state => state.userReducer.currentChainId);

  useEffect(() => {
    axios
      .get(
        "https://bakxlxiqwosd.pocketswap.org/api/currency/listallcurrency"
      )
      .then((res) => {
        setCurrencyListData(res.data.result);
        setPending(false);
      })
      .catch((err) => toast.error(err));
  }, [currentChainId, trigger]);

  const AddToken = () => {
    history.push("/e9T3S5K5XKHmMWxY8HJ2Ng");
  };

  return (
    <div>
      <h5>Currency List</h5>
      <div align="right">
        <button className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }} onClick={AddToken}>
          Add Currency
        </button>
      </div>
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

export default Tokens;
