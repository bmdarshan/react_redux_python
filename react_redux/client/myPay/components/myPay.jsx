import React from "react";
import MyPayHeader from "./myPayHeader.jsx";
import MyPayBody from "./myPayBody.jsx";
import MyPayFooter from "./myPayFooter.jsx";
import { Grid, Row, Col, Well } from "react-bootstrap";

export default class MyPay extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Well>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <MyPayHeader />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <MyPayBody />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <MyPayFooter />
              </Col>
            </Row>
          </Well>
        </Grid>
      </div>
    );
  }
}
