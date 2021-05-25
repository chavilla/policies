import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPolicies } from "../../../redux/actions/policies";
import SidebarScreen from "./SidebarScreen";

const SidebarComponent = () => {
  const dispatch = useDispatch();
  // get the policies 
  const { policies } = useSelector((state) => state.policies);

  useEffect(() => {
    dispatch(getPolicies());
  }, [dispatch]);

  return <SidebarScreen policies={policies} />;
};

export default SidebarComponent;
