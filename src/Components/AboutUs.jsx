import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "50px 0" }}>
      <Container>
        <h2 className="text-center mb-4">About Us</h2>
        <p className="text-center text-muted mb-5">
          Welcome to our website! We are dedicated to providing exceptional
          services and creating unforgettable experiences. Learn more about who
          we are and what we stand for.
        </p>

        {/* Mission and Vision Section */}
        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <Card className="shadow-lg h-100">
              <Card.Body>
                <Card.Title className="text-primary">Our Mission</Card.Title>
                <Card.Text>
                  To deliver excellence in everything we do, ensuring our
                  customers receive top-notch services and a memorable
                  experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="shadow-lg h-100">
              <Card.Body>
                <Card.Title className="text-primary">Our Vision</Card.Title>
                <Card.Text>
                  To become a global leader in our industry, inspiring trust and
                  satisfaction among all our stakeholders.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Team Section */}
        <h3 className="text-center mb-4">Meet Our Team</h3>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Jane Doe</Card.Title>
                <Card.Text>CEO & Founder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>John Smith</Card.Title>
                <Card.Text>Head of Marketing</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Emily Brown</Card.Title>
                <Card.Text>Lead Designer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
