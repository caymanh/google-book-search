import React from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1 className="text-center my-5 fs-5">404 Page Not Found</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
