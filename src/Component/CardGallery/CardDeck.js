import React from "react";
import "./CardDeck.css";
import { Col, Row, Container } from "reactstrap";

const CardDeck = props => {
  return (
    <Container id="profilesprev">
      <Row>
        <Col xs="12" md="4" lg="4">
          {" "}
          text{" "}
        </Col>
        <Col xs="12" md="4" lg="4">
          {" "}
          text{" "}
        </Col>
        <Col xs="12" md="4" lg="4">
          {" "}
          text{" "}
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="4" lg="4">
          {" "}
          text{" "}
        </Col>
        <Col xs="12" md="4" lg="4">
          {" "}
          text{" "}
        </Col>
        <Col xs="12" md="4" lg="4">
          {" "}
          text{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default CardDeck;
