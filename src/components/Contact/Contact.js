import React from 'react';
import './Contact.css'; // Create this file to add styles

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form>
        <label>
          Name
          <input type="text" required />
        </label>

        <label>
          Email
          <input type="email" required />
        </label>

        <label>
          Message
          <textarea required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
