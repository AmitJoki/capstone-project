import { render, screen } from "@testing-library/react";
import BookingForm from '../src/components/BookingForm';
import { initializeTimes, initialTimes, updateTimes } from './components/Main';

global.fetchAPI = () => [17];

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[10]} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('Initialize Function returns correct data', () => {
  expect(initializeTimes().length).toBeGreaterThan(0);
});

test('updateTimes returns the correct data', () => {
  const date = new Date();
  expect(updateTimes(date)).toEqual(global.fetchAPI(date));
});