import React, { PropTypes } from "react";
import PayCheck from "./payCheck.jsx";

export default class PayCheckList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let header = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data"
    });
    let defaultOptions = {
      url: "http://localhost:5000/payChecks",
      method: "GET",
      mode: "no-cors",
      headers: header,
      body: null
    };
    let options = {
      url: "http://localhost:5000/payChecks",
      defaultOptions: defaultOptions
    };
    this.props.fetchSavedPaychecksFromService(options);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.payCheckList.map(payCheck => (
            <PayCheck key={payCheck.payCheckNumber} payCheck={payCheck} />
          ))}
        </ul>
      </div>
    );
  }
}
