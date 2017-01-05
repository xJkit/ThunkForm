/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class RoomSearchForm extends Component {

  static propTypes = {
    economy: PropTypes.array.isRequired,
    getEconomyRooms: PropTypes.func.isRequired,
    handleFormResult: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { getEconomyRooms } = this.props;
    getEconomyRooms();
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

  render() {
    const { economy } = this.props;
    return (
      <form className="room-search-form" onSubmit={::this.onFormSubmit}>
        <section className="economy">
          <span>經濟房型</span>
          <select defaultValue="all">
            <option value="all">不限</option>
            {economy.map(room => (
              <option value={room.name} key={room.id}>{room.name}</option>
            ))}
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
