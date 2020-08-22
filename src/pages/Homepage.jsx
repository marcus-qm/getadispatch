import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Homepage = () => (
  <Container>
    <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col xs={6} className="d-none d-lg-block">
        dispatch component goes here
      </Col>
    </Row>
  </Container>
);

export default Homepage;
