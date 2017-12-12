import React from 'react';
import './landing.css';

export default class Landing extends React.Component {
  render(){
    return (
      <div>
        <div className="header">
          <div className="top-bar">
            <div>Reactor</div>
            <div>Log In</div>
          </div>
          <h1>Welcome to React App</h1>
        </div>
        <div className="2nd-section">
          <div><h2>What We Do</h2></div>
          <div>
            <h3>We Do</h3>
            <ul>
              <li>The quick, brown fox jumps over a lazy dog.</li>
              <li>DJs flock by when MTV ax quiz prog.</li>
              <li>Junk MTV quiz graced by fox whelps.</li>
              <li>Bawds jog, flick quartz, vex nymphs.</li>
            </ul>
          </div>
        </div>

        <div className="3rd-section">
          <div>Left</div>
          <div>Right</div>
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
