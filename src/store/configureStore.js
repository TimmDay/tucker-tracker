import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import inputAddressReducer from '../reducers/inputAddress';
import restaurantListFiltersReducer from '../reducers/restaurantListFilters';
import { saveRestaurant } from '../actions/inputAddress'; //TODO: testing

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      inputAddressReducer,
      restaurantListFiltersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  // TESTING: TODO:
  const data1 = {
    loc: "2202 E 49th St, Tulsa, OK 74105, USA",
    lat: 36.0919998,
    lng: -95.9608305,
    name: 'Tasty Clams',
    food: 'chicken',
    rating: 3,
    id: '3abd1b81-082e-4823-bb8c-8562ec01257e'
  }
  store.dispatch(saveRestaurant(data1))
  const data2 = {
    loc: "Melbourne VIC, Australia",
    lat: -37.8136276,
    lng: 144.9630576,
    name: 'Avo go',
    food: 'avo',
    rating: 4,
    id: '7abd1b81-082e-4823-bb8c-8562ec0415gr'
  }
  store.dispatch(saveRestaurant(data2));

  return store;
};
