import React, { PropTypes } from "react";

export default class AddPayCheck extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.payCheckDate}</span>
        <span>{this.props.payCheckNumber}</span>
        <span>{this.props.payCheckAmount}</span>
      </li>
    );
  }
}
