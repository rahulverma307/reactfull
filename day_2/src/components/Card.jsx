import React from 'react'
import App from '../App'

const Card = (props) => {
  return (
   <div className="card">
    <h1>{props.name}</h1>
    <p>{props.age} year old full stack developer</p>
    <button>Follow</button>
    <button>Message</button>
    
  </div>
  )
}

export default Card