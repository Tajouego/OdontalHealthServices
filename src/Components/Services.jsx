import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./services.module.css";

const servicesData = [
  {
    id: 1,
    icon: "bi bi-1-circle",
    title: "Consultation and Counselling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 2,
    icon: "bi bi-2-circle",
    title: "Dental Scaling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 3,
    icon: "bi bi-3-circle",
    title: "Dental Filling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 4,
    icon: "bi bi-4-circle",
    title: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 5,
    icon: "bi bi-5-circle",
    title: "Teeth extraction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 6,
    icon: "bi bi-6-circle",
    title: "Prosthesis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
];

export default function Services() {
  return (
    <section className={styles.block}>
      <Container fluid className={styles.container}>
        <div className={styles.titleHolder}>
          <h2>Our Services</h2>
          <p>Services we provide</p>
        </div>
        <Row>
          {servicesData.map((service) => {
            return (
              <Col sm={4} className={styles.holder} key={service.id}>
                <div className={styles.icon}>
                  <i className={service.icon}></i>
                </div>
                <h3 className="fs-5 my-4">{service.title}</h3>
                <p className="fw-light">{service.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
