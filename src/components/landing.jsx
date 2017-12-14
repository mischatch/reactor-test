import React from 'react';
import './landing.css';
import banner from '../assets/banner.png';
import { Link, withRouter } from 'react-router-dom';


class Landing extends React.Component {


  // componentWillReceiveProps(nextProps){
  //   if(this.props.location.pathname === nextProps.location.pathname){
  //     return null;
  //   }
  // }


  render(){
    debugger
    return (
      <div>
        <div className="header">
          <div className="header-content">
            <div className="top-bar">
              <Link to="/">
                <div>Reactor</div>
              </Link>
              <Link to="/login">
                <div>Log In</div>
              </Link>
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
            <div className="s3-left-cont">
              <div className="s3-img-cube">
              </div>
              <div className="s3-text">
                <h4>Pos Hardware More Options In Less Space</h4>
                  <p>The quick, brown fox jumps over a lazy dog.
                    DJs flock by when MTV ax quiz prog.
                    Junk MTV quiz graced by fox whelps.
                    Bawds jog, flick quartz, vex nymphs.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fourth-section">
          <h3>Maui By Air The Best Way Around The Island</h3>
          <ul>
            <li>
              <div className="li-img">
                <img src={require('../assets/3.png')} alt={'3'} />
              </div>
              <div className="txt">
                East Josianefurt
                <p>085 Daron Via</p>
              </div>
            </li>
            <li>
              <div className="li-img">
                <img src={require('../assets/4.png')} alt={'3'} />
              </div>
              <div className="txt">
                South Cristopherport
                <p>162 Chandler Ville</p>
              </div>
            </li>
            <li>
              <div className="li-img">
                <img src={require('../assets/5.png')} alt={'3'} />
              </div>
              <div className="txt">
                Concepcionbury
                <p>7643 Kylie Burgs</p>
              </div>
            </li>
            <li>
              <div className="li-img">
                <img src={require('../assets/6.png')} alt={'3'} />
              </div>
              <div className="txt">
                Reychester
                <p>5590 Gabe Views Apt. 044</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="subscribe">
          <h4>Subscribe To Newsletter</h4>
          <div className="form">
            <input type="text" placeholder="Your Email" />
            <button className="button" type="submit">Subscribe</button>
            </div>
        </div>

        <div className="footer">
          Footer
        </div>

      </div>
    )
  }
}

export default Landing;
