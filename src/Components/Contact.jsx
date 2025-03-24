import Container from "react-bootstrap/Container";
import styles from "./contact.module.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <section className={styles.block}>
      <Container fluid className={styles.container}>
        <div className={styles.titleHolder}>
          <h2>Contact Us</h2>
          <p>Get connected with us</p>
        </div>
        <Form className={styles.contactForm}>
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your contact"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={styles.textarea}>
              <Form.Control
                as="textarea"
                placeholder="Leave a message here..."
                required
              />
            </Col>
          </Row>
          <div className={styles.submitButton}>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className={styles.googleMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254777.8971018574!2d11.345637537850557!3d3.8306319981775894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54bad35e693c51!2zWWFvdW5kw6k!5e0!3m2!1sen!2scm!4v1742697590750!5m2!1sen!2scm"
          // allowfullscreen=""
          // loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid  className={styles.container}>
        <Row className={styles.contactInfo}>
            <Col sm={4} className={styles.contactDetail}>
              <i className="bi bi-envelope-fill"></i>
              kevineingrid97@gmail.com
            </Col>
            <Col sm={4} className={styles.contactDetail}>
              <i className="bi bi-telephone-fill"></i>
              681-526-616
            </Col>
            <Col sm={4} className={styles.contactDetail}>
              <i className="bi bi-geo-alt-fill"></i>
              Yaounde, Cameroon
            </Col>
        </Row>
      </Container>
    </section>
  );
}
