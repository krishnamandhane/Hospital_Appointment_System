import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <div className='footer-container'>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How we work</Link>
              <Link to='/'>Testimonials</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Feedback</Link>
              <Link to='/'>Terms and Service</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Sponsorships</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Programmes</h2>
              <Link to='/'>Charity Event</Link>
              <Link to='/'>Ambassadors</Link>
              <Link to='/'>Influencer</Link>
            </div>
            <div className='footer-link-wrapper'>
              <div className='footer-link-items'>
                <h2>Social Media</h2>
                <Link to='/'>Instagram</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Twitter</Link>
              </div>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                MEDICARE HOSPITAL
              </Link>
            </div>
            <small className='website-rights'>MEDICARE HOSPITAL © 2023</small>

            <div className='social-icons'>
              <Link
                className='social-icon-link'
                to={'//www.facebook.com/'}
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </Link>
              <Link
                className='social-icon-link'
                to={'//www.instagram.com/'}
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </Link>
              <Link
                className='social-icon-link'
                to={
                  '//www.youtube.com/'
                }
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </Link>
              <Link
                className='social-icon-link'
                to={'//twitter.com/?lang=en'}
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </Link>
              <Link
                className='social-icon-link'
                to={'//www.linkedin.com/signup'}
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </Link>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;