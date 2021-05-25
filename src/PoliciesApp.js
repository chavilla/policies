import React from "react";
import { Provider } from "react-redux";
import LayoutComponent from "./components/ui/LayoutComponent";
import { store } from "./redux/store/store";

const PoliciesApp = () => {
  return (
    <Provider store={store}>
        <LayoutComponent />
    </Provider>
  );
};

export default PoliciesApp;
