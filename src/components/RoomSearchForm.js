import React, { Component } from 'react';

class RoomSearchForm extends Component {
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

export default RoomSearchForm;
