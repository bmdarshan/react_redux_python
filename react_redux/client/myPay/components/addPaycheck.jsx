import React from "react";
import {
  form,
  FormControl,
  InputGroup,
  ControlLabel,
  Row,
  Col,
  Button
} from "react-bootstrap";

export default class AddPayCheck extends React.Component {
  constructor(props) {
    super(props);
    this.addNewPaycheck = this.addNewPaycheck.bind(this);
    this.state = {};
  }

  addNewPaycheck() {
    console.log(this.state);
    let newPayCheck = {
      payCheckNumber: this.state.payCheckNumber,
      payCheckDate: this.state.payCheckDate,
      payCheckAmount: this.state.payCheckAmount
    };
    console.log(newPayCheck);
    this.props.addNewPaycheck(newPayCheck);
  }

  render() {
    return (
      <form>
        <Row className="show-grid">
          <Col xs={3} md={3}>
            <InputGroup>
              <ControlLabel>Check #</ControlLabel>
              <FormControl type="text" value={this.state.payCheckNumber} />
            </InputGroup>
          </Col>
          <Col xs={3} md={3}>
            <InputGroup>
              <ControlLabel>Check date</ControlLabel>
              <FormControl type="text" value={this.state.payCheckDate} />
            </InputGroup>
          </Col>
          <Col xs={3} md={3}>
            <InputGroup>
              <ControlLabel>Check Amount</ControlLabel>
              <FormControl type="text" value={this.state.payCheckAmount} />
            </InputGroup>
          </Col>
        </Row>
        <Button bsStyle="primary" onClick={this.addNewPaycheck()}>
          AddPayCheck
        </Button>
      </form>
    );
  }
}
