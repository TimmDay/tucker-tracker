import React from 'react';
import { connect } from 'react-redux';
import { saveRestaurant, highlightRestaurant } from '../actions/inputRestaurant';


class FormRestaurantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      food: '',
      rating: ''
    }
  }

  //TODO: validation
  onNameChange = evt => {
    const name = evt.target.value;
    this.setState({ name });
  }
  //TODO: validation
  onFoodChange = evt => {
    const food = evt.target.value;
    this.setState({ food });
  }
  //TODO: validation
  onRatingChange = evt => {
    const rating = evt.target.value;
    this.setState({ rating });
  }

  onSubmit = evt => {
    evt.preventDefault();

    const data = {
      loc: this.props.currLoc.loc,
      lat: this.props.currLoc.lat,
      lng: this.props.currLoc.lng,
      name: this.state.name,
      food: this.state.food,
      rating: this.state.rating,
      highlighted: false
    }
    //TODO: come back when I have internet connection again
    this.props.saveRestaurant(data)
    .then(console.log('then'))
  }

  render () {
    return (
      <form
        className="restaurant-info-form"
        onSubmit={this.onSubmit}
      >
        <p>for the restaurant at: {this.props.currLoc.loc}</p>
        <div>
          <input 
            type="text"
            placeholder='restaurant name'
            onChange={this.onNameChange}
            className='text-input'
            value={this.state.name}
          />
          <input 
            type="text"
            placeholder='favorite food'
            onChange={this.onFoodChange}
            className='text-input'
            value={this.state.food}
          />
          <input 
            type="text"
            placeholder='rating / 5'
            onChange={this.onRatingChange}
            className='text-input'
            value={this.state.rating}
          />
        </div>
        <button onClick={this.onSubmit}>save restaurant</button>
      </form>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currLoc: state.inputRestaurantReducer.currLoc
  }
};

const mapDispatchToProps = (dispatch) => ({
  saveRestaurant: data => dispatch(saveRestaurant(data)),
  highlightRestaurant: data => dispatch(highlightRestaurant(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRestaurantInfo);