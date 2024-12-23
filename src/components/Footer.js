import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>SaffronStays</li>
            <li>Signature</li>
            <li>XSeries</li>
            <li>About</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>SaffronStays</li>
            <li>Signature</li>
            <li>XSeries</li>
            <li>About</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li className='footer-mail'><a href="mailto:mail@saffronstays.com">mail@saffronstays.com</a></li>
            <li>+91 3728253727</li>
            <li>Contact us</li>
            <li>Contact to Partner</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Partner with us</h4>
          <ul>
            <li>List a home</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Policies</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2021 SaffronStays. All rights reserved</p>
        <div className="social-icons">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
