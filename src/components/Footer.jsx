import { Col, Row } from "antd";
import React from "react";

function Footer() {
  return (
    <footer>
      <Row>
        <Col xs={{ span: 3, offset: 1 }} xl={{ span: 1, offset: 5 }}>
          <div className="wknd">
            <p>
              <b>wknd</b>@2020
            </p>
          </div>
        </Col>
        <Col xs={{ span: 3, offset: 13 }} xl={{ span: 1, offset: 13 }}>
          <div className="alpha">
            <p>alpha version 0.1</p>
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
