import React, { useEffect, useState } from "react";
import { CFooter } from "@coreui/react";
import axios from "axios";
import helper from "src/helpers/axiosHelper";

const apiURL = helper.siteSettingsURL()

const TheFooter = () => {
  const [text, setText] = useState("")

  useEffect(() => {
    axios
      .get(apiURL + "getsitesettings")
      .then(res => {
        setText(res.data.result.copyRightsText)
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy;{text}</span>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
