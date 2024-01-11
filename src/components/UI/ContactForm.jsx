import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
export const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // Validate the email address using a regular expression
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    setIsEmailValid(emailRegex.test(newEmail));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setError("Please fill all the fields");
      return;
    }

    if (!isEmailValid) {
      return setError("Please enter a valid email address");
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  if (sent || error) {
    setTimeout(() => {
      setSent(false);
      setError("");
    }, 5000);
  }
  return (
    <form onSubmit={sendEmail} ref={form}>
      {sent && <p className="success">Message Sent!</p>}
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Your Name"
        autoFocus
        name="user_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        name="user_email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <textarea
        placeholder="Your Message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button>{`Let's start codeversation`}</button>
    </form>
  );
};
