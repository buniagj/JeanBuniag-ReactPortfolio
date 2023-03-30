import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div>
          <h1 className="hero-text">Bringing your ideas to life...</h1>
          <p className="hero-paragraph">I am a web developer from the Philippines!</p>
          <div className="hero-buttons">
            <Link to="/about" className="cta">Learn More</Link>
            <Link to="/contact" className="noncta">Hire Me</Link>
          </div>
        </div>
        <img src={hero} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
