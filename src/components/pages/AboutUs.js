import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import './About.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin  } from 'react-icons/fa';
import image from '../../images/real-estate-agent (1).webp'

function AboutUs() {
    const leadershipTeam = [
        {
          id: 1,
          name: 'John Doe',
          phoneNumber: '+1 123-456-7890',
          socialMedia: {
            facebook: 'https://www.facebook.com/johndoe',
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
          },
          imageUrl: require('../../images/real-estate-agent (2).webp'),
        },
        {
            id: 2,
            name: 'John Doe',
            phoneNumber: '+1 123-456-7890',
            socialMedia: {
              facebook: 'https://www.facebook.com/johndoe',
              twitter: 'https://twitter.com/johndoe',
              linkedin: 'https://www.linkedin.com/in/johndoe',
            },
            imageUrl: require('../../images/real-estate-agent (4).webp'),
          },
          {
            id: 3,
            name: 'John Doe',
            phoneNumber: '+1 123-456-7890',
            socialMedia: {
              facebook: 'https://www.facebook.com/johndoe',
              twitter: 'https://twitter.com/johndoe',
              linkedin: 'https://www.linkedin.com/in/johndoe',
            },
            imageUrl: require('../../images/real-estate-agent (3).webp'),
          },
      ];
  return (
    <div >
      <Nav />
      
      <div className='wd-80'>
        <h2>About Us</h2>
        <div className='aboutUs-grid'>
            <div>  <img src={image}  alt="agents" className="banner-image" /></div>
            <div>
        <p>
          At Panda Real Estate Company, we believe that when it comes to
          finding a home what’s outside the front door is just as important as
          what’s behind it.
        </p>
        <p>
          That’s why we go beyond the typical listings, by sourcing insights
          straight from locals and offering over 34 neighborhood map overlays,
          to give people a deeper understanding of what living in a home and
          neighborhood is really like.
        </p>
        <p>
          We’re committed to helping them discover a place where they will love
          to live and where they will feel more connected to the community and
          to each other. It’s why we strive every day to help build a more
          neighborly world.
        </p>
        <div className='follow-us'>
          <h3>Follow Us</h3>
          <p>Stay connected with us on our social media platforms:</p>
          <ul className='social-icons'>
            <li>
              <a href="https://www.facebook.com/propertycompany" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/propertycompany" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/propertycompany" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            {/* Add more social media icons as needed */}
          </ul>
        </div>
        </div>
        </div>
      </div>
      <div className='about-page'>
      <div className='about-wd-80'>
        <h2>Leadership Team</h2>
        <div className='leadership-grid'>
          {leadershipTeam.map(member => (
            <div key={member.id} className='team-member'>
              <img src={member.imageUrl} alt={member.name} />
              <h3>{member.name}</h3>
              <p>Phone: {member.phoneNumber}</p>
              <div className='social-media-icons'>
                <a href={member.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} color="#1877f2" className='iconz'/>
                </a>
                <a href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} color="#1DA1F2" className='iconz'/>
                </a>
                <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} color="#0077b5" className='iconz' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
