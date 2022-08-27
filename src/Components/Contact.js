import React from "react";
import erorr from "../images/icon-error.svg";

import { useState, useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

const Contact = () => {
  const [val, setval] = useState(true);
  const email = useRef();
  const [sentsucss,setSec]= useState(false) 
  const ref = collection(firestore, "emails");
  const validInput = text => {
    setSec(false);
    setval(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(text));
  };
  const sentdata = () => {
    if (val) {
      let data = { email: email.current.value };
      addDoc(ref, data);
      setSec(true);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contactWithd">
        <span>35,000+ ALREADY JOINED</span>
        <h2>Stay up-to-date with what we’re doing</h2>
        <div className="ContactForm">
          <div className={`emailInput ${!val?"erorr":""} ${sentsucss?"sucss":""}`}>
            <div className="validicon">
              <input
                type="text"
                placeholder="Enter your email adress"
                ref={email}
                onChange={e => validInput(e.target.value)}
              />
              {!val && <img src={erorr} alt="error icon" />}
            </div>

            {!val && <p>Whoops, make sure it's an email</p>}
            {sentsucss && <p>Successfully</p>}
          </div>
          <div className="contactbtn">
            <button className="loginbtn" onClick={sentdata}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
