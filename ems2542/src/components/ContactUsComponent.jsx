import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUsComponent = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* Left Column - Google Map */}
        <Col md={6}>
          {/* Include your Google Map here */}
          {/* You can use an iframe to embed a Google Map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-123.456789!3d12.3456789!4m5!3m4!1s0x0:0x0!8m2!3d12.3456789!4d-123.456789"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </Col>

        {/* Right Column - Contact Form and Information */}
        <Col md={6}>
            <div className="text-center">

          <h2>Contact Us</h2>
          <p>Feel free to get in touch with us.</p>

          {/* Contact Form */}
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="companyName">
              <Form.Label>Company Name (Optional)</Form.Label>
              <Form.Control type="text" placeholder="Enter company name" />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-2">
              Send Message
            </Button>
          </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsComponent;
