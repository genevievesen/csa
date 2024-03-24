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
      <SubHeading title='"One Day Closer"'/>
      <h1 className="app__header-h1">Season Report:</h1>
      <h2 className="app__header-h2">Low Vis, High Vibes</h2> 
    </div>
    <div className="app__wrapper_img">
      <img src="https://drive.google.com/thumbnail?id=1u8CjWoDuTPZBQWxoZX--d8Am5Oh4Pv4U&sz=w1000" alt="OOPS"/>
    </div>
  </div>
);

export default Header;
