# :hamburger: Tucker Tracker :bento:
Search, sort and save your favorite restaurants.
A react/redux app built to explore the Google Maps and Geocoding APIs.

You can view a live demo of this project 
:exclamation::arrow_right:---> [HERE](https://tucker-tracker.herokuapp.com) <---- :arrow_left::exclamation:

## Getting Started :grapes:
You will need to obtain your own API keys and insert them into the code to be able to build your own version.

### Prerequisites :chocolate_bar:
You will need to get your own API keys for the Google Maps / Geocoding API (the same key will work for both), and also for google firebase authentication.

##### Google Maps / Geocoding
Go [here](https://developers.google.com/maps/documentation/javascript/get-api-key) and follow the instructions. As of April 2019 you *will* need to sign up for an account (they have a free one) to get the key.
- enable google maps api on your google account
- enable geocoder api on your google account

##### firebase authentication
Go [here](https://firebase.google.com/docs/web/setup?authuser=0) and follow the instructions for firebase for web. You will need to create a firebase project.

### Installing :stew:

##### insert your keys into project code
(You will notice that I have my own dev env variables and imports. You will be deleting/replacing these).

Go to the following files and enter the appropriate key:
- src/googleAPIs/geocoding
  - delete the key import on line 2
  - Geocode.setApiKey('your key here')
- src/googleAPIs/firebase
  - in the config object, replace the process.env references with your own keys (as strings)
- src/components/Map.js
    on line 63: googleMapURL: ```https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE&libraries=geometry,drawing,places```

##### git clone this project

##### install dependencies
you will need both yarn and node installed on your system.

##### yarn install
to add dependencies

##### yarn build:dev
to build the development version (with sourcemaps).
You can also use yarn build:prod if you want to deploy (but don't forget to scrub all your api keys if committing to github)

##### yarn run dev-server 
this will allow you to hot reload while you tinker


## To Improve the project (todos) :watermelon:
- include a firestore database to persist user data across sessions for multiple users
- include InfoWindow components to display above the map markers of the selected restaurant locations
- restrict unnecessary API calls to the maps api (shouldComponentUpdate)
- expand the test suite

## Built with: :doughnut:
react, redux, sass, node, express, babel, wepack, yarn
Google Maps API, Google Geocoding API, google firebase authentication

## Authors: :spaghetti:
Tim Day

## Docs for 3rd parties :birthday:

#### Maps API
[official](https://cloud.google.com/maps-platform/)
[google-maps-react](https://www.npmjs.com/package/google-maps-react)

#### Geocode API
[official](https://developers.google.com/maps/documentation/geocoding/start)
[react-geocode](https://www.npmjs.com/package/react-geocode)

#### Firebase Authentication
[docs](https://firebase.google.com/docs/reference/js/)
[dev console](https://console.firebase.google.com/)

#### react autocomplete
[react-autocomplete](https://www.npmjs.com/package/react-autocomplete)

