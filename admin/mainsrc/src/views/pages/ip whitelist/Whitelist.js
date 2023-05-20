import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable, { createTheme } from "react-data-table-component";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import helper from "src/helpers/axiosHelper";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { showWhiteListData } from "../../../Actions/Actions"

const apiURL = helper.whiteURL();

const Whitelist = () => {

  let history = useHistory();
  const AddNewIpWhitelist = () => {
    history.push("/SXusr9IQvIL23HgiLxfPv2U3cyQwJeIo75GkMe9POxc");
  };
  const [WhitelistData, setWhiteListData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const data = WhitelistData;


  const whiteStatus = useSelector(
    (state) => state.userReducer.whitelist
  );

  const dispatch = useDispatch();
  const showWList = (data) => dispatch(showWhiteListData(data));


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
      "https://bakxlxiqwosd.pocketswap.org/api/whitelist/listwhitelist"
      )
      .then((res) => {
        setWhiteListData(res.data.result);
        setPending(false);
      })
      .catch((err) => toast.error(err));
  }, [whiteStatus]);

  const clickHandler = (id) => {
    let ipPostData = {
      id: id,
    };
    helper
      .postData("https://bakxlxiqwosd.pocketswap.org/api/whitelist/deleteip", ipPostData)
      .then((res) => {
        if (res.data.status == 200) {
          toast.success(res.data.message);
          var fil = WhitelistData.filter((item => item._id != id))
          setWhiteListData(fil)
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
      <h5> IP Whitelist Page</h5>
      <div align="right">
        <button className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }} onClick={AddNewIpWhitelist}>
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

export default Whitelist;
