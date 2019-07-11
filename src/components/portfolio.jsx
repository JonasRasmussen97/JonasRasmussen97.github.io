import React, { Component } from "react";
import "./portfolio.css";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row justify-content-center p-1 bg-dark">
          <div className="col-md-2 col-sm-4 hovereffect sm-col">
            <img className="img-fluid" src="https://picsum.photos/300/300" />
            <div className="overlay">
              <h2>1. Semester Project</h2>
              <p>This is the group project from my 1. Semester at University</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 hovereffect">
            <img className="img-fluid" src="https://picsum.photos/300/300" />
            <div className="overlay">
              <h2>1. Semester Project</h2>
              <p>This is the group project from my 1. Semester at University</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 hovereffect">
            <img className="img-fluid" src="https://picsum.photos/300/300" />
            <div className="overlay">
              <h2>1. Semester Project</h2>
              <p>This is the group project from my 1. Semester at University</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center p-1 bg-dark">
          <div className="col-md-2 col-sm-4 hovereffect">
            <img className="img-fluid" src="https://picsum.photos/300/300" />
            <div className="overlay hidden-sm hidden-xs">
              <h2>1. Semester Project</h2>
              <p>This is the group project from my 1. Semester at University</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 hovereffect">
            <img className="img-fluid" src="https://picsum.photos/300/300" />
          </div>
          <div className="col-md-2 col-sm-4 hovereffect">
            <img className="img-fluid" src="https://picsum.photos/300/300" />
          </div>
        </div>
        <div className="row justify-content-center p-1 bg-dark">
          <div className="col-md-2 col-sm-4 ">
            <img className="img-fluid" src="https://picsum.photos/300/300" />
          </div>
          <div className="col-md-2 col-sm-4 hovereffect">
            <img className="img-fluid" src="https://picsum.photos/300/300" />
          </div>
          <div className="col-md-2 col-sm-4 hovereffect">
            <img className="img-fluid" src="https://picsum.photos/300/300" />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
