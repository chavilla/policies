import React from "react";
import PoliciesScreen from "./PoliciesScreen";
import { useSelector } from "react-redux";

const PoliciesComponent = () => {

  const { activePolicie } = useSelector( state => state.policies );

  return <PoliciesScreen  activePolicie={activePolicie} />;
};

export default PoliciesComponent;
