import React from 'react';
import './Footer.css';
import assets from '../../assets';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-container">
        <button>
          <img src={assets.logo} alt="logo" />
        </button>
      </div>
      <div className="footer-text">
        <div className="footer-location col">
          <img src={assets.locationPin} alt="location" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="footer-contact col">
          <div className="footer-contact-phone">
            <button className="contact-icon">
              <img src={assets.iconPhone} alt="phone" />
            </button>
            <p>+1-543-123-4567</p>
          </div>
          <div className="footer-contact-email">
            <button className="contact-icon">
              <img src={assets.iconEmail} alt="email" />
            </button>
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className="footer-navbar col">
          <button>About Us</button>
          <button>Jobs</button>
          <button>Press</button>
          <button>Blog</button>
        </div>
        <div className="footer-navbar col">
          <button>Contact Us</button>
          <button>Terms</button>
          <button>Privacy</button>
        </div>
        <div className="footer-social col">
          <button>
            <FaFacebook />
          </button>
          <button>
            <FaTwitter />
          </button>
          <button>
            <FaInstagram />
          </button>
        </div>
      </div>
      <p class="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        Coded by <span>Bashar Khdr</span>.
      </p>
    </div>
  );
};

export default Footer;
