import RestaurantFood from '../images/Restaurant Food.jpg';
export default function CallToAction() {
  return (
    <div className="call-to-action-wrapper">
      <article className="call-to-action">
        <section>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>We are a family owned<br /> Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a table</button>
        </section>
        <img src={RestaurantFood} alt="Restaurant Food" />
      </article>
    </div>
  )
}