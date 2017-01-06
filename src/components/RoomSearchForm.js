/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class RoomSearchForm extends Component {

  static propTypes = {
    economy: PropTypes.array.isRequired,
    normal: PropTypes.array.isRequired,
    premium: PropTypes.array.isRequired,
    getAllRooms: PropTypes.func.isRequired,
    handleFormResult: PropTypes.func.isRequired,
    renderCounter: PropTypes.func.isRequired,
  };

  componentWillMount() {
    // const { getEconomyRooms, getNormalRooms, getPremiumRooms, renderCounter } = this.props;
    // getEconomyRooms();
    // getNormalRooms();
    // getPremiumRooms();
    /* Replace the above action creators with thunk function */
    const { renderCounter, getAllRooms } = this.props;
    getAllRooms();
    renderCounter();
  }

  componentWillUpdate() {
    const { renderCounter } = this.props;
    renderCounter();
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    console.warn('You submit the form!');
    const result = {
      economy: evt.target.elements[0].value,
      normal: evt.target.elements[1].value,
      premium: evt.target.elements[2].value,
    };
    this.props.handleFormResult(result);
  }

  renderRoomOptions(rooms) {
    return rooms.map(room => (
      <option value={room.name} key={room.id}>{room.name}</option>
    ));
  }

  render() {
    const { economy, normal, premium } = this.props;
    return (
      <form className="room-search-form" onSubmit={::this.onFormSubmit}>
        <section className="economy">
          <span>經濟房型</span>
          <select defaultValue="all">
            <option value="all">不限</option>
            {this.renderRoomOptions(economy)}
          </select>
        </section>
        <section className="normal">
          <span>普通房型</span>
          <select defaultValue="all">
            <option value="all">不限</option>
            {this.renderRoomOptions(normal)}
          </select>
        </section>
        <section className="premium">
          <span>豪華房型</span>
          <select defaultValue="all">
            <option value="all">不限</option>
            {this.renderRoomOptions(premium)}
          </select>
        </section>
        <button type="submit">查詢</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  economy: state.economy,
  normal: state.normal,
  premium: state.premium,
});

export default connect(mapStateToProps, {
  getAllRooms: actions.rooms.getAllRooms,
  renderCounter: actions.renderCounter.renderCounter,
})(RoomSearchForm);
