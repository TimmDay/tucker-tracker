import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'react-google-autocomplete'; //TODO:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getLatLngFromLoc } from '../googleAPIs/geocoding';
import { updateCurrLoc } from '../actions/inputRestaurant';

class InputAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedAddress: '',
      error: ''
    }
  }

  onAddressChange = evt => {
    const typedAddress = evt.target.value;
    if (name.length > 300) {
      //enforce limit
    } else {
      this.setState(() => ({ typedAddress: typedAddress }));
    }
  }

  onSubmit = evt => {
    evt.preventDefault();
    getLatLngFromLoc(this.state.typedAddress)
    .then(res => {
      const address = res.results[0].formatted_address;
      const lat = res.results[0].geometry.location.lat;
      const lng = res.results[0].geometry.location.lng;

      this.setState({
        address: address ? address : '',
        error: ''
      })

      this.props.updateCurrLoc({
        loc: address ? address : '',
        lat: lat ? lat : '',
        lng: lng ? lng : '',
      })
    })
    .catch(e => {
      console.log(e);
      this.setState({ error: 'no results... please try again'})
    })
  }

  render () {
    return (
      <div className='input-restaurant'>
        <div className='input-restaurant__search'>
          <form onSubmit={this.onSubmit}>
            <input 
              className='text-input'
              type="text"
              placeholder="enter a restaurant address"
              value={this.state.typedAddress}
              onChange={this.onAddressChange}
              autoFocus
            />
          </form>
          <div className='icon-action' onClick={this.onSubmit}>
            <FontAwesomeIcon icon="search-location" />
          </div>
        </div>
        {this.state.error && <p className='err-msg'>{this.state.error}</p>}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCurrLoc: (obj) => dispatch(updateCurrLoc(obj))
})
export default connect(undefined, mapDispatchToProps)(InputAddress);