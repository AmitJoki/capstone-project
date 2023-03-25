import { useNavigate } from 'react-router-dom';
import CallToAction from './CallToAction';
import Chicago from './Chicago';
import CustomersSay from './CustomersSay';
import Specials from './Specials';
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <CallToAction />
      <div className="online-menu">
        <h1 className="title">This week's specials!</h1>
        <button onClick={() => navigate('/menu')}>Online Menu</button>
      </div>
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}