import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from 'components/Navbar';

class App extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div className="app">
        <Navbar />
        <h1>App containers rendered by default</h1>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
