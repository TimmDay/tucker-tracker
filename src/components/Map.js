import React from 'react';
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose";

const mapStyles = {
  width: '100vw',
  height: '40vh',
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centerLat: 52.524750,
      centerLng: 13.393030
    }
  }

  onMarkerClick = (lat, lng) => {
    console.log(lat, lng);

    //TODO: dispatch highlight corr list item
    
    this.setState({
      centerLat: lat,
      centerLng: lng
    })
  }
  
  // onMapClicked = (props) => {
  //   console.log('map clicked'); //TODO:
    
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     })
  //   }
  // };

  render() {
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 52.524750, lng: 13.393030 }}
        onClick={this.onMapClicked}
        center={{ lat: this.state.centerLat, lng: this.state.centerLng }}
      >
        { this.props.saved && this.props.saved.map(loc => (
          <Marker
            key={`${loc.name}${loc.lat}`}
            name={loc.name}
            food={loc.food}
            rating={loc.rating}
            onClick={() => this.onMarkerClick(loc.lat, loc.lng)}
            position={{lat: loc.lat, lng: loc.lng}}
          />
        ))}
      </GoogleMap>
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

export default connect(mapStateToProps, mapDispatchToProps)
(compose(
  withProps({
    isMarkerShown: true,
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `50vh` }} />,
    mapElement: <div style={mapStyles} />
  }),
  withScriptjs,
  withGoogleMap
)(Map));
