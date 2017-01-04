import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class RoomSearchForm extends Component {

  static propTypes = {
    economy: PropTypes.any.isRequired,
    getEconomyRooms: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { getEconomyRooms } = this.props;
    getEconomyRooms();
  }

  render() {
    return (
      <form className="room-search-form">
        <section className="economy">
          <span>經濟房型</span>
          <select defaultValue="all">
            <option value="all">不限</option>
          </select>
        </section>
        <section className="normal">
          <span>普通房型</span>
          <select defaultValue="all">
            <option value="">不限</option>
          </select>
        </section>
        <section className="premium">
          <span>豪華房型</span>
          <select defaultValue="all">
            <option value="">不限</option>
          </select>
        </section>
        <button type="submit">查詢</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  economy: state.economy,
});

export default connect(mapStateToProps, {
  getEconomyRooms: actions.rooms.getEconomyRooms,
})(RoomSearchForm);
