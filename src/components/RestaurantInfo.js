import React from 'react';
import { connect } from 'react-redux';
import InputRestaurant from './InputRestaurant';
import RestaurantInfoForm from './RestaurantInfoForm';
import RestaurantList from './RestaurantList';
import Map from '../components/Map';

const RestaurantInfo = (props) => (
  <div className='restaurant-info'>
    <div>
      {!props.currLoc && <InputRestaurant/>}
      {props.currLoc && <RestaurantInfoForm/>}
    </div>
    <div className='restaurant-info__sbs content-container'>
      <RestaurantList/>
      <Map />
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    currLoc: state.inputRestaurantReducer.currLoc
  }
};

export default connect(mapStateToProps)(RestaurantInfo);