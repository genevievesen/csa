import React from 'react';

import {SubHeading, Mountain} from '../../components';
import {data22, data23} from '../../constants';
import './Mountains.css';

const Mountains = () => (
  <div className="app__mountains app__bg flex__center section__padding" id="mountains">
  <div className="app__mountains-title">
    <h1 className="headtext__cormorant">Mountains Conquered</h1>
  </div>
    <div className="app__mountains-regions">

    <div className="app__mountains-regions_west flex__center">
      <p className="app__mountains-regions_heading"> West Coast</p>
      <div className="app__mountains-regions_list">
          {data22.west_coast_mtns.map((west_coast_mtns, index) => (
            < Mountain keys={west_coast_mtns.title + index} title={west_coast_mtns.title} location={west_coast_mtns.location} rating={west_coast_mtns.rating}/>
          ))}
      </div>
    </div>

    <div className="app__mountains-regions_eu flex__center">
      <p className="app__mountains-regions_heading"> Europe</p>
      <div className="app__mountains-regions_list">
        {data22.eu_mtns.map((eu_mtns, index) => (
            < Mountain keys={eu_mtns.title + index} title={eu_mtns.title} location={eu_mtns.location} rating={eu_mtns.rating}/>
          ))}
      </div>
    </div>

    <div className="app__mountains-regions_east flex__center">
      <p className="app__mountains-regions_heading"> East Coast</p>
      <div className="app__mountains-regions_list">
        {data22.east_coast_mtns.map((east_coast_mtns, index) => (
            < Mountain keys={east_coast_mtns.title + index} title={east_coast_mtns.title} rating={east_coast_mtns.rating} location={east_coast_mtns.location} />
          ))}
      </div>
    </div>
    <div className="app__mountains-regions_sa flex__center">
      <p className="app__mountains-regions_heading"> South America</p>
      <div className="app__mountains-regions_list">
        {data22.sa_mtns.map((sa_mtns, index) => (
            < Mountain keys={sa_mtns.title + index} title={sa_mtns.title} rating={sa_mtns.rating} location={sa_mtns.location} />
          ))}
      </div>
    </div>
    </div>


  </div>
  
);

export default Mountains;
