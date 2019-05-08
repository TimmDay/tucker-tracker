import React from 'react';
import {connect} from 'react-redux';
import RestaurantListFilters from './RestaurantListFilters';
import RestaurantListItem from './RestaurantListItem';
import sortRestaurants from '../selectors/restaurantList';
import { highlightRestaurant } from '../actions/inputRestaurant';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps){
    if (this.props.allSaved.length && this.props.allSaved.length !== prevProps.allSaved.length) {
      const fresh = this.props.allSaved[this.props.allSaved.length-1];      
      this.props.highlightRestaurant({ 
        lat:fresh.lat, 
        lng: fresh.lng,
        id: fresh.id
      })
    }
  }
  
  render() {
    return (
      <div>
        <div className="list-header">
          <RestaurantListFilters/>
        </div>
        <div className="list-body">
          {
            this.props.saved.length === 0 ? (
              <div>
                <span className="list-item list-item--empty-msg">no saved restaurants</span>
              </div>
            ) : (
              this.props.saved.map((r) => (
                <RestaurantListItem
                  key={r.id}
                  {...r}
                />
              ))
            )
          }
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    saved: sortRestaurants(
      state.inputRestaurantReducer.saved, 
      state.restaurantListFiltersReducer
      ),
    allSaved: state.inputRestaurantReducer.saved,
  };
};

const mapDispatchToProps = (dispatch) => ({
  highlightRestaurant: data => dispatch(highlightRestaurant(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
