import React, { PropTypes } from "react";
import PayCheck from "./payCheck.jsx";

export default class PayCheckList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    console.log(this.props)
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
