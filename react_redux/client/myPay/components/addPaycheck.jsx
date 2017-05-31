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
    this.state = {
      payCheckNumber: '',
      payCheckDate: '',
      payCheckAmount: ''
    };
    this.addNewPaycheck = this.addNewPaycheck.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addNewPaycheck() {
    let newPayCheck = {
      payCheckNumber: this.state.payCheckNumber,
      payCheckDate: this.state.payCheckDate,
      payCheckAmount: this.state.payCheckAmount
    };
    this.props.addNewPaycheck(newPayCheck);
  }

  render() {
    return (
      <form>
        <Row className="show-grid">
          <Col xs={3} md={3}>
            <InputGroup>
              <ControlLabel>Check #</ControlLabel>
              <FormControl
              type="text"
              name="payCheckNumber"
              value={this.state.payCheckNumber}
              onChange={this.handleInputChange}/>
            </InputGroup>
          </Col>
          <Col xs={3} md={3}>
            <InputGroup>
              <ControlLabel>Check date</ControlLabel>
              <FormControl
              type="text"
              name='payCheckDate'
              value={this.state.payCheckDate}
              onChange={this.handleInputChange}/>
            </InputGroup>
          </Col>
          <Col xs={3} md={3}>
            <InputGroup>
              <ControlLabel>Check Amount</ControlLabel>
              <FormControl
              type="text"
              name='payCheckAmount'
              value={this.state.payCheckAmount}
              onChange={this.handleInputChange}/>
            </InputGroup>
          </Col>
        </Row>
        <Button bsStyle="primary" onClick={this.addNewPaycheck}>
          AddPayCheck
        </Button>
      </form>
    );
  }
}
