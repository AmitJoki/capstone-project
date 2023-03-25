import { useState } from 'react';

export function dateToYYYYmmDD(date) {
  if (!date) return '';
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
          .toISOString()
          .split("T")[0];
}

export default function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState(dateToYYYYmmDD(new Date()));
  const [time, setTime] = useState(17);
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [occasion, setOccasion] = useState('');
  const onDateChange = (e) => {
    const value = e.target.valueAsDate;
    setDate(dateToYYYYmmDD(value));
    dispatch(value);
  }
  return (
    <>
      <h1>Book Now</h1>
      <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={onDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" value={numberOfGuests} placeholder={1} min={1} max={10} id="guests" onChange={(e) => setNumberOfGuests(e.target.value)} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value={""}>Select...</option>
          <option value={"Birthday"}>Birthday</option>
          <option value={"Anniversary"}>Anniversary</option>
        </select>
        <button type="submit" defaultValue="Make Your reservation">Submit</button>
      </form>
    </>
  );
}