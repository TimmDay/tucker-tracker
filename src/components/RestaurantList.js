import React from 'react';
import {connect} from 'react-redux';
import RestaurantListItem from './RestaurantListItem';
import sortRestaurants from '../selectors/restaurantList';

const RestaurantList = (props) => (
  <div className="content-container">
    <div className="list-header">Top List</div>

    <div className="list-body">
      {
        props.saved.length === 0 ? (
          <div>
            <span className="list-item list-item--empty-msg">no saved restaurants</span>
          </div>
        ) : (
          props.saved.map((r) => (
            <RestaurantListItem
              key={r.id}
              {...r}
            />
          ))
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    saved: sortRestaurants(
      state.inputRestaurantReducer.saved, 
      state.restaurantListFiltersReducer
      )
  };
};

export default connect(mapStateToProps)(RestaurantList);
