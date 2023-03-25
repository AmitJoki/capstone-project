import { Link } from 'react-router-dom';
import Logo from '../images/Logo.svg';
export default function Footer() {
  return (
    <div className='footer-wrapper'>
      <footer>
        <Link to="/"><img src={Logo} alt="Little Lemon Logo" /></Link>
        <section>
          <h1 className="section-categories">Doormat Navigation</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/booking">Reservations</Link></li>
              <li><Link to="/order-online">Order Online</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </section>
        <section>
          <h1 className="section-categories">Contact</h1>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </section>
        <section>
          <h1 className="section-categories">Social Media Links</h1>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </section>
        </footer>
      </div>
  );
}