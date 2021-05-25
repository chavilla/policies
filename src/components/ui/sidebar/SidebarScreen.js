import React from "react";
import PolicieSidebarComponent from "./PolicieSidebarComponent";

const SidebarScreen = ({ policies }) => {
  // sort by price
  policies.sort(function (a, b) {
    if (a.monthly_price > b.monthly_price) {
      return 1;
    }
    if (a.monthly_price < b.monthly_price) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <h2 className="subtitle text-center">Pólizas</h2>
        <ul>
          {policies.map((p, index) => (
            <PolicieSidebarComponent key={p._id} policie={p} index={index} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarScreen;
