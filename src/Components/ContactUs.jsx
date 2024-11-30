import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    console.log(formData);
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "50px 0" }}>
      <Container className="p-4 shadow-lg bg-white rounded">
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row>
          {/* Contact Form */}
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>

          {/* Contact Information */}
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h5>Get in Touch</h5>
            <p>
              Feel free to reach out to us with any questions or feedback. We’re
              here to help!
            </p>
            <ul className="list-unstyled">
              <li>
                <strong>Address:</strong> 123 Main Street, Paris, France
              </li>
              <li>
                <strong>Phone:</strong> +33 1 23 45 67 89
              </li>
              <li>
                <strong>Email:</strong> contact@dummywebsite.com
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
