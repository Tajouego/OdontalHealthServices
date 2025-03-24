import Carousel from "react-bootstrap/Carousel";
import heroImg1 from "../assets/image/heroImage1.jpg";
import heroImg2 from "../assets/image/heroImage2.jpg";
import heroImg3 from "../assets/image/heroImage3.jpg";
import heroImg4 from "../assets/image/heroImage4.jpg";
import styles from "./apphero.module.css";

var heroData = [
  {
    id: 1,
    image: heroImg1,
    title: "A Smile That Reflects Your Best Self",
    description:
      "It's time to prioritize your dental well-being. With a holistic approach to care, we’ll achieve a smile that empowers you to feel confident in every moment of your life.",
  },
  {
    id: 2,
    image: heroImg2,
    title: "Your Smile, Our Priority",
    description:
      "A beautiful smile starts with the right care. From routine cleanings to advanced dental procedures, we are committed to providing high-quality, personalized treatments to keep your teeth strong and healthy.",
  },
  {
    id: 3,
    image: heroImg3,
    title: "More Than Just a Smile: Whole-Body Health",
    description:
      "Good dental care goes beyond your mouth. Maintaining a healthy smile plays a critical role in your overall health, and I’m here to support you in keeping both your body and smile at their best.",
  },
  {
    id: 4,
    image: heroImg4,
    title: "Expert Care You Can Trust",
    description:
      "Good dental health requires not just skill, but trust. Feel assured that with each visit, you're receiving expert care that’s focused on your comfort, well-being, and long-term oral health.",
  },
];

export default function AppHero() {
  return (
    <section className={styles.block}>
      <Carousel className={styles.container}>
        {heroData.map(hero => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                alt={`slide + {hero.id}`}
                src={hero.image}
                className={`d-block w-100 ${styles.heroImg}`}
              />
              <Carousel.Caption className={` ${styles.heroCaption}`}>
                <h3 className="mb-3 fs-2 fw-bold">{hero.title}</h3>
                <p className=" mx-auto fs-6 lh-lg fw-bold">
                  {hero.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
