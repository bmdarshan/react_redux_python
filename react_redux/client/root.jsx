import React, { PropTypes } from "react";
import { Provider } from "react-redux";
import { Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore } from "redux";

import myPayCheckApp from "./myPay/reducers/reducers.js";
import MyOrganizer from "./myOrganizer/components/myOrganizer.jsx";
import MyPay from "./myPay/components/myPay.jsx";

let store = createStore(myPayCheckApp);

console.log(store.getState())
const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/myOrganizer" component={MyOrganizer} />
        <Route path="/myPay" component={MyPay} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Root;
