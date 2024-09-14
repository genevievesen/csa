import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { images } from '../../constants';


import './Header.css';
import { SubHeading } from '../../components';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
const endTime = 1702702800; // use UNIX timestamp in seconds for dec 16 2023

const remainingTime = endTime - stratTime;
const days = Math.ceil(remainingTime / daySeconds);
const daysDuration = days * daySeconds;

const Header = () => (
  
  <div className="app__header app__bg app__wrapper secton__padding" id="home">
    <div className="app__wrapper_info">
    <div className="app__wrapper-logo">
        <img src={images.csa_logo} alt="app__logo" />
      </div>
      <SubHeading title='"One Day Closer"'/>
      <h1 className="app__header-h1">Recap</h1>
      <p3 className="app__header-h2">
        The 2023-2024 season was one for the books! Our members skied over 500 days. On the east coast,
        visibility woes caused many a-low-light-day but vibes were HIGH. Our west coast crew took on
        Utah for a 2nd consecutive March and the Church of the Powder Day Saints did not disappoint.
        The season ended high in the Chilean Andes of all places where the team celebrated co-founder Dave's
        30th. Safe to say that the stoke is high for 2024-2025 season. 
        </p3> 
    </div>
    <div className="app__wrapper_img">
      <img src={images.stauff_chile}  alt="OOPS"/>
    </div>
  </div>
);

export default Header;
