import React from 'react';
import './login.css';
import './landing.css';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Landing from './landing.jsx';
import { Redirect } from 'react-router';


class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      loggedIn: false,
      currentUser: {
        image: '',
        name: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.location.pathname === nextProps.location.pathname){
      return null;
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }



  handleSubmit(e){
    e.preventDefault();
    if(this.props.location.pathname === "/login"){

      let params = new URLSearchParams();
      params.append('email', this.state.email);
      params.append('password', this.state.password);
      axios.post('http://dev3.apppartner.com/Reactors/scripts/user-login.php', params)
      .then((res) => {

        // this.props.history.pop();
        // this.props.history.push('/');
        this.setState({loggedIn: true,
                      currentUser: {
                          image: res.data.user_profile_image,
                          name: res.data.user_username,
          }
        })
      });
    } else {
    }
  }

  switcher(){
    if(this.props.location.pathname === "/login"){
      return(
        <div className="fields">
          <form onSubmit={this.handleSubmit}>
          <input
            id="email"
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={this.update('email')}
              />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}
              />
          <button type="submit">Login</button>
          </form>
        </div>
      );
    } else if (this.props.location.pathname === "/signup") {
      return (
        <div className="fields">
          <form onSubmit={this.handleSubmit}>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.update('username')}
            />
          <input
            id="email"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update('email')}
            />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}
            />
          <button  >Sign Up</button>
          </form>
        </div>
      );
    }
  }


  render(){
    let log, sign
    if (this.props.location.pathname === "/login"){
      log = "underline";
      sign = "dim"
    } else {
      log = "dim";
      sign = "underline"
    }

    if (this.state.loggedIn){
      return(
        <Landing
          currentUser={this.state.currentUser} />
      )
    } else {
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
                    <button id={log === "underline" ? "underline" : "dim"}><Link to="/login">Login</Link></button>

                      <button id={sign === "underline" ? "underline" : "dim"}><Link to="/signup">Sign Up</Link></button>

                      </div>
                      { this.switcher() }
                    </div>
                  </div>
                </div>
              </div>
            )
    }
  }
}

export default Login;
