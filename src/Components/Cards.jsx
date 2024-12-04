import React from "react";
import Img1 from "../Images/nature.jpg";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import croissant from "../Images/Croissant.jpg";
import ratatouille from "../Images/Ratatouille.jpg";
import paris from "../Images/paris.jpg";
import nice from "../Images/nice.jpg";
import parisImg from "../Images/paris2.jpg";

const Cards = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src={parisImg}
            className="d-block w-100"
            alt="Eiffel Tower"
            style={{ height: "550px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Eiffel Tower</h3>
            <p>
              It rests on a base that is 5 meters (17 feet) tall, and the TV
              antenna atop the tower gives it a total elevation of 330 meters
              (1,083 feet).
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={croissant}
            className="d-block w-100"
            alt="Croissant"
            style={{ height: "550px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Croissant</h3>
            <p>Croissants belong to the Viennoiserie or pastry category</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ratatouille}
            className="d-block w-100"
            alt="Ratatouille"
            style={{ height: "550px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Ratatouille</h3>
            <p>
              A traditional French vegetable stew made with zucchini, eggplant,
              bell peppers, and tomatoes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={paris}
            className="d-block w-100"
            alt="Paris"
            style={{ height: "550px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Paris</h3>
            <p>
              The capital city of France, known for its iconic landmarks like
              the Eiffel Tower.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={nice}
            className="d-block w-100"
            alt="Nice"
            style={{ height: "550px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Nice</h3>
            <p>
              Located on the French Riviera, Nice offers beautiful beaches, a
              charming old town, and the famous Promenade.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Cards;
