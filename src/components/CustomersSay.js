const testimonies = [{
  name: 'Sarah',
  imgUrl: `https://fakeface.rest/face/view/${Math.random()}1?gender=female&minimum_age=30&maximum_age=40`,
  review: 'The Greek Salad is simply scrumptious.',
  rating: '⭐⭐⭐⭐'
}, {
  name: 'John',
  imgUrl: `https://fakeface.rest/face/view/${Math.random()}2?gender=male&minimum_age=30&maximum_age=40`,
  review: 'Their Bruchetta makes me go gaga!',
  rating: '⭐⭐⭐⭐⭐',
}, {
  name: 'Connor',
  imgUrl: `https://fakeface.rest/face/view/${Math.random()}3?gender=female&minimum_age=30&maximum_age=40`,
  review: `You must try their heavenly Lemon Dessert.`,
  rating: '⭐⭐⭐⭐⭐'
}, {
  name: 'Haley',
  imgUrl: `https://fakeface.rest/face/view/${Math.random()}1?gender=female&minimum_age=30&maximum_age=40`,
  review: 'The atmosphere for fine dining is just great!',
  rating: '⭐⭐⭐⭐'
}];

export default function CustomersSay() {
  return (
    <div className='customer-says-wrapper'>
      <article className='customer-says'>
        <h1 className='title'>Testimonies</h1>
        <div>
          {testimonies.map(({ name, imgUrl, review, rating }) => {
            return (
              <section key={name}>
                <div>
                  <img src={imgUrl} alt={name} />
                  <div>
                    <span><span className='card-title'>{name}</span><br /> {rating}</span>
                  </div>
                </div>
                <p>“{review}”</p>
              </section>
            );
          })}
        </div>
      </article>
    </div>
  )
}