import React, { Component } from "react";
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 20
  };

  handleIncrement = () => {
    console.log("Handle clicked!", this);
    // Overrides the value of the count variable.
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <b>There are no tags!</b>;
    } else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}{" "}
        </ul>
      );
    }
  }
  // Method 1 and method 2 for simple conditional rendering.
  render() {
    return (
      <div>
        <img src="/images/1.png" class="img-fluid" alt="Responsive image" />
        {this.state.count}
        {this.renderTags()}
        {this.state.tags.length === 0 && "Please add a new tag!"};
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
