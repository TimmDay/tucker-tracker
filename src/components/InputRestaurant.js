import React from 'react';
import { connect } from 'react-redux';
import ReactAutocomplete from 'react-autocomplete';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getLatLngFromLoc } from '../googleAPIs/geocoding';
import { updateCurrLoc } from '../actions/inputRestaurant';

class InputAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = { typedAddress: '', autoComOptions: [], error: '' }
  }

  onAddressChange = evt => {
    const typedAddress = evt.target.value;
    if (name.length > 300) {
      //enforce limit, do nothing
    } else {
      // autocomplete suggestions only with 3 or more chars
      if (typedAddress.length > 2) {
        getLatLngFromLoc(typedAddress)
          .then(res => {
            const locs = res.results.map(item => {
              return {label: item.formatted_address}
            })
            this.setState({ autoComOptions: locs })
          })
      } else {
        // clear the suggestions
        this.setState({ autoComOptions: [] })
      }
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
            <ReactAutocomplete
              items={this.state.autoComOptions}
              getItemValue={item => item.label} // reads each entry in items
              renderItem={(item, isHighlighted) =>
                <div
                  key={item.id}
                  style={{
                    color: isHighlighted ? '#ea4335' : '#333',
                    padding: '5px'
                  }}
                > {item.label}
                </div>
              }
              value={this.state.typedAddress}
              onChange={this.onAddressChange}
              onSelect={loc => this.setState({typedAddress: loc})}
              inputProps={{
                className: 'text-input',
                placeholder: 'enter a restaurant address',
              }}
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