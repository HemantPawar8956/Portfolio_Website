import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new project, creative ideas or opportunitties to be part of your
            visions
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">hemantpawar26102@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 8459254214</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href=""
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href=""
              className="contact__social-link"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/HemantPawar8956"
              className="contact__social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/hemant-pawar-30684422a/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form
          className="contact__form"
          action="https://formspree.io/f/mvoegyaq"
          method="POST"
        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                className="form__control"
                autoComplete="off"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                className="form__control"
                autoComplete="off"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                name="Subject"
                placeholder="Your Subject"
                className="form__control"
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              name="Message"
              className="form__control textarea"
              autoComplete="off"
              required
              minLength={5}
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
