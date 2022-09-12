import React from "react";
import '../Styles/Login.css'
import { Link } from "react-router-dom";
const initialState = {
  name: "",
  password: "",
  nameError: "",
  passwordError: "",
};
export default class Login extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";

  

    if (!this.state.name) {
      nameError = "Username cannot be blank";
    }

    if (nameError) {
      this.setState({ nameError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="login-hero">
        <form onSubmit={this.handleSubmit}>
          <h2>Welcome Back!</h2>
          <div>
            <input
              name="name"
              id="input-hero"
              placeholder="Username"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>
          </div>
          <div>
            <input 
              type="password"
              id="input-hero"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
          </div>
          <div className="password-sect">
            <div>
            <input type="checkbox" id="rememberpass" />
          Remember password
            </div>
          
          <br />
          <a href="">Forgot Password?</a>
          </div>
          <button type="submit">Log In</button>
          <p>
            New User? <Link to='/getstarted'>Click here</Link>  
          </p>
        </form>
      </div>
    );
  }
}
