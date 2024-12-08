import React from 'react';

const Reservation = () => (
  <div>
    <h1>Reserve Your Plan</h1>
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Reservation;
