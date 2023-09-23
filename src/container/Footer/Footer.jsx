import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer app__bg section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">senecal@ski-csa.com</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.csa_logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Pray For Snow&quot;</p>
        <img src={images.skiis} alt="footer_skiis" className="skiis__img" style={{ marginTop: 1 }} />

      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Find Us</h1>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Cambridge Ski Association. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
