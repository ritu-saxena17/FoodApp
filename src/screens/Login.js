import background from "../image/food.jpeg";
import fireSettings from "../config/firebase";
import "./HomePage/styles.js";
import Home from "./Home";
import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.SignUp = this.SignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  SignUp(e) {
    e.preventDefault();
    fireSettings
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  //check user is logged in or not
  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ user });
  //     } else {
  //       this.setState({ user: null });
  //     }
  //   });
  // }

  // componentDidMount() {
  //   this.authListener();
  // }

  render() {
    return (
      <div
        className="div1"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        Login Please
        <form className="form">
          <input
            placeholder="Email"
            id="email"
            className="input"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          ></input>
          <br />
          <br />
          <input
            placeholder="Password"
            id="password"
            className="input"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          ></input>
          <br />
          <br />
          <button onClick={this.SignUp}>Sign In</button>
        </form>
      </div>
    );
  }
}
