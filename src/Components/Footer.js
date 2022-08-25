import React from 'react'
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";
import logo from "../images/logo-bookmark.svg";
const Footer = () => {
  return (
    <footer className="abs">
      <div className="footer">
          <img
            src={logo}
            alt="Bookmark logo"
          />
        </div>
        <div className="">
        <a href="#">FEATURES</a>
        <a href="#">PRICING</a>
        <a href="#">CONTACT</a>
      </div>
      <div className="">
          <a href="#">
            <img src={facebook} alt="facebook page" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter page" />
          </a>
        </div>
    </footer>
  )
}

export default Footer