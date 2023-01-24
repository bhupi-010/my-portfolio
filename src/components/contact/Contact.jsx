/* eslint-disable react/jsx-no-target-blank */
import React, { useRef } from "react";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { RiMessengerFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_han0s2b",
        "template_650daal",
        form.current,
        "WFWD19f2aJh0879Mp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <FiMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>nathbbhupi10@gmail.com</h5>
            <a href="mailto:nathbbhupi10@gmail.com" target="_blank">
              send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerFill className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Bhupendra nath</h5>
            <a href="https://m.me/bhupi.000" target="_blank">
              send a message
            </a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+9779865599757</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+9779865599757"
              target="_blank"
            >
              send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" id="" rows="7" placeholder="Your Message" required/>
          
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
