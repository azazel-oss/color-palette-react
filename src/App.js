import React, { Component } from "react";
import Box from "./Box";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: Array(16)
        .fill()
        .map(() => {
          return {
            red: Math.floor(Math.random() * 256),
            green: Math.floor(Math.random() * 256),
            blue: Math.floor(Math.random() * 256),
          };
        }),
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor = (e) => {
    const newColors = [...this.state.colors];
    newColors[e] = {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256),
    };
    this.setState({
      colors: newColors,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Color Palette</h1>

        <div className="palette">
          {this.state.colors.map((color, index) => {
            return (
              <Box
                key={Math.random()}
                color={color}
                onClick={this.changeColor.bind(this, index)}
                id={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
