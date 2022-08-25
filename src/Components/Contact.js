import React from "react";
import erorr from "../images/icon-error.svg"
import { useState } from "react";
const Contact = () => {
    const [val,setval]= useState(true)
    const validInput=(text)=>{
        setval(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(text));
    }
  return (
    <div className="contact">
      <div className="contactWithd">
        <span>35,000+ ALREADY JOINED</span>
        <h2>Stay up-to-date with what we’re doing</h2>
        <div className="ContactForm">
            <div className={val?"emailInput":"emailInput erorr"}>
                <div className="validicon">
                    <input type="text" placeholder="Enter your email adress" onChange={(e)=>validInput(e.target.value)}/>
                    {!val&&<img src={erorr} alt="error icon" />}
                </div>
               
                {!val&&<p>Whoops, make sure it's an email</p>}
            </div>
          <div className="contactbtn">
             <button className="loginbtn">Contact Us</button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
