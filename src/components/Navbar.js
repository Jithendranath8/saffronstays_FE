import '../styles/navbar.css';
import Logo from '../../public/images/logo.png';
import Search from '../../public/images/search.svg'; 
import SSLogo from '../../public/images/ss-logo.svg';
import Phone from '../../public/images/phone.svg';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className='navbar'>
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={Logo.src} alt="X SERIES Logo" className="logo-image" />
          </div>
          <div className="navbar-search">
            <img src={Search.src} alt='search icon'/>
            <input type="text" placeholder="search for location, villa, facilities..." />
          </div>
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-saffron">
            <img src={SSLogo.src} alt="icon" className="navbar-icon" />
            SaffronStays
          </a>
          <a href="tel:08069160000" className="navbar-saffron">
            <img src={Phone.src} alt="icon" className="phone-icon" />
            08069160000
          </a>
          <button className="navbar-login">Login</button>
        </div>
      </div>
      <div className='nav-mobile'>
          <a href="#" className="navbar-saffron">
            <img src={SSLogo.src} alt="icon" className="navbar-icon" />
          </a>
          <div className="">
            <img src={Search.src} alt='search icon'/>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
