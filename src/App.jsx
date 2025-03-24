import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Header from './Components/Header';
import AppHero from './Components/AppHero';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header id='header'>
          <Header />
      </header>
      <main>
        <AppHero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      
      </div>
      
  )
}

export default App
