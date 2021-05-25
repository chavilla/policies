import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePolicie } from "../../../redux/actions/policies";
import "./policieSidebarComponent.css";

const PolicieSidebarComponent = ({ policie, index }) => {
  // get the active Index
  const { activeIndex } = useSelector((state) => state.policies);
  const dispatch = useDispatch();

  // onClick event
  const handleClick = (policie, index) => {
    dispatch(setActivePolicie(policie, index));
  };

  return (
    <li
      className="pointer policie__item"
      onClick={() => handleClick(policie, index)}
    >
      <p> Póliza {index + 1} - Ver detalles </p>
      <div
        className={`radius ${index === activeIndex ? "active_radius" : ""} `}
      ></div>
    </li>
  );
};

export default PolicieSidebarComponent;
