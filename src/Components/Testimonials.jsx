import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import styles from "./testimonials.module.css";

var testimonialsData = [
  {
    id: 1,
    name: 'Ewane John',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptas quasi veniam eveniet aut esse numquam, nobis blanditiis tempore totam autem cum est odio consectetur enim sit perferendis. Iste, at, hic nihil obcaecati reprehenderit, mollitia amet voluptatum harum autem reiciendis excepturi animi repellendus vero temporibus ab ipsa non sapiente aperiam. Distinctio aliquam molestias nulla natus rem. Eaque placeat in, totam eum fugit velit autem eius. Maiores, autem incidunt reiciendis earum veritatis aspernatur corporis labore optio maxime est at quam expedita.' ,
    designation: 'Entrepreneur'
  },
  {
    id: 2,
    name: 'Tessa Monero',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!',
    designation: 'Architect'
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?',
    designation: 'CEO'
  }
]

export default function Testimonials() {
  return (
    <section className={styles.block}>
      <Container fluid className={styles.container}>
        <div className={styles.titleHolder}>
          <h2>Testimonials</h2>
          <p>What patients say about us</p>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimony => {
              return (
                <Carousel.Item key={testimony.id}>
                  <blockquote className={styles.quote}>
                    <p>{testimony.description}</p>
                    <cite>
                      <span className={styles.name}>{testimony.name}</span>
                      <span className={styles.designation}>{testimony.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}
