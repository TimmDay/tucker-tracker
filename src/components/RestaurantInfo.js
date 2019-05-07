import React from 'react';
import { connect } from 'react-redux';
import InputAddress from './InputAddress';
import RestaurantInfoForm from './RestaurantInfoForm';
import RestaurantList from './RestaurantList';
import RestaurantListFilters from './RestaurantListFilters';

const RestaurantInfo = (props) => (
  <div className='restaurant-info'>
    <div>
      {!props.currLoc && <InputAddress/>}
      {props.currLoc && <RestaurantInfoForm/>}
    </div>
    <div>
      <RestaurantListFilters/>
      <RestaurantList/>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    currLoc: state.inputAddressReducer.currLoc
  }
};

export default connect(mapStateToProps)(RestaurantInfo);