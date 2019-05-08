import React from 'react';
import { connect } from 'react-redux';
import { saveRestaurant, highlightRestaurant } from '../actions/inputRestaurant';

class FormRestaurantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      food: '',
      rating: '',
      error: ''
    }
  }

  onNameChange = evt => {
    const name = evt.target.value;
    if (name.length > 300) {
      //enforce limit
    } else {
      this.setState({ name });
    }
  }

  onFoodChange = evt => {
    const food = evt.target.value;
    if (food.length > 300) {
      //just cut them off
    } else {
      this.setState({ food });
    }
  }

  onRatingChange = evt => {
    const rating = evt.target.value;
    if (rating.match(/^[0-5]$/)) {
      this.setState({ rating, error: '' });
    } else {
      this.setState({ 
        rating: '',
        error: 'please enter a rating from 0 to 5'
      })
    }
    
  }

  onSubmit = evt => {
    evt.preventDefault();
    // validation
    if (!this.state.name) this.setState({error: 'please enter the restaurant name'})
    else if (!this.state.food) this.setState({error: 'please enter your favorite dish!'})
    else if (!this.state.rating) this.setState({error: 'you forgot your rating!'})
    
    if (this.state.name && this.state.food && this.state.rating) {
      this.setState({error: ''})
      const data = {
        loc: this.props.currLoc.loc,
        lat: this.props.currLoc.lat,
        lng: this.props.currLoc.lng,
        name: this.state.name,
        food: this.state.food,
        rating: this.state.rating,
        highlighted: false
      }
      this.props.saveRestaurant(data)
    }
  }

  render () {
    return (
      <form
        className="restaurant-info-form"
        onSubmit={this.onSubmit}
      >
        <p>for the restaurant at: {this.props.currLoc.loc}</p>
        {this.state.error && <p className='err-msg'>{this.state.error}</p>}
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