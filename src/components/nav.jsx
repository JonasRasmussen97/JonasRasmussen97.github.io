import React, { Component } from "react";
import "./header.css";
import "./Nav.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row justify-content-between  ">
            <div className="col-md-2 ">
              <h1 className="my-logo">JR</h1>
            </div>
            <div className="col-md-4 text-center  my-col-nav">
              <ul className="nav navbar-nav">
                <li>
                  <b>
                    <a className="text-dark text-decoration-none" href="#">
                      <span className="" /> HOME
                    </a>
                    <a className="text-dark text-decoration-none" href="#">
                      <span className="glyphicon glyphicon-user" /> ABOUT
                    </a>
                    <a className="text-dark text-decoration-none" href="#">
                      <span className="glyphicon glyphicon-user" /> PORTFOLIO
                    </a>
                    <a className="text-dark text-decoration-none" href="#">
                      <span className="glyphicon glyphicon-user" /> CONTACT
                    </a>
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
