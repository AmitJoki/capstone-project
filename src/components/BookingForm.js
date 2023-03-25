import { useState, useEffect } from 'react';

export function dateToYYYYmmDD(date) {
  if (!date) return '';
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
          .toISOString()
          .split("T")[0];
}

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState(dateToYYYYmmDD(new Date()));
  const [time, setTime] = useState(availableTimes[0]);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  useEffect(() => setTime(availableTimes[0]), [availableTimes]);
  const onDateChange = (e) => {
    const value = e.target.valueAsDate;
    setDate(dateToYYYYmmDD(value));
    if (value) {
      dispatch(value);
    }
  }
  const isValid = !!date && numberOfGuests > 0 && numberOfGuests < 11;
  const submit = e => {
    e.preventDefault();
    submitForm(e.formData);
  }
  return (
    <>
      <h1>Book Now</h1>
      <form style={{display: 'grid', gap: '20px'}} onSubmit={submit}>
        <label htmlFor="date">Choose date {!date && <span>(required)</span>}</label>
        <input type="date" id="date" value={date} onChange={onDateChange} required />
        <label htmlFor="time">Choose time</label>
        <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
        </select>
        <label htmlFor="guests">Number of guests {(numberOfGuests < 1 || numberOfGuests > 10) && <span>(minimum 1 guest, maximum 10 guests)</span>}</label>
        <input type="number" value={numberOfGuests} placeholder={1} min={1} max={10} id="guests" onChange={(e) => setNumberOfGuests(e.target.value)} required />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value={""}>Select</option>
          <option value={"Birthday"}>Birthday</option>
          <option value={"Anniversary"}>Anniversary</option>
        </select>
        <button disabled={!isValid} aria-label="On Click" aria-disabled={!isValid}>Submit</button>
      </form>
    </>
  );
}