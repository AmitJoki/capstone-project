import Delivery from '../images/Delivery.png';
import GreekSalad from '../images/GreekSalad.jpg';
import Bruchetta from '../images/Bruchetta.svg';
import LemonDessert from '../images/LemonDessert.jpg';

const dishes = [{
  name: 'Greek Salad',
  imgSrc: GreekSalad,
  description: `The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.`,
  price: 12.99
}, {
  name: 'Bruchetta',
  imgSrc: Bruchetta,
  description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. `,
  price: 5.99
}, {
  name: 'Lemon Dessert',
  imgSrc: LemonDessert,
  description: `This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`,
  price: 5.00
}];
function Special({ imgSrc, name, description, price }) {
  return (
    <section className='special'>
      <div style={{ backgroundImage: `url(${imgSrc})` }} className='cover'></div>
      <div className='info'>
        <label className='card-title'>{name}</label>
        <p>${price}</p>
      </div>
      <p>{description}</p>
      <div className='delivery'>
        Order a delivery <img src={Delivery} alt="Delivery Bike" />
      </div>
    </section>
  ); 
}

export default function Specials() {
  return dishes.map(props => <Special key={props.name} {...props} />);
}