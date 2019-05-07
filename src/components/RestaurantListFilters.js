import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, toggleSort } from '../actions/restaurantListFilters';

export class RestaurantListFilters extends React.Component {
  constructor(props) {
    super(props);
  }
  onTextChange = evt => {
    this.props.setTextFilter(evt.target.value);
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          className="text-input"
          placeholder="search eateries"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <button onClick={this.props.toggleSort}>sort</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.restaurantListFiltersReducer
  }
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  toggleSort: () => dispatch(toggleSort())
});


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListFilters);