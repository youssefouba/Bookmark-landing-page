import React from "react";
import logo from "../images/logo-bookmark.svg";
import menu from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";
import { useState, useEffect } from "react";

const Nav = () => {
  const [menuClick, setMenu] = useState(false);
  const clickmenu = () => {
    setMenu(!menuClick);
  };
  return (
    <nav className={menuClick ? "navBar backmeu container" : "navBar container"}>
      <div className="logo">
        <div>
          <img
            src={logo}
            alt="Bookmark logo"
            className={menuClick ? "whitelogo" : ""}
          />
        </div>
        <div className="humicon" onClick={clickmenu}>
          <img src={menuClick ? close : menu} alt="mobile menu" />
        </div>
      </div>
      
      <div className={menuClick ? "menu" : "menu dismenu"}>
        <a href="#">FEATURES</a>
        <a href="#">PRICING</a>
        <a href="#">CONTACT</a>
        <button className="loginbtn">LOGIN</button>
      </div>
      {menuClick && (
        <div className="media">
          <a href="#">
            <img src={facebook} alt="facebook page" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter page" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
