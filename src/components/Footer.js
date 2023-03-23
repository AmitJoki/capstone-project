import Logo from '../images/Logo.svg';
export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Little Lemon Logo" />
      <section>
        <h1 className="section-title">Doormat Navigation</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </section>
      <section>
        <h1 className="section-title">Contact</h1>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        <h1 className="section-title">Social Media Links</h1>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </section>
    </footer>
  );
}