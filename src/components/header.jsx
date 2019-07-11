import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row justify-content-center ">
          <div className="col-md-6 text-center my-header-text">
            Hi, my name is <kbd>Jonas Rasmussen</kbd> Welcome to my portfolio!
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-6 text-center my-header-text-sub font-italic">Greet your visitors & Showcase your work with style.</div>
        </div>
      </div>
    );
  }
}

export default Header;
