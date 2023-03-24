import Restaurant from '../images/Restaurant.jpg';
import Owners from '../images/Owners.jpg';
export default function Chicago() {
  return (
    <article className='chicago'>
      <section>
        <h1 className='title'>Little Lemon</h1>
        <h2 className='subtitle'>Chicago</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
      </section>
      <section>
        <img src={Restaurant} alt='Little Lemon Restaurant' />
        <img src={Owners} alt='Mario and Adrian' />
      </section>
    </article>
  )
}