import { Card, Col, Row } from "antd";
import React from "react";
import robot from "../assets/images/robots.png";
import pinkpath from "../assets/images/bottompink.png";
import imgHelpAndTips from "../assets/images/path-help-tips.png";
import { ArrowRightOutlined } from "@ant-design/icons";

function Conclusion({ dataConclution }) {
  return (
    <div className="conclusion-body">
      <div className="pov">
        <h1>POV</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>

        <h1>Resource</h1>
        <p>
          These cases are perfectly simple and easy to distinguish. In a free
          hour, when our power of choice is untrammelled and when nothing
          prevents our being able to do what we like best.
        </p>
        <img
          className="img-help-and-tips"
          src={imgHelpAndTips}
          alt="path img help and tips"
        />

        <h1>Help & Tips</h1>
        <Row gutter={{ lg: 16 }}>
          {dataConclution.map((data) => (
            <div className="help-section" key={data.id}>
              <Col>
                <Card
                  className="card-style"
                  hoverable
                  bordered={false}
                  cover={<img src={data.image} alt={data.title} />}
                  bodyStyle={{ display: "none" }}
                />
              </Col>
              <Col className="card-footer">
                <Col
                  className="card-title"
                  xs={{ span: 40, offset: 1 }}
                  xl={{ span: 30, offset: 1 }}
                >
                  {data.title}
                </Col>
                <Col xs={{ offset: 20 }} xl={{ offset: 20 }}>
                  <ArrowRightOutlined className="card-icon" />
                </Col>
              </Col>
            </div>
          ))}
        </Row>

        <div className="last-text">
          <h1>You're all set.</h1>
          <p>
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
        </div>
      </div>

      <img className="robot-bottom" src={robot} alt="robot" />
      <img src={pinkpath} alt="pink path" />
    </div>
  );
}

export default Conclusion;
