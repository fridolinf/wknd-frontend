import React from "react";
import icon from "../assets/images/icon.png";
import { Row, Col } from "antd";

function Header() {
  return (
    <header>
      <Row className="header-row">
        <Col
          className="gutter-row"
          xs={{ span: 3, offset: 3 }}
          xl={{ span: 1, offset: 5 }}
        >
          <img className="icon-header" src={icon} alt="icon header" />
        </Col>
        <Col className="gutter-row" xs={{ span: 6 }} xl={{ span: 4 }}>
          <p className="greeting-header">Good Morning</p>
          <p className="name-header">Fellas</p>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
