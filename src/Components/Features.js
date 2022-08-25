import React from "react";
import illustration from "../images/illustration-hero.svg";
import tab1 from "../images/illustration-features-tab-1.svg";
import tab2 from "../images/illustration-features-tab-2.svg";
import tab3 from "../images/illustration-features-tab-3.svg";
import { useState } from "react";

const Features = () => {
    const [slider,setslider]= useState([{
        title:"Bookmark in one click",
        para:"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        photo:tab1
    },{
        title:"Intelligent search",
        para:"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        photo:tab2
    },{
        title:"Share your bookmarks",
        para:"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        photo:tab3
    }]);
    const [conter,setconter]= useState(0);
    const conterAcc=(conter)=>{
        setconter(conter);
    }
    const clickeffect={
        
    }
  return (
    <div className="Features">
      <div className="FeaturesTitle">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="slider">
        <div className="slidcont">
          <button className={conter===0?"clickeffect":""} onClick={()=>{conterAcc(0)}}>Simple Bookmarking</button>
          <button className={conter===1?"clickeffect":""} onClick={()=>{conterAcc(1)}}>Speedy Searching</button>
          <button className={conter===2?"clickeffect":""} onClick={()=>{conterAcc(2)}}>Easy Sharing</button>
        </div>
        <div className="headbox">
          <div className="sideright">
            <img src={slider[conter].photo} alt="illustration for bookmark" />
            <div className="bckgcolor"></div>
          </div>

          <div className="sideleft">
            <h2>{slider[conter].title}</h2>
            <p>
            {slider[conter].para}
            </p>
            <div className="btnsBox">
              <button className="btn">More Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
