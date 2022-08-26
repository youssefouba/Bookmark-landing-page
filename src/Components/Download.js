import React from 'react'
import chrome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'
import dots from '../images/bg-dots.svg'

const Download = () => {
  return (
    <div className="container" id="pricing">
        <div className="Title">
        <h2>Download the extension</h2>
        <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="addExtension">
        <div className="box">
            <img src={chrome} alt="chrome logo" className="browser"/>
            <h3>Add to chrome</h3>
            <p>Minimum version 62</p>
            <img src={dots} alt="dots for design"/>
            <button className="btn">Add & Install Extension</button>
        </div>
        <div className="box">
            <img src={firefox} alt="chrome logo" className="browser"/>
            <h3>Add to chrome</h3>
            <p>Minimum version 62</p>
            <img src={dots} alt="dots for design" />
            <button className="btn">Add & Install Extension</button>
        </div>
        <div className="box">
            <img src={opera} alt="chrome logo" className="browser"/>
            <h3>Add to chrome</h3>
            <p>Minimum version 62</p>
            <img src={dots} alt="dots for design" className="" />
            <button className="btn">Add & Install Extension</button>
        </div>
      </div>
    </div>
  )
}

export default Download