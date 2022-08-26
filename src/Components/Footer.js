import React from "react";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";
import logo from "../images/logo-bookmark.svg";
const Footer = () => {
  return (
    <footer>
      <div className="container navBar">
        <div className="footermenu">
        <div>
          <img src={logo} alt="Bookmark logo" className="whitelogo"/>
        </div>
        <div className="menu">
        <a href="#Feature">FEATURES</a>
        <a href="#pricing">PRICING</a>
        <a href="#contact">CONTACT</a>
        </div></div>
        <div className="media">
          <a href="#">
            <img src={facebook} alt="facebook page" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter page" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
