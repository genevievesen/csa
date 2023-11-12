import React from 'react';
import {Exec, Member} from '../../components';
import images from '../../constants/images';
import {members} from '../../constants';
import './Members.css';

const Members = () => (
   <div className="app__members app__bg flex__center section__padding" id="members">
      <div className="app__members-title">
      <h1 className="headtext__cormorant"> Members</h1>
         <div className="app__members-subtitle">
         <p className="app__members-subtitle_heading"> Founders</p>
            <img className="app__members-founders" src={images.founders} alt="alt_founders"></img>
            <h2 className="app__members-subtitle_founders-name"> 
               Nate Steele • Travis Sheldon • David Stauffer
            </h2>
         </div>
         <div className="app__members-subtitle">
         <p className="app__members-subtitle_heading"> Executive Team</p>
            <div className="app__members-exec-list">
               {members.exec_team.map((exec_team, index) => (
                < Exec keys={exec_team.name + index} image ={exec_team.image} name={exec_team.name} title={exec_team.title}/>
                ))}
            </div>            
         </div>
         <div className="app__members-subtitle">
         <p className="app__members-subtitle_heading"> Members List</p>
            <div className="app__members-list">
               {members.members.map((members, index) => (
                < Member keys={members.name + index} name={members.name}/>
               ))}
            </div>
         </div> 

         <div className="app__members-subtitle">
         <p className="app__members-subtitle_heading">Recruitment Class 23/24</p>
         <h2 className="app__members-subtitle_recruits-name"> 
               Dani Hanson • Steph Alibrandi • Javi Arguello
            </h2>
         </div>                 
      </div>
   </div>

);

export default Members;
