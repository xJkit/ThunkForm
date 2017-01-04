import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomSearchForm from '../components/RoomSearchForm';

class App extends Component {

  render() {
    return (
      <div className="app">
        <RoomSearchForm />
      </div>
    );
  }
}

export default connect()(App);
