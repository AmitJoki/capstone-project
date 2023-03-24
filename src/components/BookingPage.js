import BookingForm from './BookingForm';

export default function BookingPage({ availableTimes, dispatch }) {
  return (
    <div className='booking-page'>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}