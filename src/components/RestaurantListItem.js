import React from 'react';

const RestaurantListItem = ({name = '', food = '', rating = '', loc='', id = '-1'}) => (
  <div className="list-item">
    <div>
      <span className="list-item__sub-title">{loc}</span>
      <h3 className="list-item__title">{name}</h3>
      <span className="list-item__sub-title">{food}</span>
    </div>
    <h3 className="list-item__data">{rating}</h3>
  </div>
);

export default RestaurantListItem;