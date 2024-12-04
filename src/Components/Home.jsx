import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card1 from "./Cards";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
import paris from "../Images/paris.jpg";
import nice from "../Images/nice.jpg";
import Provence from "../Images/Provence.jpg";
import croissant from "../Images/Croissant.jpg";
import macarons from "../Images/Macarons.jpg";
import frenchBaguette from "../Images/FrenchBaguette.jpg";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const redirectToFood = () => {
    navigate("/Food");
  };
  const redirectToTravel = () => {
    navigate("/Tourism");
  };

  return (
    <div>
      <Card1 />
      <div className="container">
        <div className="row my-4">
          <h4 className="col-12 cities">Popular Cities in France</h4>
          <div className="col-12 text-end">
            <Button
              style={{ borderRadius: "50px", borderColor: "black" }}
              variant="light"
            >
              See All
            </Button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={paris} />
              <Card.Body>
                <Card.Title>Paris</Card.Title>
                <Card.Text className="paraText">
                  The capital city of France, known for its iconic landmarks
                  like the Eiffel Tower, Notre Dame Cathedral, and the Louvre
                  Museum.
                </Card.Text>
                <Button
                  style={{ background: "#333", borderColor: "#333" }}
                  variant="primary"
                  onClick={redirectToTravel}
                >
                  Details
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={nice} />
              <Card.Body>
                <Card.Title>Nice</Card.Title>
                <Card.Text className="paraText">
                  Located on the French Riviera, Nice offers beautiful beaches,
                  a charming old town, and the famous Promenade des Anglais.
                </Card.Text>
                <Button
                  style={{ background: "#333", borderColor: "#333" }}
                  variant="primary"
                  onClick={redirectToTravel}
                >
                  Details
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={Provence} />
              <Card.Body>
                <Card.Title>Provence</Card.Title>
                <Card.Text className="paraText">
                  A region in southeastern France known for its stunning
                  lavender fields, rolling vineyards, and picturesque villages.
                </Card.Text>
                <Button
                  style={{ background: "#333", borderColor: "#333" }}
                  variant="primary"
                  onClick={redirectToTravel}
                >
                  Details
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <hr />
      <div className="container">
        <div className="row my-4">
          <h4 className="col-12 cities">Popular Food in France</h4>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={croissant} />
              <Card.Body>
                <Card.Title>Croissant</Card.Title>
                <Card.Text>
                  A croissant is a laminated, yeast-leavened bakery product that
                  contains dough/roll-in fat layers.
                </Card.Text>
                <Button
                  style={{ background: "#333", borderColor: "#333" }}
                  variant="primary"
                  onClick={redirectToFood}
                >
                  Details
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={macarons} />
              <Card.Body>
                <Card.Title>Macarons</Card.Title>
                <Card.Text>
                  Macarons are sweet meringue-based confections made with egg
                  whites, sugar, and almond flour, filled with ganache,
                  buttercream, or jam.
                </Card.Text>
                <Button
                  style={{ background: "#333", borderColor: "#333" }}
                  variant="primary"
                  onClick={redirectToFood}
                >
                  Details
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={frenchBaguette} />
              <Card.Body>
                <Card.Title>French Baguette</Card.Title>
                <Card.Text>
                  An iconic French bread, crispy on the outside and soft on the
                  inside, perfect for pairing with cheese or jam.
                </Card.Text>
                <Button
                  style={{ background: "#333", borderColor: "#333" }}
                  variant="primary"
                  onClick={redirectToFood}
                >
                  Details
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
