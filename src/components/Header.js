import Logo from '../images/Logo.svg';
import Nav from './Nav';
export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
}