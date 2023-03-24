import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link className="section-categories" to="/">Home</Link></li>
        <li><Link className="section-categories" to="/about">About</Link></li>
        <li><Link className="section-categories" to="/menu">Menu</Link></li>
        <li><Link className="section-categories" to="/booking">Reservations</Link></li>
        <li><Link className="section-categories" to="/order-online">Order Online</Link></li>
        <li><Link className="section-categories" to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}