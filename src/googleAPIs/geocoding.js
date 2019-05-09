import Geocode from "react-geocode";
import { GEOCODING_API_KEY } from '../../keys';

Geocode.setApiKey(GEOCODING_API_KEY);
Geocode.enableDebug();

export const getLocFromLatLng = (lat, lng) => {
  return Geocode.fromLatLng(lat, lng)
}

export const getLatLngFromLoc = (address) => {
  return Geocode.fromAddress(address)
}
