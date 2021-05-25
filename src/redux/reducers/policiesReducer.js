import { types } from "../types/types";

const initialState = {
  policies: [],
  activePolicie: null,
  activeIndex: null,
};

export const PoliciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getPolicies:
      return {
        ...state,
        policies: action.payload,
      };

    case types.setActivePolicie:
      return {
        ...state,
        activePolicie: action.payload.activePolicie,
        activeIndex: action.payload.activeIndex,
      };

    default:
      return state;
  }
};
