const defaultState = { currLoc: '', saved: []};

const inputAddressReducer = (state = defaultState, action) => {
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
        saved: [...state.saved, action.data]
      }

    default:
      return state;
  }
}

export default inputAddressReducer;