




# Installation
- You can view a live demo of this project [here]() TODO:

You will need to get your own API keys for the Google Maps / Geocoding API (the same key will work for both), and also for google firebase authentication.

Go [here](https://developers.google.com/maps/documentation/javascript/get-api-key) and follow the instructions. As of April 2019 you *will* need to sign up for an account (they have a free one) to get the key.

You will also need your own firebase authentication keys.
Go [here](https://firebase.google.com/docs/web/setup?authuser=0) and follow the instructions for firebase for web. You will need to create a firebase project



Now create a folder


- clone this project
- enable google maps api
- get yor own google maps api key
- enable geocoder api
- get your own google geocoding api key, (same as above)
- get your own firebase auth keys
- yarn install to add dependencies
- yarn build:dev to build a development version
- yarn run dev-server toview the development version


## Ways to Improve the project
- include a firestore database to persist user data across sessions for multiple users
- include InfoWindow components to display above the map markers of the selected restaurant locations
- restrict unnecessary API calls to the maps api (shouldComponentUpdate)
- expand the test suite


# Docs for APIs used

### Maps API
https://cloud.google.com/maps-platform/
https://www.npmjs.com/package/google-maps-react

### Geocode API
https://developers.google.com/maps/documentation/geocoding/start
https://www.npmjs.com/package/react-geocode

### Firebase Authentication
https://firebase.google.com/docs/reference/js/
https://console.firebase.google.com/

### react autocomplete
https://www.npmjs.com/package/react-autocomplete