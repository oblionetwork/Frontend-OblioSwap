import React, { useCallback, useState } from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CSelect
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { MdSecurity } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { updateGlobalChainId } from "src/Actions/Actions";

const TheHeaderDropdown = () => {
  let history = useHistory();

  const goToSiteSettings = () => {
    history.push("/F3WIBjoms3ojEq6lKrACw");
  };

  const goToSecurity = () => {
    history.push("/h97OyItcsXWDJbqqMWAG8g");
  };

  const adminLogout = () => {
    var option = window.confirm("Are you sure want to logout?");
    if (option) {
      history.push("/login");
      localStorage.clear();
    }
  };

  const dispatch = useDispatch();
  const onSelectChange = useCallback((event) => {
    dispatch(updateGlobalChainId(event.target.value));
  }, [])

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <div style={{
        display: "flex",
        width: "187px",
        position: "relative",
        alignItems: "end"
      }}>
        {/* <div style={{
          display: "flex",
          width: "500px",
          position: "relative",
          alignItems: "center"
        }}>
          please select chain
          <CSelect
            onChange={onSelectChange}
            style={{
              width: "100px",
            }}>
            <option value="1">ETH</option>
            <option value="65">OK-test</option>
            <option value="66">OK-main</option>
          </CSelect>
        </div> */}
        <CDropdownToggle className="c-header-nav-link" caret={false}>
          <h6 style={{ marginTop: "10px", marginRight: "10px", alignItems: "center" }}>
            Welcome Admin!
          </h6>
          <div className="c-avatar">
            <CImg
              src={"avatars/8.jpg"}
              className="c-avatar-img"
              alt="admin@bootstrapmaster.com"
            />
          </div>
        </CDropdownToggle>
      </div>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong> Settings</strong>
        </CDropdownItem>

        <CDropdownItem onClick={goToSiteSettings}>
          <CIcon name="cil-settings" className="mfe-2" />
          Site Settings
        </CDropdownItem>
        <CDropdownItem onClick={goToSecurity}>
          <MdSecurity />
          &nbsp; Security
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={adminLogout}>
          <IoMdLogOut /> &nbsp; Log out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
