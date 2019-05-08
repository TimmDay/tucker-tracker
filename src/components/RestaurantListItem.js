import React from 'react';
import {connect} from 'react-redux';
import { removeRestaurant, highlightRestaurant } from '../actions/inputRestaurant';

const RestaurantListItem = (props) => {

  const handleOnClick = (evt) => {
    console.log('item clicked');
    console.log(props.id);
    const data = {
      id: props.id,
      lat: props.lat,
      lng: props.lng
    };
    props.highlightRestaurant(data);
  }
  return (
    <div 
      className={
        (props.id === props.highlightedId)
        ? "highlighted-restaurant list-item restaurant-list-item"
        : "list-item restaurant-list-item"
      }
      onClick={handleOnClick}
    >
      <div>
        <span className="list-item__sub-title">{props.loc}</span>
        <h3 className="list-item__title">{props.name}</h3>
        <span className="list-item__sub-title">{props.food}</span>
        <h4 className="list-item__data">{`Rating: ${props.rating} / 5`}</h4>
      </div>
      
      <div 
        className='icon-action'
        onClick={() => props.removeRestaurant({id: props.id})}
      >
      del
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    highlightedId: state.inputRestaurantReducer.highlighted.id
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeRestaurant: data => dispatch(removeRestaurant(data)),
  highlightRestaurant: data => dispatch(highlightRestaurant(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListItem);