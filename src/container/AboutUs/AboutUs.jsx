import React from 'react';

import { images }  from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
  <img src={images.trav} alt="csa_logo"></img>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans">Insert about us paragrpah</p>
        <button type="button" className="custom__button">Learn More</button>
      </div>
      <div className= "app__aboutus-content_skis flex__center">
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <p className="p__opensans">Insert our history paragraph</p>
        <button type="button" className="custom__button">Learn More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
