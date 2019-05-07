const defaultState = { text: '', isDescending: true }

const restaurantListFiltersReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    };
    case 'TOGGLE_SORT':
    return {
        ...state,
        isDescending: !state.isDescending
    };
    default:
      return state;
  }
}

export default restaurantListFiltersReducer;