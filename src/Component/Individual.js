import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Individual.css'

const initialIndividual = {
  username: "",
  fullname: "",
  email: "",
  phonenum: "",
  usernameError: "",
  fullnameError: "",
  emailError: "",
  phonenumError: "",
};
export default class Individual extends React.Component {
  state = initialIndividual;

  handleChange = event => {
    const isCheckBox = event.target.type === "checkedbox";
    this.setState({
      [event.target.name]: isCheckBox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let usernameError = "";
    let fullnameError = "";
    let emailError = "";
    let phonenumError = "";

    if (!this.state.username) {
      usernameError = "username cannot be blank";
    }
    if (!this.state.phonenum.includes(0,1,2,3,4,5,6,7,8,9)) {
      phonenumError = "phone number cannot be blank";
    }
    if (!this.state.fullname) {
      fullnameError = "Full name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (usernameError || fullnameError || emailError || phonenumError) {
      this.setState({
        usernameError,
        fullnameError,
        emailError,
        phonenumError
      });
      return false;
    }
    return true;
  };
  handleSub = (event) => {
    event.preventDefault();
    const isSubmit = this.validate();
    if (isSubmit) {
      console.log(this.state);
      this.setState(initialIndividual);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSub}>
        <div className="individual-hero">
          <h2>Welcome!</h2>
          <button className="individual-btn1">
            
            <Link to="/Individual"> Individual </Link>
          </button>
          <button className="individual-btn1">
            
            <Link to="/Business">Business </Link>
          </button>
          
          <div>
            <input
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.usernameError}
            </div>
          </div>

          <div>
            <input
              name="fullname"
              placeholder="Full Name"
              value={this.state.fullname}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.fullnameError}
            </div>
          </div>

          <div>
            <input
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          </div>

          <div>
            <input
              name="phonenum"
              placeholder="Phone Number"
              value={this.state.phonenum}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.phonenumError}
            </div>
          </div>

          <input 
          name="text" 
          placeholder="Referral Code(optional)"
          onChange={this.handleChange} />

          <p>
            By clicking the Sign Up below, you agree to TradeExpress{" "}
            <a href="">terms and service</a>
          </p>
          <button className="business-btn" type="submit"  > <Link to= '/almostin'> Sign Up</Link> </button>
          
          <p>
            Already have an account? <Link to='/login'>Click here</Link>
          </p>
        </div>
      </form>
    );
  }
}

