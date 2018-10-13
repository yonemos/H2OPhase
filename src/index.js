import React from "react";
import { render } from "react-dom";
import "./styles.css";

class H2o extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 1 };
  }
  H2ostate(temp) {
    if (temp <= 0) {
      return "Ice";
    }
    if (temp >= 100) {
      return "Steam";
    }
    return "Water";
  }
  render() {
    return (
      <div>
        <h2 className={this.H2ostate(this.state.temp)}>
          Phase:{this.H2ostate(this.state.temp)}
        </h2>
        <p className="do">{this.state.temp}度</p>
        <button onClick={this.on10pulusButton}>+10</button>
        <button onClick={this.onpulusButton}>+</button>
        <button onClick={this.onmynusButton}>-</button>
        <button onClick={this.on10mynusButton}>-10</button>
      </div>
    );
  }
  onpulusButton = () => {
    this.setState({ temp: this.state.temp + 1 });
  };
  onmynusButton = () => {
    this.setState({ temp: this.state.temp - 1 });
  };
  on10pulusButton = () => {
    this.setState({ temp: this.state.temp + 10 });
  };
  on10mynusButton = () => {
    this.setState({ temp: this.state.temp - 10 });
  };
}

render(<H2o />, document.getElementById("root"));
