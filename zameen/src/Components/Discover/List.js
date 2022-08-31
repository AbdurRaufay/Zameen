import React from 'react'
import "./List.scss"
const List = () => {
  return (
    <div className='listitem'>
      <img src='https://images.zameen.com/w300_h300/7/758/al_khaleej_tower_35293.jpg'/>
      <span style={{color: "rgb(99, 99, 187)",fontSize:"21px",fontWeight:"600",alignItems:"center",justifyContent:"center",display:"flex",marginTop:"5px"}}>Al kahleej Tower-1</span>
      <p style={{fontSize:"15px",alignItems:"center",justifyContent:"center",display:"flex"}}>Karachi</p>
     <div className='info'>
      
      <ul>
        <li><span>City:</span>Karachi</li>
        <li><span>Location:</span>Bahria Town</li>
        <li><span>Types:</span>Floats</li>
        <li><span>Beds:</span>2-3</li>
      </ul>
     </div>
    </div>
  )
}

export default List