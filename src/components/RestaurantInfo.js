import React from 'react';
import { connect } from 'react-redux';
import InputRestaurant from './InputRestaurant';
import RestaurantInfoForm from './RestaurantInfoForm';
import RestaurantList from './RestaurantList';
import RestaurantListFilters from './RestaurantListFilters';
// import MapGoogleAPI from '../components/MapGoogleAPI'; //TODO:
import Map from '../components/Map';

const RestaurantInfo = (props) => (
  <div className='restaurant-info'>
    {/* <div className='main-container'><MapGoogleAPI/></div> */}
    {/* <Map /> */}
    <div>
      {!props.currLoc && <InputRestaurant/>}
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
    currLoc: state.inputRestaurantReducer.currLoc
  }
};

export default connect(mapStateToProps)(RestaurantInfo);