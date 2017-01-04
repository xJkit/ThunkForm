import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RoomSearchForm from '../components/RoomSearchForm';
import Spinner from 'react-spinkit';

class App extends Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
  };

  renderIndicator(view) {
    if (view) {
      return (
        <Spinner spinnerName="three-bounce" />
      );
    }
    return '';
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div className="app">
        <RoomSearchForm />
        {this.renderIndicator(isFetching)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(App);
