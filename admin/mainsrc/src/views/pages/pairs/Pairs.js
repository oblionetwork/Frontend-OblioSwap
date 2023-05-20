import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";
import axios from "axios";
import DataTable, { createTheme } from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";

import helper from "src/helpers/axiosHelper";

const Pairs = () => {
  const [pairsData, setPairsData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const apiURL = helper.pairsURL()
  const data = pairsData;
  const columns = [
    {
      name: "S.No",
      cell: (row, index) => index + 1,
    },
    {
      name: "Pair",
      selector: "pair",
      sortable: true,
    },
    {
      name: "Pair Address",
      selector: "pairAddress",
      sortable: true,
    },
    {
      name: "createdAt",
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
      cell: (row) =>
        row.status == true ? (
          <div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => clickHandler(row._id, row.status)}
              id={row.ID}
            >
              Disable
            </button>
          </div>
        ) : (
          <button
            className="btn btn-success btn-sm"
            onClick={() => clickHandler(row._id, row.status)}
            id={row.ID}
          >
            Enable
          </button>
        ),
    },
  ];
  const clickHandler = (pairId, status) => {
    let changeData = {
      status: status,
      pairId: pairId,
    };
    axios
      .post(
        apiURL + "/changepairstatus",
        changeData
      )
      .then((res) => {
        if (res.data.status == 200) {
          toast.success(res.data.message);
          window.location.reload();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err));
  };
  let history = useHistory();
  useEffect(() => {
    axios
      .get("https://bakxlxiqwosd.pocketswap.org/api/currency/listallcurrency")
      .then((res) => {
        setPairsData(res.data.result);
        setPending(false);
      })
      .catch((err) => toast.error(err));
  }, []);
  const AddPairs = () => {
    history.push("/sgNkunyU4d8l8SR9TNaYcQ");
  };
  return (
    <div>
      <h5>Pair List</h5>
      <div align="right">
        <button className="btn btn-primary" onClick={AddPairs}>
          Add Pairs
        </button>
        <br></br>
        <br></br>
        <br></br>

        <div className="data-class">
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
    </div>
  );
};

export default Pairs;
