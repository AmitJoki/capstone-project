import { Link } from 'react-router-dom';
import Logo from '../images/Logo.svg';
import Nav from './Nav';
export default function Header() {
  return (
    <header>
      <Link to="/"><img src={Logo} alt="Little Lemon Logo" className='logo' /></Link>
      <Nav />
    </header>
  );
}