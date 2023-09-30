import React, { Component } from "react";

export default class LifeCycleHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, World!",
    };
    console.log("Lifecycle: Constructor called");
  }

  componentDidMount() {
    console.log("Lifecycle: ComponentDidMount called");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Lifecycle: ComponentDidUpdate called", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Lifecycle: ComponentWillUnmount called");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Lifecycle: ShouldComponentUpdate called",
      nextProps,
      nextState
    );
    return true; // Return true to allow re-render, or false to prevent it.
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "Lifecycle: GetSnapshotBeforeUpdate called",
      prevProps,
      prevState
    );
    return null; // Return a snapshot value.
  }

  render() {
    console.log("Lifecycle: Render called");
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.updateMessage}>Update Message</button>
      </div>
    );
  }

  updateMessage = () => {
    this.setState({ message: "Message Updated!" });
  };
}
