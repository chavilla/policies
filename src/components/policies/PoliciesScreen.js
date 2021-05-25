import React from "react";
import PolicieActiveComponent from "./PolicieActiveComponent";
import NothingComponent from "./NothingComponent";
import './policiesComponent.css';

const PoliciesScreen = ({ activePolicie }) => {
  
  return (
    <div className="policies__screen">
      <h2 className="">Póliza seleccionada</h2>
      {activePolicie ? (
        /* if a policie is selected */
        <PolicieActiveComponent key={ activePolicie._id } activePolicie={activePolicie} />
      ) : (
        <NothingComponent />
      )}
    </div>
  );
};

export default PoliciesScreen;
