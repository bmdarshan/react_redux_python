import React from "react";
import AddPayCheckContainer from "../containers/addPayCheckContainer.js";
import PayCheckListContainer from "../containers/payCheckListContainer.js";

export default class MyPayBody extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AddPayCheckContainer />
        <PayCheckListContainer />
      </div>
    );
  }
}
