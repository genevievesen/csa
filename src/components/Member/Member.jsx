import React from 'react';
import './Member.css';

const Member = ({name}) => (
  <div className="app__member">
    <p className="app__member-list" style={{color: '#AAA'}}>{name}</p>
  </div>
);

export default Member;
