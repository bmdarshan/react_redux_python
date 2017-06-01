import React, { PropTypes } from "react";
import { Provider } from "react-redux";
import { Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

import configureStore from "./myPay/store/configureStore.js"
import MyOrganizer from "./myOrganizer/components/myOrganizer.jsx";
import MyPay from "./myPay/components/myPay.jsx";

const store = configureStore()

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
