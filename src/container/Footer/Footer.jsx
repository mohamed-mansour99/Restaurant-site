import React from 'react';
import { FooterOverlay,Newsletter } from '../../components';
import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi';
import './Footer.css';
import images from '../../constants/images';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter />
     <div className='app__footer-links'>
        <div className='footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>23 Str,cairo,Maddi</p>
          <p className='p__opensans'>+01016927944</p>
          <p className='p__opensans'>+01098679585</p>
        </div>
        <div className='footer-links_logo'>
          <img src={images.gericht} alt="logo" />
          <p className='p__opensans'>The best way to find yourself is lose yourself in the server of others</p>
          <img src={images.spoon} alt="spoon" className='spoon-footer' style={{marginTop:15}}  />
            <div className='social-icons'>
            <FiFacebook/>
            <FiInstagram/>
            <FiTwitter/>

            </div>
        </div>
        <div className='footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>08:00 am - 12:00 am</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>07:00 am - 11:00 pm</p>

        </div>
     </div>
     <div className='footer__copyright'>
      <p className=' p__cormorant'>
        <a href="https://www.linkedin.com/in/mohamed-hassan-24865a178/">@ All rights 2023 to MO__Hassan </a>
      </p>
     </div>
  </div>
);

export default Footer;
