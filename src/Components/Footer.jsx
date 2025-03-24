import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import styles from './footer.module.css'

export default function Footer (){
    const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid className={styles.container}> 
      <div className={styles.copyright}>&copy; 2025 OdontalHealthServices. All Right Reserved.</div>
      <div className={styles.socials}>
        <ul>
          <li><a href="https://www.facebook.com"><i className="bi bi-facebook"></i></a></li>
          <li><a href="https://www.tiktok.com"><i className="bi bi-tiktok"></i></a></li>
          <li><a href="https://www.linkedin.com"><i className="bi bi-linkedin"></i></a></li>
        </ul>
      </div>
      {
        showTopBtn && (
          <div className={styles.goTop} onClick={goTop}>
          </div>
        )
      }
    </Container>
  )

}