import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import styles from "./portfolio.module.css";
import Pagination from 'react-bootstrap/Pagination';
import work1Img from "../assets/image/work1.jpeg";
import work2Img from "../assets/image/work2.jpeg";
import work3Img from "../assets/image/work3.jpeg";
import work4Img from "../assets/image/work4.jpeg";
import work5Img from "../assets/image/work5.jpeg";

const worksData = [
  {
    id: 1,
    image: work1Img,
    title: "Dental Scaling",
  },
  {
    id: 2,
    image: work2Img,
    title: "Dental Scaling",
  },
  {
    id: 3,
    image: work3Img,
    title: "Dental Scaling",
  },
  {
    id: 4,
    image: work4Img,
    title: "Dental filling",
  },
  {
    id: 5,
    image: work5Img,
    title: "Dental filling",
  },
];

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active} >
      {number}
    </Pagination.Item>,
  );
}

export default function Portfolio() {
  return (
    <section className={styles.block}>
      <Container fluid className={styles.container}>
        <div className={styles.titleHolder}>
          <h2>Portfolio</h2>
          <p>Our awesome works</p>
        </div>
        <Row className={styles.portfolioList}>
          {worksData.map((works) => {
            return (
              <Col sm={3} key={works.id}>
                <div className={styles.portfolioWrapper}>
                  <Image src={works.image}  className={styles.image} />
                  <div className={styles.label}>
                    <h3>{works.title}</h3>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Pagination>{items}</Pagination>
      </Container>
    </section>
  );
}
