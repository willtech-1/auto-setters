import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");

  //inputFields
  function handleFirstname(e) {
    setFirstName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleNumber(e) {
    setContactNumber(e.target.value);
  }
  function handleMessage(e) {
    setMessage(e.target.value);
  }

  //HandleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email && contactNumber && message){
      alert('Message sent successfully!')
      setFirstName("");
      setEmail("");
      setContactNumber("");
      setMessage("");
    }else{
      alert('Please enter valid values!')
    }
  };
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h4 className="form-header">Contact Us</h4>
          <div>
            <input
              className="contact-input"
              type="text"
              placeholder="Your name"
              name="firstName"
              onChange={handleFirstname}
              value={firstName}
              required
            />
          </div>
          <div>
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="Your email"
              onChange={handleEmail}
              value={email}
              required
            />
          </div>
          <div>
            <input
              className="contact-input"
              type="text"
              placeholder="Your number"
              name="contactNumber"
              onChange={handleNumber}
              value={contactNumber}
              required
            />
          </div>
          <div>
            <textarea
              className="contact-input"
              placeholder="Your message"
              name="message"
              onChange={handleMessage}
              value={message}
              required
            />
          </div>
          <div className="form-submitBtn">
            <button className="form-sendBtn">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
