import React, { PropTypes } from "react";

export default class AddPayCheck extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <span>{this.props.payCheck.payCheckDate}</span>
        <span>{this.props.payCheck.payCheckNumber}</span>
        <span>{this.props.payCheck.payCheckAmount}</span>
      </li>
    );
  }
}
