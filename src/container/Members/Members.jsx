import React from 'react';
import {Exec, Member} from '../../components';
import images from '../../constants/images';
import {members} from '../../constants';
import './Members.css';

const Members = () => (
   <div className="app__members app__bg flex__center section__padding" id="members">
      <div className="app__members-title">
         <h1 className="headtext__cormorant"> Founding Members</h1>
         <img src={images.founders} alt="alt_founders"></img>
      </div>
      <div className="app__members-title">
         <h1 className="headtext__cormorant"> Executive Team</h1>
         <div className="app__members-exec-list">
            {members.exec_team.map((exec_team, index) => (
               < Exec keys={exec_team.name + index} image ={exec_team.image} name={exec_team.name} title={exec_team.title}/>
                ))}
         </div>
      </div>
      <div className="app__members-title">
         <h1 className="headtext__cormorant">Members</h1>
         <div className="app__members-list">
            {members.members.map((members, index) => (
               < Member keys={members.name + index} name={members.name}/>
                ))}
         </div>
      </div>
   </div>

);

export default Members;
