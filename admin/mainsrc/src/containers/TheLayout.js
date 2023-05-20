import React from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";


const TheLayout = () => {
  return (
    <>
      {localStorage.getItem("auth") ? (
        <div className="c-app c-default-layout">
          <TheSidebar />
          <div className="c-wrapper">
            <TheHeader />
            <div className="c-body">
              <TheContent />
            </div>
            <TheFooter />
          </div>
        </div>
      ) : (
        <div>
          <div className="c-body">
            <TheContent />
          </div>
        </div>
      )}
    </>
  );
};

export default TheLayout;
