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

const listCms = helper.listCms();


const Cms = () => {

    let history = useHistory();
    const [currencyListData, setCurrencyListData] = useState([]);
    const [pending, setPending] = React.useState(true);

    useEffect(() => {
        helper.getData(listCms)
            .then((res) => {
                setCurrencyListData(res.data.result);
                setPending(false);
            })
            .catch((err) => toast.error(err));
    }, []);
 
    
    const AddCMS = () => {
        history.push("/addcms");
    };


    const data = currencyListData;
    // const apiURL = helper.currencyURL()
    const columns = [
        {
            name: "S.No",
            cell: (props, index) => index + 1,
            filterable: false,
            sortable: false,
            width: "100px"
        },
        {
            name: "Title",
            selector: "Heading",
            // Cell: (props) => <span>{props.value}</span>,
            filterable: false,
            sortable: true,
            width: "580px"
        },
        {
            name: "Description",
            selector: "Detail",
            // Cell: (props) => <span>{props.value}</span>,
            filterable: false,
            sortable: true,
            width: "750px"
        },
        {
            name: "Action",
            accessor: '_id',
            cell: (props) => (
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => clickHandler(props._id)}
                    id={props.ID}
                >
                    <FiEdit />
                </button>
            ),

        },
    ];

    const clickHandler = (id) => {
        history.push("/editcms/" + id);
    };

    return (
        <div>
            <h5>CMS List</h5>
            <div align="right">
                <button className="btn btn-outline-primary" onClick={AddCMS}>
                    Add CMS
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

export default Cms;
