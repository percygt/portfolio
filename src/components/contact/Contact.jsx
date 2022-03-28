import React, { useRef } from "react";
import { RiMailSendLine, RiTelegramLine } from "react-icons/ri";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pwdp3dm",
        "template_qy1aw4t",
        form.current,
        "O5rbJBhRgVOrSyReT"
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
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <RiMailSendLine className="contact__option-icon" />
            <h4>Email</h4>
            <h5>percygarciatimon@gmail.com</h5>
            <a
              href="mailto:percygarciatimon@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiTelegramLine className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@prcygt</h5>
            <a
              href="https://t.me/prcygt"
              rel="noopener noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
