import { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import Chicago from './Chicago';
import ConfirmedBooking from './ConfirmedBooking';
import HomePage from './HomePage';
import Specials from './Specials';

/*global fetchAPI, submitAPI */

export function updateTimes(state, date) {
  return fetchAPI(date);
}

export function initializeTimes() {
  return fetchAPI(new Date());
}

export default function Main() {
  const navigate = useNavigate();
  const submitForm = (formData) => {
    const res = submitAPI(formData);
    if (res) navigate('/booking-confirmed');
  }
  const [availableTimes, dispatch] = useReducer(updateTimes, 0, initializeTimes);
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        <Route path="/about" element={<><br /><br /><Chicago /></>} />
        <Route path="/menu" element={<><br /><Specials /><br /><br /></>} />
      </Routes>
    </main>
  );
}