import React from "react";
import {
  form,
  FormGroup,
  FormControl,
  InputGroup,
  ControlLabel,
  Row,
  Col
} from "react-bootstrap";

export default class MyPayBody extends React.Component {
  render() {
    return (
      <form>
        <Row className="show-grid">
          <Col xs={3} md={3}>
            <InputGroup>
              <ControlLabel>Check #</ControlLabel>
              <FormControl type="text" />
            </InputGroup>
          </Col>
          <Col xs={3} md={3}>
            <InputGroup>
              <ControlLabel>Check date</ControlLabel>
              <FormControl type="text" />
            </InputGroup>
          </Col>
          <Col xs={3} md={3}>
            <InputGroup>
              <ControlLabel>Check Amount</ControlLabel>
              <FormControl type="text" />
            </InputGroup>
          </Col>
        </Row>
      </form>
    );
  }
}
