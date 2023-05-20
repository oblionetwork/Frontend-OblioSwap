import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";
import DataTable, { createTheme } from "react-data-table-component";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import helper from "src/helpers/axiosHelper";
import { toast } from "react-toastify";
import { updatefarmdata } from "src/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";

const apiURL = helper.stakeURL();

const FarmingPairs = () => {

  const [stakeList, setStakeList] = useState([]);
  const [pending, setPending] = React.useState(true);
  const dispatch = useDispatch();

  const statusoffarm = useSelector(
    (state) => state.userReducer.updatefarmstatus
  );

  const data = stakeList;
  const columns = [
    {
      name: "S.No",
      cell: (row, index) => index + 1,
      width: "100px",
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
      width: "550px"
    },
    {
      name: "Pool ID",
      selector: "pairId",
      width: "170px"

    },

    {
      name: "APR (%)",
      selector: "APR",
      sortable: true,
      width: "170px"

    },
    {
      name: "Allocation Point",
      selector: "allocationPoint",
      sortable: true,
      width: "170px"

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


  ];

  let history = useHistory();
  const [ID, setId] = useState("")
  const clickHandler = (id) => {

    setId(id)
    let data = {
      id: id,
      stakeStatus: "Closed"
    }
    axios
      .post(apiURL + "/updatestake", data)
      .then(res => {
        if (res.data.status == 200) {
          toast.success(res.data.message)
          dispatch(updatefarmdata(true));

        }
        else {
          toast.error(res.data.message)
          dispatch(updatefarmdata(false));

        }
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    helper
      .getData(apiURL + "/liststakedata")
      .then((res) => {
        setStakeList(res.data.result);
        dispatch(updatefarmdata(true))
        setPending(false);
      })
      .catch((err) => toast.error(err));
  }, [statusoffarm]);

  const AddFarmingPair = () => {
    history.push("/x3SDEITBOsBhyh5KHd91Ew");
  };

  return (
    <div>
      <h5>Farming Pair List</h5>
      <div align="right">
        <button className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }} onClick={AddFarmingPair}>
          Add Farming Pair
        </button>
      </div>
      <br></br>
      <div>
        {" "}
        <DataTable
          data={data}
          columns={columns}
          progressPending={pending}
          pagination={true}
          highlightOnHover={true}
          fixedHeader={true}
          subHeaderAlign="right"
        />
      </div>
    </div>
  );
};

export default FarmingPairs;
