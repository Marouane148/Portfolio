import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFlutter,
  SiPowerbi,
  SiXampp,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiPowerbi/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiXampp/>
      </Col>
    </Row>
  );
}

export default Toolstack;