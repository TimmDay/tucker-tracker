import React from 'react';
import {connect} from 'react-redux';
import RestaurantListItem from './RestaurantListItem';
import sortRestaurants from '../selectors/restaurantList';
import RestaurantListFilters from './RestaurantListFilters';


const RestaurantList = (props) => (
  <div>
    <div className="list-header">
      Top List
      <RestaurantListFilters/>
    </div>
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
