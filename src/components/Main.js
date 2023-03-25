import { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import HomePage from './HomePage';

/*global fetchAPI, submitAPI */

export const initialTimes = [17, 18, 19, 20, 21, 22];

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
      </Routes>
    </main>
  );
}