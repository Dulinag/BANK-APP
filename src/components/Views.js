import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Views extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default Views;
