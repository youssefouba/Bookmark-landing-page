import React from 'react'
import illustration from '../images/illustration-hero.svg';

const Header = () => {
  return (
    <header className="headbox">
      <div className="sideleft">
        <h1>A Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className="btnsBox">
          <button className="btn">Get it on Chrome</button>
          <button className="btngray">Get it on Firefox</button>
        </div>
      </div>

      <div className="sideright">
        <img src={illustration} alt="illustration for bookmark" />
        <div className="bckgcolor"></div>
      </div>
    </header>
  )
}

export default Header