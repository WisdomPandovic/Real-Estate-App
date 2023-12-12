// src/components/Contact.js
import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import './Contact.css'; // Import the CSS file for styling
import image from '../../images/real-estate-agent (1).webp'
import image1 from '../../images/happy-home (1).webp'
import image2 from '../../images/happy-home (2).webp'
import image3 from '../../images/happy-home (3).webp'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <Nav />

      <div className='contact-background'>
        <div className='flexx'>
        <Link to="/"><p>Home</p></Link>
        <p className='about'>About Us</p>
        </div>
        <h3>About Us</h3>
      </div>
      <div>   
      <div className='wd-80'>
  

        <div className='contact-grid'>
          {/* Offices Location Text */}
          <div className='contact-text'>
            <h3>Offices Location</h3>
            <ul>
              <li>
                <strong className='bk-green'>Headquarter</strong>
              </li>
              <li>
                <strong>New York Office</strong>: Address
              </li>
              <li>
                <strong>California Office</strong>: Address
              </li>
            </ul>
            <p>
              Morbi mollis elit vitae elit molestie lobortis. Cras eu purus ipsum. Aliquam et ullamcorper nisl. Nam sem justo,
              sagittis sit amet sem at, mollis congue eros. Quisque vel mattis eros. Proin euismod massa id est finibus,
              rutrum ornare velit pellentesque. Ut arcu magna, interdum eget egestas eget, sagittis a libero. Donec felis tellus,
              vehicula at purus condimentum, hendrerit dictum odio. Vivamus et condimentum sapien.
            </p>
            <p>Press & Media Inquiries: info@stylemixthemes.com.</p>
          </div>

          {/* Map Section */}
          <div className='contact-map'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.78244276378!2d7.367464875318339!3d9.024416368712867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1702382121067!5m2!1sen!2sng"
              width="100%"
              height="500"
              title="Office Location"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
     


        
      </div>
      </div><hr></hr>

      <div className='wd-80'>
            <div className='contact-grid'>
            <div> <img src={image}  alt="agents" className="banner-image" /></div>
            <div>
                <h4>Working with Us</h4>
                <p><span>Come be a part of a truly amazing, open, collaborative, and innovative culture.</span></p>
                <p>Our people are always working together to build the next big thing, and that really keeps this place buzzing. Whether we’re planning projects or grabbing a beer at our monthly Happy Hours, we all have a great time here.</p>
                <div className='grid-team'>
                    <p>Want to join our team?</p>
                    <buttton className='blu-sky'><p>SEE OPEN POSITIONS</p></buttton>
                </div>
            </div>
            </div>
        </div>

        <div className='wd-80'>
          <div className='grid-three'>
          <div class="container">
          <img src={image1}  alt="agents" className="banner-image" />
            <div class="overlay">
              <div class="text">Happy Family</div>
              <div class="text-2">Pellentesque neque erat, condimentum vel pharetra id, facilisis ac odio. Proin dictum, ante quis laoreet egestas, nunc metus accumsan arcu, egestas iaculis augue odio non nibh. In vel dui et metus euismod malesuada. Aliquam vulputate quam nec risus suscipit, id semper lacus dapibus.</div>
            </div>
          </div>

          <div class="container">
          <img src={image3}  alt="agents" className="banner-image" />
            <div class="overlay">
              <div class="text">Stocked Kitchen</div>
              <div class="text-2">Pellentesque neque erat, condimentum vel pharetra id, facilisis ac odio. Proin dictum, ante quis laoreet egestas, nunc metus accumsan arcu, egestas iaculis augue odio non nibh. In vel dui et metus euismod malesuada. Aliquam vulputate quam nec risus suscipit, id semper lacus dapibus.</div>
            </div>
          </div>

          <div class="container">
          <img src={image2}  alt="agents" className="banner-image" />
            <div class="overlay">
              <div class="text">Happy Hours</div>
              <div class="text-2">Pellentesque neque erat, condimentum vel pharetra id, facilisis ac odio. Proin dictum, ante quis laoreet egestas, nunc metus accumsan arcu, egestas iaculis augue odio non nibh. In vel dui et metus euismod malesuada. Aliquam vulputate quam nec risus suscipit, id semper lacus dapibus.</div>
            </div>
          </div>
          </div>
        </div>
        <div className='wd-80 text-c'>
        <h2>Contact Us</h2>
        <h4 className='contact'>If you have any questions or inquiries, feel free to reach out to us. We'd love to hear from you!</h4>
        <div className='contact-form'>
          <form>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' placeholder='Your Name' required />

            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' placeholder='Your Email' required />

            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' rows='4' placeholder='Your Message' required></textarea>

            <button type='submit'>Send Message</button>
          </form>
        </div>
        </div>
      <Footer />
    </div>
  );
}

export default Contact;
