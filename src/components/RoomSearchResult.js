import React, { PropTypes } from 'react';

const RoomSearchResult = props => (
  <div className="room-search-result">
    <h3>搜尋結果如下：</h3>
    <ul>
      <li>經濟房型：{props.result.economy}</li>
      <li>普通房型：{props.result.normal}</li>
      <li>豪華房型：{props.result.premium}</li>
    </ul>
  </div>
);

RoomSearchResult.propTypes = {
  result: PropTypes.object.isRequired,
};

export default RoomSearchResult;
