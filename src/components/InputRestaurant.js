import React from 'react';
import { connect } from 'react-redux';
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
    //TODO: address validation
    this.setState(() => ({ typedAddress: typedAddress }));
  }

  onSubmit = evt => {
    evt.preventDefault();
    getLatLngFromLoc(this.state.typedAddress)
    .then(res => {
      console.log(res);
      const address = res.results[0].formatted_address;
      const lat = res.results[0].geometry.location.lat;
      const lng = res.results[0].geometry.location.lng;

      this.setState({
        address: address ? address : '',
      })

      this.props.updateCurrLoc({
        loc: address ? address : '',
        lat: lat ? lat : '',
        lng: lng ? lng : '',
      })
    })
  }

  render () {
    return (
      <div className='input-restaurant'>
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
        
        <div className='icon-action' onClick={this.onSubmit}>S</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCurrLoc: (obj) => dispatch(updateCurrLoc(obj))
})
export default connect(undefined, mapDispatchToProps)(InputAddress);