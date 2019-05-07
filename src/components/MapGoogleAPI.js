import React from 'react';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { getLocFromLatLng, getCity, getState, getCountry } from '../googleAPIs/geocoding';

const mapStyles = {
  width: '100vw',
  height: '40vh',
}


class MapGoogleAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapPos: {
        lat: -37.814,
        lng: 144.96332
      }
    }
  }

  componentDidMount() {
    let address ='', city ='', state='', country='';
    getLocFromLatLng(this.state.mapPos.lat, this.state.mapPos.lng)
      .then(res => {
        const addressArray = res.results[0].address_components;
        address = res.results[0].formatted_address;
        city = getCity(addressArray);
        state = getState(addressArray);
        country = getCountry(addressArray);

        this.setState({
          address: address ? address : '',
          city: city ? city : '',
          state: state ? state : '',
          country: country ? country : '',
        })
    })
  }

  onInfoWindowClose = (evt) => {}

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Map
        className='map-container'
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        center={{
          lat: this.state.mapPos.lat,
          lng: this.state.mapPos.lng
        }}
        onClick={this.onMapClicked}
      >
        { this.props.saved && this.props.saved.map(loc => (
          <Marker
            key={`${loc.name}${loc.lat}`}
            name={loc.name}
            food={loc.food}
            rating={loc.rating}
            onClick={this.onMarkerClick}
            position={{lat: loc.lat, lng: loc.lng}}
          />
        ))}
        <InfoWindow 
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}
        >
          <div className="">
            <p>{this.state.activeMarker && this.state.activeMarker.name}</p>
            <p>{this.state.activeMarker && this.state.activeMarker.food}</p>
            <p>{this.state.activeMarker && this.state.activeMarker.rating}</p>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currLoc: state.inputAddressReducer.currLoc,
    saved: state.inputAddressReducer.saved
  }
};

const mapDispatchToProps = (dispatch) => ({
  // selectedRestaurantFromMap
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: process.env.MAPS_API_KEY
})(MapGoogleAPI));
