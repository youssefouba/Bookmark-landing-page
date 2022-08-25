import React from "react";
import { useState } from "react";
import Quest from "./Quest";
const Question = () => {
    const [allQuest,setQustion]=useState([{
        id:1,
        qustion:"What is Bookmark?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },{
        id:2,
        qustion:"How can I request a new browser?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
        id:3,
        qustion:"Is there a mobile app?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
        id:4,
        qustion:"What about other Chromium browsers?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    }]);
    
  return (
    <div className="question">
      <div className="Title">
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="dropborder">
      {allQuest.map((i)=><Quest qustion={i.qustion} answer={i.answer} id={i.id}/>)}
      </div>
      <div className="btnsBox">
              <button className="btn">More Info</button>
            </div>
    </div>
  );
};

export default Question;
