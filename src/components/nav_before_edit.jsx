import React, { Component } from "react";
import "./header.css";
import "./Nav.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-md-2">
              <h1>JR</h1>
            </div>
            <div className="col-md-4 text-center  my-col-nav">
              <ul class="nav navbar-nav">
                <li>
                  <b>
                    <a className="text-info" href="#">
                      <span className="" /> HOME
                    </a>
                    <a className="text-info" href="#">
                      <span class="glyphicon glyphicon-user" /> ABOUT
                    </a>
                    <a className="text-info" href="#">
                      <span class="glyphicon glyphicon-user" /> PORTFOLIO
                    </a>
                    <a className="text-info" href="#">
                      <span class="glyphicon glyphicon-user" /> CONTACT
                    </a>
                  </b>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-md-6 text-center my-header-text">Hi, my name is Jonas Rasmussen. Welcome to my portfolio!</div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-md-6 text-center my-header-text-sub">Greet your visitors & Showcase your work with style.</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul class="nav navbar-nav">
                <li>
                  <button className="btn btn-danger btn-sm rounded-0">1. Semester</button>
                  <button className="btn btn-danger btn-sm rounded-0">2. Semester</button>
                  <button className="btn btn-danger btn-sm rounded-0">3. Semester</button>
                  <button className="btn btn-danger btn-sm rounded-0">4. Semester</button>
                  <button className="btn btn-danger btn-sm rounded-0">5. Semester</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="row my-row">
            <div className="col-md-4 my-col ">Item</div>
            <div className="col-md-4 my-col ">Item</div>
            <div className="col-md-4 my-col ">Item</div>
          </div>
          <div className="row my-row">
            <div className="col-md-4 my-col ">Item</div>
            <div className="col-md-4 my-col ">Item</div>
            <div className="col-md-4 my-col ">Item</div>
          </div>
          <div className="row my-row">
            <div className="col-md-4 my-col ">Item</div>
            <div className="col-md-4 my-col ">Item</div>
            <div className="col-md-4 my-col ">Item</div>
          </div>
          <div className="row justify-content-center my-row">
            <div className="col-2 my-col ">Footer</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
