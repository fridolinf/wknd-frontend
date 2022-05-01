import React from "react";
import bluePath from "../assets/images/topblue.png";
import bluePathWeb from "../assets/images/topblue-web.png";
import blackPath from "../assets/images/topblack.png";
import blackPathWeb from "../assets/images/topblack-web.png";
import imgHelpAndTips from "../assets/images/path-help-tips.png";
import robot from "../assets/images/robots.png";
import { Col, Row } from "antd";

function IntroSection() {
  return (
    <div>
      <Row className="first-intro" justify="center">
        <Col className="weekend" xs={{ span: 24 }} xl={{ span: 24, offset: 8 }}>
          <p>WEEKEND FROM HOME</p>
        </Col>
        <Col className="stay-active" xl={{ offset: 8 }}>
          <p>Stay active with a little workout.</p>
        </Col>
      </Row>
      <Row className="path">
        <img className="blue-path" src={bluePath} alt="blue path" />
        <img className="blue-path-web" src={bluePathWeb} alt="blue path" />
        <img className="black-path" src={blackPath} alt="black path" />
        <img className="black-path-web" src={blackPathWeb} alt="black path" />
      </Row>
      <Col className="circle-blue" xl={{ offset: 9 }}></Col>
      <Col className="col-robots" xs={{ offset: 6 }}>
        <img className="robots" src={robot} alt="robot" />
        <img
          className="img-help-intro"
          src={imgHelpAndTips}
          alt="path img help and tips"
        />
      </Col>
      <Col className="letsgo-section" xs={{ offset: 4 }}>
        <p className="letsgo">Let's Go</p>
      </Col>
    </div>
  );
}

export default IntroSection;
