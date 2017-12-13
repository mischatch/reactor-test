import React from 'react';
import './landing.css';
import banner from '../assets/banner.png';

export default class Landing extends React.Component {
  render(){
    return (
      <div>
        <div className="header">
          <div className="header-content">
            <div className="top-bar">
              <div>Reactor</div>
              <div>Log In</div>
            </div>
            <div className="welcome">
              <h1>Hello, welcome to Reactor</h1>
            </div>
          </div>
          <img className="main_img" src={banner} alt={"banner"} />
        </div>
        <div className="second-section">
          <div className="s2-left">
            <h2>What We Do</h2>
          </div>

          <div className="s2-right">
            <h3>We do</h3>
            <ul>
              <li>The quick, brown fox jumps over a lazy dog.</li>
              <li>DJs flock by when MTV ax quiz prog.</li>
              <li>Junk MTV quiz graced by fox whelps.</li>
              <li>Bawds jog, flick quartz, vex nymphs.</li>
            </ul>
          </div>
        </div>

        <div className="third-section">
          <div className="s3-left">
            <div className="s3-left-cont">
              <div className="s3-img-cube">
              </div>
              <div className="s3-text">
                <h4>Regional Cuisine Down Home Southern Cooking</h4>
                  <p>The quick, brown fox jumps over a lazy dog.
                    DJs flock by when MTV ax quiz prog.
                    Junk MTV quiz graced by fox whelps.
                    Bawds jog, flick quartz, vex nymphs.</p>
              </div>
            </div>
          </div>
          <div className="s3-right">
            Right
          </div>
        </div>

        <div className="4th-section">
          <ul>
            <li>
              East Josianefurt
              <p>085 Daron Via</p>
            </li>
            <li>
              South Cristopherport
              <p>162 Chandler Ville</p>
            </li>
            <li>
              Concepcionbury
              <p>7643 Kylie Burgs</p>
            </li>
            <li>
              Reychester
              <p>5590 Gabe Views Apt. 044</p>
            </li>
          </ul>
        </div>

        <div className="subscribe">
          <h4>Subscribe To Newsletter</h4>
            <input type="text" name="" value="" />
        </div>

        <div className="footer">
          Footer
        </div>

      </div>
    )
  }
}
