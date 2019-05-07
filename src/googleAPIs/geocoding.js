import Geocode from "react-geocode";
import { GEOCODING_API_KEY } from '../../keys';

Geocode.setApiKey(GEOCODING_API_KEY);
Geocode.enableDebug();



export const getCity = arr => {
  let city = '';
  for (let i=0; i<arr.length; i++) {
    if (arr[i].types[0] && arr[i].types[0] === "administrative_area_level_2") {
      city = arr[i].short_name;
    }
  }
  return city;
}

export const getState = arr => {
  let state = '';
  for (let i=0; i<arr.length; i++) {
    if (arr[i].types[0] && arr[i].types[0] === "administrative_area_level_1") {
      state = arr[i].short_name;
    }
  }
  return state;
}

export const getCountry = arr => {
  let country = '';
  for (let i=0; i<arr.length; i++) {
    if (arr[i].types[0] && arr[i].types[0] === "country") {
      country = arr[i].long_name;
    }
  }
  return country;
}

export const getLocFromLatLng = (lat, lng) => {
  return Geocode.fromLatLng(lat, lng)
}

export const getLatLngFromLoc = (lat, lng) => {
  return Geocode.fromAddress(lat, lng)
}
