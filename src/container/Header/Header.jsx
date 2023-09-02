import React from 'react';

import { images } from '../../constants';


import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper secton__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title='"One Day Closer"'/>
      <h1 className="app__header-h1">Blowing snow for next season...</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>We're one day closer to the 2022-2024 ski season.</p>
      <button type="button" className="custom__button">22-23 Season Recap</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.mtn_welcome} alt="header"></img>
    </div>
  </div>
);

export default Header;