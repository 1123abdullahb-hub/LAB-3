import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedContact, setSelectedContact] = useState("");

  const contacts = [
    "Ali Ahmed",
    "Sara Khan",
    "Usman Raza",
    "Ayesha Malik",
    "Bilal Hussain",
    "Fatima Noor",
    "Hamza Iqbal",
    "Zainab Tariq",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage(
      `Welcome ${name}! Your account has been created successfully.`
    );

    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Contacts</h2>

        {contacts.map((contact, index) => (
          <div
            className={`contact ${
              selectedContact === contact ? "active" : ""
            }`}
            key={index}
            onClick={() => {
              setSelectedContact(contact);
              setName(contact);
            }}
          >
            <span className="avatar">
              {contact.charAt(0)}
            </span>
            {contact}
          </div>
        ))}
      </aside>

      <main className="form-section">
        <h1>Create Account</h1>
        <p>Enter your details to sign up.</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </form>

        {message && <div className="message">{message}</div>}
      </main>
    </div>
  );
}

export default App;