import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable, { createTheme } from "react-data-table-component";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import helper from "src/helpers/axiosHelper";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { showBlockListData } from "../../../Actions/Actions"

const apiURL = helper.blockURL();
const Blocklist = () => {

  const blockStatus = useSelector(
    (state) => state.userReducer.blocklist
  );

  const dispatch = useDispatch();
  const showBList = (data) => dispatch(showBlockListData(data));

  let history = useHistory();
  const addNewIpBlockList = () => {
    history.push("/t76XKN5NjQOrEeQ1k1oIn6LF45Dy3V8nopXtPN8");
  };
  const [blocklistData, setBlockListData] = useState();
  const [pending, setPending] = React.useState(true);

  const data = blocklistData;
  const columns = [
    {
      name: "S.No",
      cell: (row, index) => index + 1,
    },
    {
      name: "IpAddress",
      selector: "ipAddress",
      sortable: true,
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
          <RiDeleteBinLine />
        </button>
      ),
    },
  ];
  useEffect(() => {
    axios
      .get(
      "https://bakxlxiqwosd.pocketswap.org/api/blocklist/listblocklist"
      )
      .then((res) => {
        setBlockListData(res.data.result);
        setPending(false);
      })
      .catch((err) => toast.error(err));
  }, [blockStatus]);

  const clickHandler = (id) => {
    let ipPostData = {
      id: id,
    };
    helper
      .postData(apiURL + "/deleteip", ipPostData)
      .then((res) => {
        if (res.data.status == 200) {
          toast.success(res.data.message);
          var fil = blocklistData.filter((item => item._id != id))
          setBlockListData(fil)
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div>
      <h5> IP Blocklist Page</h5>
      <div align="right">
        <button className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }} onClick={addNewIpBlockList}>
          Add New
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

export default Blocklist;
