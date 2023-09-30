import React, { Component } from "react";

export default class OptimizedStateChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "This is the initial message!",
    };
  }

  componentDidMount() {
    console.log(
      "Optimized: component rendered. State will be changed in 3 secs"
    );
    this.interval = setInterval(() => {
      const newState = Object.assign({}, this.state);

      newState.message = "Message Updated!";

      this.setState(newState);
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Optimized: State Changed. Checking this and nextState");
    if (nextState.message !== this.state.message) {
      console.log("Optimized: State is different so updating.");
      return true;
    } else {
      console.log("Optimized: State is same so not updating.");
      return false;
    }
  }

  render() {
    return <h2>{this.state.message}</h2>;
  }
}
