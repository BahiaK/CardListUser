import React from "react";
import '../Components/UserDashboard.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const UserDashboard = ({review,setIndex,lengthReviews}) => {
  return (
    <div style={{ marginTop:35}}>
      <div className="card-container" style={{width:600}}>
        <span className="pro">PRO</span>
        <img 
          className="round"
          src={review.image}
          alt="user"
        />
        <h3>{review.name}</h3>
        <h6>New York</h6>
        <p>
          {review.text}
        </p>
        <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
         
        </div>
        <div style={{display:"flex",justifyContent:"space-around",height:50,alignItems:"center"}}>
            <ArrowCircleLeftIcon fontSize="large" color="white" onClick={()=>setIndex((preIndex)=>preIndex==0?lengthReviews-1:preIndex-1)}/>
      <ShuffleOnIcon fontSize="large" color="white" onClick={()=>setIndex((Math.floor(Math.random()*lengthReviews)))}/>
      <ArrowCircleRightIcon fontSize="large" color="white" onClick={()=>setIndex((nextIndex)=>nextIndex==lengthReviews-1?0:nextIndex+1)}/></div>
        
      </div>
      
      
    </div>
  );
};

export default UserDashboard;
