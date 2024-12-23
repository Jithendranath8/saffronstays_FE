import '../styles/heroSection.css';
import HeroImage from '../../public/images/hero.png'
import Logo from '../../public/images/logo.png'

const HeroSection = () => {
  return (
    <div className="hero">
      <img className="hero-image" src={HeroImage.src} alt="Sea La Vie" />
      <div className="hero-content">
        <h1>Sea La Vie</h1>
        <p>Alibaug, Maharashtra</p>
        <img src={Logo.src} className="xseries-badge"/>
      </div>
    </div>
  );
};

export default HeroSection;
