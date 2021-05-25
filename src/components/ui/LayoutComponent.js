import React from "react";
import HeaderComponent from "./header/HeaderComponent";
import SidebarComponent from "./sidebar/SidebarComponent";
import PoliciesComponent from "../policies/PoliciesComponent";

const LayoutComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="main">
        <SidebarComponent />
        <PoliciesComponent />
      </div>
    </div>
  );
};

export default LayoutComponent;
