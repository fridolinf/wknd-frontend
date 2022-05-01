import React from "react";

import Slider from "react-slick";
import { Card, Row } from "antd";

function CardTestimoni({ dataTesti }) {
  const settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    className: "center",
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div>
      <Row justify="center">
        <Slider {...settings} className="slider-section">
          {dataTesti.map((data) => (
            <div key={data.id}>
              <Card hoverable className="card-slider" bordered={false}>
                <h3>{data.by}</h3>
                <p>{data.testimony}</p>
              </Card>
            </div>
          ))}
        </Slider>
      </Row>
    </div>
  );
}

export default CardTestimoni;
