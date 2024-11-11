import React from "react";
// import Food from "./Food";
import Card from "react-bootstrap/Card";
import Img1 from "../Images/nature.jpg";
import Button from "react-bootstrap/esm/Button";
import "./Technology.css";
import Footer from "./Footer";
const Technology = () => {
  // const person = [
  //   { id: 1, gender: "male" },
  //   { id: 2, gender: "female" },
  //   { id: 3, gender: "others" },
  // ];
  return (
    <div>
      {" "}
      <div className="heading">
        <h4>Best Technology of France</h4>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "4%",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Img1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Img1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Img1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Technology;
