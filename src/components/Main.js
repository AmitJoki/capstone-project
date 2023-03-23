import CallToAction from './CallToAction';
import Specials from './Specials';

export default function Main() {
  return (
    <main>
      <CallToAction />
      <div className="online-menu">
        <h1 className="title">This week's specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="specials">
        <Specials />
      </div>
    </main>
  );
}