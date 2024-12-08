import React from 'react';

const ContactUs = () => (
  <div>
    <h1>Contact Us</h1>
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Your message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
);

export default ContactUs;
