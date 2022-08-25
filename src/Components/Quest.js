import React from 'react'
import { useState } from 'react';
import arow from '../images/icon-arrow.svg'
const Quest = ({qustion,answer,id}) => {
    const [show,setshow]=useState(false);
    const dropClick=()=>{
        setshow(!show);
    }
  return (
    <div className="dropdown" onClick={dropClick} key={id}>
        <div className="dropbtn" >
        <h3>{qustion}</h3>
        <div><img src={arow} alt="drop down" className={show?"up":""} /></div>
        
        </div>
        {show && <p>{answer}</p>}
        
      </div>
  )
}

export default Quest