import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

class Slider extends Component {
  state = {};
  render() {
    return (
      <AwesomeSlider>
        <div data-src="/images/1.jpg" />
        <div data-src="/images/" />
        <div data-src="/images/" />
      </AwesomeSlider>
    );
  }
}

export default Slider;
