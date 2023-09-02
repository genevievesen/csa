import React from 'react';

import {SubHeading, Mountain} from '../../components';
import {images, data} from '../../constants';
import './Mountains.css';

const Mountains = () => (
  <div className="app__mountains flex__center section__padding" id="mountains">
  <div className="app__mountains-title">
    <SubHeading title="2022-2023"/>
     <h1 className="headtext__cormorant"> Mountains Conquered</h1>
  </div>
    <div className="app__mountains-regions">

    <div className="app__mountains-regions_west flex__center">
      <p className="app_mountains_regions_heading"> West Coast</p>
      <div className="app__mountains_regions_list">
          {data.west_coast_mtns.map((west_coast_mtns, index) => (
            < Mountain keys={west_coast_mtns.title + index} title={west_coast_mtns.title} location={west_coast_mtns.location} rating={west_coast_mtns.rating}/>
          ))}
      </div>
    </div>

    <div className="app__mountains-regions_eu flex__center">
      <p className="app_mountains_regions_heading"> EU</p>
      <div className="app__mountains_regions_list">
        {data.eu_mtns.map((eu_mtns, index) => (
            < Mountain keys={eu_mtns.title + index} title={eu_mtns.title} location={eu_mtns.location} rating={eu_mtns.rating}/>
          ))}
      </div>
    </div>

    <div className="app__mountains-regions_east flex__center">
      <p className="app_mountains_regions_heading"> East Coast</p>
      <div className="app__mountains_regions_list">
        {data.east_coast_mtns.map((east_coast_mtns, index) => (
            < Mountain keys={east_coast_mtns.title + index} title={east_coast_mtns.title} location={east_coast_mtns.location} rating={east_coast_mtns.rating}/>
          ))}
      </div>
    </div>

    </div>
  </div>
);

export default Mountains;