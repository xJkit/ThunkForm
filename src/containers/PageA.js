import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageA extends Component {
  render() {
    return (
      <div className="page-a">
        Page A
      </div>
    );
  }
}

export default connect()(PageA);
