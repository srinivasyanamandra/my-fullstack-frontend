import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp contact-details" >
        <Row className="justify-content-center align-items-center text-center">
          <Col lg={12}>
            <h3>Contact Me</h3>
            <p><strong>Email:</strong> srinivas.yanamandra04@gmail.com</p>
            <p><strong>Phone:</strong> +91 7993113381</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/srinivas-yanamandra19/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/srinivas-yanamandra19/</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/srinivasyanamandra" target="_blank" rel="noopener noreferrer">https://github.com/srinivasyanamandra</a></p>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
