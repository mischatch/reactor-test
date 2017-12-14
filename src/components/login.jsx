import React from 'react';
import './login.css';
import './landing.css';
import { Link, withRouter } from 'react-router-dom';


class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      login: true
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props.location.pathname === nextProps.location.pathname){
      return;
    }
  }


  switcher(){
    debugger
    if(this.props.location.pathname === "/login"){
      return(
        <div className="fields">
          <input id="email" type="text" placeholder="Your Email" />
          <input id="password" type="text" placeholder="Your Email" />
          <button onSubmit={this.handleSubmit} >Login</button>
        </div>
      );
    } else if (this.props.location.pathname === "/signup") {
      return (
        <div className="fields">
          <input id="username" type="text" placeholder="Username" />
          <input id="email" type="text" placeholder="Email" />
          <input id="password" type="text" placeholder="Password" />
          <button onSubmit={this.handleSubmit} >Sign Up</button>
        </div>
      );
    }
  }


  render(){
    let style = this.props.location.pathname === "/login" ? "one" : "two";

    return (
      <div className="login">
        <div className="login-content">
          <div className="top-bar">
            <Link to="/">
              <div>Reactor</div>
            </Link>
          </div>

          <div className="login-form">
            <div className="log-block">
              <div className="switcher">

                <button id={style === "one" ? "one" : "none"}><Link to="/login">Login</Link></button>


                <button id={style === "two" ? "two" : "none"}><Link to="/signup">Sign Up</Link></button>

              </div>
              { this.switcher() }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
