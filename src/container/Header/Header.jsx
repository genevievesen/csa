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
const endTime = 1700629200; // use UNIX timestamp in seconds

const remainingTime = endTime - stratTime;
const days = Math.ceil(remainingTime / daySeconds);
const daysDuration = days * daySeconds;

const Header = () => (
  
  <div className="app__header app__bg app__wrapper secton__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title='"One Day Closer"'/>
      <h1 className="app__header-h1">Blowing snow for next season...</h1>
      <div className="app__timers">
      <CountdownCircleTimer
        {...timerProps}
        colors="#DCCA87"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#DCCA87"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#DCCA87"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#DCCA87"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>      

      </div>
      
    </div>
    <div className="app__wrapper_img">
      <img src={images.mtn_welcome} alt="header"></img>
    </div>
  </div>
);

export default Header;
