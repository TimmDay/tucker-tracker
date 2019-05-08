import React from 'react';
import {connect} from 'react-redux';
import { removeRestaurant } from '../actions/inputRestaurant';

const RestaurantListItem = (props) => (
  <div className="list-item">
    <div>
      <span className="list-item__sub-title">{props.loc}</span>
      <h3 className="list-item__title">{props.name}</h3>
      <span className="list-item__sub-title">{props.food}</span>
    </div>
    <h3 className="list-item__data">{props.rating}</h3>
    <button onClick={() => props.removeRestaurant({id: props.id})}>delete</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeRestaurant: data => dispatch(removeRestaurant(data))
});

export default connect(undefined, mapDispatchToProps)(RestaurantListItem);