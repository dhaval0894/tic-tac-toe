import React, { Component } from 'react';

class SmpButton extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1});
  }

  render() {
    return (
      <button onClick={() => this.handleClick() }> +1 </button>
    );
  }
}

export default SmpButton;
