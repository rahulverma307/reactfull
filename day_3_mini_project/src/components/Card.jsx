import React from 'react'
import { Bookmark } from 'lucide-react';
import '../App.css';

const Card = (props) => {
  return (
    <div className="parent">
    <div className="top">
      <img src="https://imgs.search.brave.com/OkEKmNpOGwqjMqucY74nAB_p3y2B-LTUnA6ABNTEzVw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/bG9nby1zbWlsZS1p/Y29uLXZlY3Rvci0z/NDI0Mzk4Ny5qcGc" alt="" />
      <button>Save <Bookmark/></button>
    </div>
    <div className="center">
     <h3>{props.company} <span>5 days ago</span>
     </h3>
     <h2>{props.jobRole}</h2>
     <div>
      <h4>{props.jobType}</h4>
      <h4>{props.level}</h4>
     </div>
    </div>
    <div className="bottom">
      <div>
        <div>
          <h3>{props.salary}</h3>
          <p>Mumbai, India</p>
        </div>
      </div>
    </div>
    <button className='apply-now'>Apply Now</button>
   </div>
  )
}

export default Card