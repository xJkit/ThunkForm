import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RoomSearchForm from '../components/RoomSearchForm';
import RoomSearchResult from '../components/RoomSearchResult';
import Spinner from 'react-spinkit';

class App extends Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      result: {
        economy: '',
        normal: '',
        premium: '',
      },
    };
  }

  handleFormResult(searchResult) {
    this.setState({
      result: searchResult,
    });
  }

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
    const { result } = this.state;
    return (
      <div className="app">
        <RoomSearchForm
          handleFormResult={(searchResult) => this.handleFormResult(searchResult)}
        />
        {this.renderIndicator(isFetching)}
        {result ? <RoomSearchResult result={result} /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(App);
