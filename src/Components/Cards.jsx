import React from "react";
import Img1 from "../Images/nature.jpg";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
const Cards = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={Img1} height={550} width={1400} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img1} height={550} width={1400} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img1} height={550} width={1400} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Cards;
