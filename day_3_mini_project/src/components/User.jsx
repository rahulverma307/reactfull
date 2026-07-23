import React from 'react'

const User = (props) => {
  return (
    <div className='User' style={{color: "blue", fontStyle: "italic", fontSize: "20px", fontWeight: "bold", border: "2px solid black", padding: "10px", backgroundColor: "#1e90ff", borderRadius: "10px", textAlign: "center", margin: "10px", width: "300px", height: "100px", cursor: "pointer", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "row"}}>
         <h1>{props.name}</h1>
    </div>
  )
}

export default User