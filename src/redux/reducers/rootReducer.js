import { combineReducers } from "redux";
import { PoliciesReducer } from "./policiesReducer";

export const rootReducer = combineReducers({
  policies: PoliciesReducer,
});