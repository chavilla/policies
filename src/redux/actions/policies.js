import { types } from "../types/types";
import data from "../../data";

// get All policies
export const getPolicies = () => {
  return async (dispatch) => {
    dispatch(setPolicies(data));
  };
};

export const setPolicies = (data) => ({
  type: types.getPolicies,
  payload: data,
});

export const startSetActivePolicie = (policie, index) => {
  return async (dispatch) => {
    dispatch(setActivePolicie(policie, index));
  };
};

export const setActivePolicie = (policie, index) => ({
  type: types.setActivePolicie,
  payload: {
    activePolicie: policie,
    activeIndex: index,
  },
});
