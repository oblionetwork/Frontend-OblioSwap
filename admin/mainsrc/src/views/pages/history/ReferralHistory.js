import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import axios from "axios";
import DataTable, { createTheme } from "react-data-table-component";
import helper from 'src/helpers/axiosHelper';

const ReferralHistory = () => {

    const [referralData, setReferralData] = useState([]);
    const data = referralData;
    const [pending, setPending] = React.useState(true);
    const apiURL = helper.referralURL()
    const columns = [
        {
            name: "S.No",
            cell: (row, index) => index + 1,
            width: "60px",
        },
        {
            name: "User Address",
            selector: "userAddress"
        },
        {
            name: "Referral Address",
            selector: "referralAddress"
        },
        {
            name: "Date",
            selector: "date"
        },
        {
            name: "Time",
            selector: "time"
        }
    ]
    useEffect(() => {
        axios
            .get(apiURL + "/listreferralhistory")
            .then(res => {
                setReferralData(res.data.result)
                setPending(false)
            })
            .catch(err => console.error(err));
    }, [])
    return (
        <div className="referralhistory-container">
            <h5>Referral History</h5>
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
    )
}

export default ReferralHistory
