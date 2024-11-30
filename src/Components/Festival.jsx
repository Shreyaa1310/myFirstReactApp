import React from "react";
// import Food from "./Food";
import Card from "react-bootstrap/Card";
import Img1 from "../Images/nature.jpg";
import Button from "react-bootstrap/esm/Button";
import "./Festival.css";
import Footer from "./Footer";
import festivals from "../festivalData";


const Festival = () => {
  return (
    <div>
      <div className="heading">
        <h4>Festivals of France</h4>
      </div>
      <div className="festival-container">
        {festivals.map((festival) => (
          <Card key={festival.id} style={{ width: "18rem", margin: "1rem" }}>
            <Card.Img variant="top" src={festival.image} alt={festival.name} />
            <Card.Body>
              <Card.Title>{festival.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {festival.month}
              </Card.Subtitle>
              <Card.Text>{festival.description}</Card.Text>
              {/* <Button variant="primary">Learn More</Button> */}
            </Card.Body>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Festival;


