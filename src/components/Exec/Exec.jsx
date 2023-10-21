import React from 'react';
import './Exec.css';

const Exec = ({name, title, image}) => (
  <div className="app__exec">
    <div className="app__exec-header">
    <img src={image} alt="bio pic" height="150px"  width="150px"/>
      <div className="app__exec-name">
        <p className="p__cormorant" style={{color: '#DCCA87'}}>{name}</p>
      </div>
      </div> 
      <div className="app__exec-title">
        <p className="p__opensans" style={{color: '#AAA'}}>{title}</p>
      </div>
  </div>
);

export default Exec;
