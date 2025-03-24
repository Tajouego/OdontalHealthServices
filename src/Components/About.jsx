import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import styles from "./about.module.css";
import aboutImg from "../assets/image/aboutImage.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function About() {
  var qualities = [
    { name: "Empathy & Patience", value: 90 },
    { name: "Strong Communication", value: 85 },
    { name: "Professionalism & Integrity", value: 95 },
  ];

  return (
    <section id="about" className={styles.block}>
      <Container fluid className={styles.container}>
        <div className={styles.titleHolder}>
          <h2>About Us</h2>
          <p>Learn more about your doctor</p>
        </div>

        <Row>
          <Col sm={6}>
            <Image src={aboutImg} fluid />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              sequi dolore temporibus veritatis praesentium dolor porro
              architecto totam? Omnis voluptate cupiditate ut, numquam officia
              voluptas temporibus sed error autem rerum!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis fugiat sequi ex quam id, assumenda a delectus sint
              provident facere.
            </p>
            {qualities.map((quality) => (
              <div className="my-4" key={quality.name}>
                <h4 className="fs-5 fw-light">{quality.name}</h4>
                <ProgressBar now={quality.value} label={`${quality.value}%`}/>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
