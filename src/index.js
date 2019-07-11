import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./components/nav";
import Header from "./components/header";
import PortfolioSub from "./components/portfolio_sub";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";

// Used to track website load time. Should be removed in future.
let n = Date.now();

// Which component to insert, where to insert it.
ReactDOM.render(<Navigation />, document.getElementById("nav"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<PortfolioSub />, document.getElementById("portfolio_sub"));
ReactDOM.render(<Portfolio />, document.getElementById("portfolio"));
ReactDOM.render(<Footer />, document.getElementById("footer"));

// ReactDOM.render(<Slider />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Used to track website load time. Should be removed in future. Result precision unknown.
let n2 = Date.now();
console.log(n2 - n);
