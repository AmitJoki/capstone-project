import BookingForm from './BookingForm';

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className='booking-page'>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}