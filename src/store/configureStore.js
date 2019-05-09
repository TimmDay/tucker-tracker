import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import inputRestaurantReducer from '../reducers/inputRestaurant';
import restaurantListFiltersReducer from '../reducers/restaurantListFilters';
import { saveRestaurant, highlightRestaurant } from '../actions/inputRestaurant'; //for demo

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      inputRestaurantReducer,
      restaurantListFiltersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  // DEMO:
  //Amrit Indian. Oranienburger Str. 45, 10117 Berlin
  const data1 = {
    loc: "Oranienburger Str. 45, 10117 Berlin, Germany",
    lat: 52.525959,
    lng: 13.389560,
    name: 'Amrit Indian',
    food: 'vege daal',
    rating: 4,
    id: '3abd1b81-082e-4823-bb8c-8562ec01257e'
  }
  store.dispatch(saveRestaurant(data1))

  // Factory Girl. Auguststraße 29, 10119 Berlin
  const data2 = {
    loc: "Auguststraße 29, 10119 Berlin, Germany",
    lat: 52.528140,
    lng: 13.403250,
    name: 'Factory Girl',
    food: 'eggs benny',
    rating: 3,
    id: '7abd1b81-082e-4823-bb8c-8562ec0415gr'
  }
  store.dispatch(saveRestaurant(data2));

  //Auguststraße 24, 10117 Berlin
  const data3 = {
    loc: "Auguststraße 24, 10117 Berlin, Germany",
    lat: 52.526890,
    lng: 13.396720,
    name: 'The Ballhaus',
    food: 'sausages',
    rating: 2,
    id: '9abd1b81-082e-4823-bb8c-8562ec0415rt'
  }
  store.dispatch(saveRestaurant(data3));

  // Invalidenstraße 43, 10115 Berlin, Germany
  const data4 = {
    loc: "Invalidenstraße 43, 10115 Berlin, Germany",
    lat: 52.530040,
    lng: 13.379430,
    name: 'Natural History Museum',
    food: 'rocks',
    rating: 1,
    id: '6reg1b81-082e-4823-bb8c-8562ec0413gd'
  }
  store.dispatch(saveRestaurant(data4));

  const data5 = {
    loc: "Melbourne VIC, Australia",
    lat: -37.8136276,
    lng: 144.9630576,
    name: 'Smashed Avo',
    food: 'avocado bowl',
    rating: 4,
    id: '2abd1b81-082e-4823-bb8c-8562ec0415ty'
  }
  store.dispatch(saveRestaurant(data5));

  //dispatch highlight ball haus
  store.dispatch(highlightRestaurant({
    lat: -37.8136276,
    lng: 144.9630576,
    id: '2abd1b81-082e-4823-bb8c-8562ec0415ty'
  }))

  return store;
};
