import React from 'react';
import './login.css';
import './landing.css';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      login: false
    };
  }

  switcher(){
    if(this.props.login){
      return(
        <div>
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Your Email" />
        </div>
      );
    } else {
      return (
        <div>
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Your Email" />
        </div>
      );
    }
  }


  render(){
    return (
      <div className="login">
        <div className="login-content">
          <div className="top-bar">
            <div>Reactor</div>
          </div>

          <div className="login-form">
            <div className="switcher">
            Login Sign Up
            </div>
            { switcher() }
          </div>
        </div>
      </div>
    )
  }
}
