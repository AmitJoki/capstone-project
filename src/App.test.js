import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import BookingForm from '../src/components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';

global.fetchAPI = () => [17];

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[17]} />);
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

test('Invalid date displays required', () => {
  render(<BookingForm availableTimes={[17]} />);
  const dateElement = screen.getByLabelText('Choose date');
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => userEvent.clear(dateElement));
  expect(screen.getByText('(required)')).toBeInTheDocument();
})

test('Valid date does not display required', () => {
  render(<BookingForm availableTimes={[17]} />);
  expect(screen.queryByText('(required)')).not.toBeInTheDocument();
})

test('Invalid number of guests shows error message', () => {
  render(<BookingForm availableTimes={[17]} />);
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => userEvent.type(screen.getByLabelText('Number of guests'), '11'));
  expect(screen.getByText('(minimum 1 guest, maximum 10 guests)')).toBeInTheDocument();
})

test('Valid number of guests shows no error message', () => {
  render(<BookingForm availableTimes={[17]} />);
  expect(screen.queryByText('(minimum 1 guest, maximum 10 guests)')).not.toBeInTheDocument();
})