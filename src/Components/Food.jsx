import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Food.css";
import foodData from "../foodData";
import Footer from "./Footer"
const Food = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className="text-primary">Best Food to Try in France</h2>
          <p className="text-muted">
            Discover the most iconic and delicious French dishes!
          </p>
        </div>

        {/* Food Cards */}
        <div className="row g-4  outer-container py-4">
          {foodData.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <Card className="shadow h-100">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Food;
