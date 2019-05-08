const defaultState = { 
  currLoc: '', 
  saved: [], 
  highlighted: {}
};


const inputRestaurantReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_CURR_LOC':
      return {
        ...state,
        currLoc: action.currLoc
      }
    case 'SAVE_RESTAURANT':
      return {
        ...state,
        currLoc: '',
        saved: [...state.saved, action.data],
        
      }
    case 'REMOVE_RESTAURANT':
      return {
        ...state,
        saved: state.saved.filter(item => item.id !== action.id)
      }
      //TODO: check this
    case 'HIGHLIGHT_RESTAURANT':
      return {
        ...state,
        highlighted: action.data
      }
    default:
      return state;
  }
}

export default inputRestaurantReducer;