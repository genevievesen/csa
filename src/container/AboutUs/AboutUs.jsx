import React from 'react';

import { images }  from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
  <img src={images.trav} alt="trav"></img>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans">The Cambridge Ski Association (CSA) is a group of elite skiers & snowboarders based out of the Cambridge, MA area.
                                   We ski hard & party harder. The association is bi-coastal and multi-national. In perpetual search of fresh pow & good vibes. </p>
        <button type="button" className="custom__button">Learn More</button>
      </div>
      <div className="app__aboutus-content_history"></div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <p className="p__opensans">Cambridge Ski Association history is rooted in East Coast Mountain culture. Get up early, ski hard and then Apres harder. 
                                   Outside of the peak season we live by the motto "One Day Closer" to snow.</p>
        <button type="button" className="custom__button">Learn More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
