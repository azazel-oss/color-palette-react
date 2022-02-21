import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.onClick(this.props.index);
  }
  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: `rgb(${this.props.color.red}, ${this.props.color.green}, ${this.props.color.blue})`,
        }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
