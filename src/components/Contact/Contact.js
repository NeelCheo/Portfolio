import React from 'react';
import './Contact.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // send the form data to a server. 
    //for now, we'll show it in the console.
    console.log('Form submitted');
  }

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
