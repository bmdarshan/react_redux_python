import React, { PropTypes } from "react";
import PayCheck from "./payCheck.jsx";

export default class PayCheckList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount() {
    let options = {
      url:'https://www.reddit.com/r/reactjs.json'
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