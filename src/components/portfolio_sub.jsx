import React, { Component } from "react";
import "./portfolio-sub.css";

class PortfolioSub extends Component {
  state = {
    categories: ["All", "University", "Websites", "Applications", "Mobile"],
    selectedCategory: "All",
    activeButton: "btn btn-danger mr-2 btn-sm active",
    inactiveButton: "btn btn-danger mr-2 btn-sm"
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <ul className="nav navbar-nav my-portfolio-sub">
              <li>
                <button id={this.state.categories[0]} onClick={this.showActiveCategory.bind(this)} className={this.state.selectedCategory == this.state.categories[0] ? this.state.activeButton : this.state.inactiveButton}>
                  {this.state.categories[0]}
                </button>
                <button id={this.state.categories[1]} onClick={this.showActiveCategory.bind(this)} className={this.state.selectedCategory == this.state.categories[1] ? this.state.activeButton : this.state.inactiveButton}>
                  {this.state.categories[1]}
                </button>
                <button id={this.state.categories[2]} onClick={this.showActiveCategory.bind(this)} className={this.state.selectedCategory == this.state.categories[2] ? this.state.activeButton : this.state.inactiveButton}>
                  {this.state.categories[2]}
                </button>
                <button id={this.state.categories[3]} onClick={this.showActiveCategory.bind(this)} className={this.state.selectedCategory == this.state.categories[3] ? this.state.activeButton : this.state.inactiveButton}>
                  {this.state.categories[3]}
                </button>
                <button id={this.state.categories[4]} onClick={this.showActiveCategory.bind(this)} className={this.state.selectedCategory == this.state.categories[4] ? this.state.activeButton : this.state.inactiveButton}>
                  {this.state.categories[4]}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Sets the button of the category clicked to be "active".
  showActiveCategory(e) {
    this.setState({ selectedCategory: e.target.id });
  }
}

export default PortfolioSub;
