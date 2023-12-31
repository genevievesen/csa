import React from 'react';

import './Mountain.css';

const Mountain = ({title, location, rating}) => (
  <div className="app__mountain">
    <div className="app__mountain-header">
      <div className="app__mountain-name">
        <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
      </div>

      <div className="app__mountain-dash"/>
      <div className="app__mountain-rating">
        <p className="p__cormorant" >{rating}</p>
      </div>
      </div>

      <div className="app__mountain-sub">
        <p className="p__opensans" style={{color: '#AAA'}}>{location}</p>
      </div>

    </div>
);

export default Mountain;
