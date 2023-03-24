import { render, screen } from "@testing-library/react";
import BookingForm from '../src/components/BookingForm';
import { initializeTimes, initialTimes, updateTimes } from './components/Main';

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[10]} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('Initialize Function returns correct data', () => {
  expect(initializeTimes()).toBe(initialTimes);
});

test('updateTimes returns the same state', () => {
  expect(updateTimes(initialTimes)).toBe(initialTimes);
});