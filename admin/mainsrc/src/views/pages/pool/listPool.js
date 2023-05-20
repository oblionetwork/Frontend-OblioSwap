import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import DataTable, { createTheme } from "react-data-table-component";
import helper from "src/helpers/axiosHelper";

const ListPool = () => {

  let history = useHistory();
  const [poolData, setPoolData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const apiURL = helper.poolURL()

  useEffect(() => {
    axios
      .get(apiURL + "/listpooldata")
      .then((res) => {
        setPoolData(res.data.result);
        setPending(false);
      })
      .catch((err) => toast.error(err));
  }, []);

  const data = poolData;
  const columns = [
    {
      name: "S.No",
      cell: (row, index) => index + 1,
      width: "80px",
    },
    {
      name: " Token Symbol",
      selector: "fromTokenSymbol",
      sortable: true,
      width: "140px",
    },
    {
      name: " Token Img",
      selector: "fromTokenImg",
      sortable: true,
      cell: props => <div><img src={props.fromTokenImg} height="30px" /></div>,
      width: "180px",
    },
    {
      name: "APR",
      selector: "APR",
      sortable: true,
      width: "80px",
    },
    {
      name: " Address",
      selector: "fromAddress",
      sortable: true,
    },
    {
      name: "Pair ID",
      selector: "pairId",
      sortable: true,
      width: "90px",
    },
    {
      name: " Decimal",
      selector: "fromDecimal",
      sortable: true,
      width: "100px",
    },
    {
      name: "Reward Token",
      selector: "RewardToken",
      sortable: true,
    },
    {
      name: "Status",
      selector: "poolStatus"
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => clickHandler(row._id)}
          id={row.ID}
          style={{ height: "50px", width: "90px", marginTop: "0.5rem", marginBottom: "0.5rem" }}
        >
          Change Status
        </button>
      ),
    },
  ];

  const clickHandler = (id) => {


    let data = {
      id: id,
      poolStatus: "Closed"
    }
    axios
      .post(apiURL + "/updatepoolstatus", data)
      .then(res => {
        if (res.data.status == 200) {
          toast.success(res.data.message);
        }
        else {
          toast.error(res.data.message)
        }
      })
      .catch(err => console.error(err));
  }
  const addPool = () => {
    history.push("/CUkDJgmWwv0V+HIYRj0oqw");
  };
  return (
    <div className="listpool-container">
      <h5> Pool List</h5>
      <div align="right">
        <button className="btn" style={{ background: "#680e9c", color: "white", border: "2px solid #994ac0" }} onClick={addPool}>
          Add Pool
        </button>
        <br></br>
        <br></br>
      </div>
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

export default ListPool;
