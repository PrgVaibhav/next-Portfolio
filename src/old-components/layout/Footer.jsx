import React from "react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Footer.scss";
import { ContactForm } from "../UI/ContactForm";
export const Footer = () => {
  return (
    <footer
      className="footer"
      aria-label="Footer for the website. Contains contact form and social links."
    >
      <div className="top-footer">
        <div className="contact-form" id="contact">
          <div className="contact-form-header">
            <h3>Get in Touch</h3>
            <p>Let's Connect! I'm all ears (and inboxes) for your messages!</p>
          </div>
          <ContactForm />
        </div>
        <div className="socials">
          <div className="social-header">
            <h3>Get Social</h3>
            <p>Welcome to the VIP backstage of my digital circus!</p>
          </div>
          <p title="Twitter">
            <FaXTwitter className="icon" />
            <a
              href="https://twitter.com/SyntaxError408"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter Account link"
            >
              SyntaxError408
            </a>
          </p>
          <p title="GitHub">
            {" "}
            <FaGithub className="icon" />
            <a
              href="https://github.com/PrgVaibhav"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Account link"
            >
              PrgVaibhav
            </a>
          </p>
          <p title="LinkedIn">
            <FaLinkedin className="icon" />
            <a
              href="https://www.linkedin.com/in/devxvaibhav"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Account link"
            >
              devxvaibhav
            </a>
          </p>
          <p title="Email">
            <MdEmail className="icon" />
            <a
              href="mailto:vaibhav.pandey1508@gmail.com?subject=Subject%20Here&body=Hello,%20I%20would%20like%20to%20contact%20you."
              aria-label="Email me link"
            >
              vaibhav.pandey1508@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="footer-content">
          <h2>VK.</h2>
          <p>Byte by Byte, Building my Future.</p>
        </div>
      </div>
    </footer>
  );
};
