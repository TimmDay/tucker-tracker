import uuid from "uuid";

export const updateCurrLoc = ({loc='',lat='',lng=''} = {}) => {
  const currLoc = { loc, lat, lng }
  return ({
    type: 'UPDATE_CURR_LOC',
    currLoc
  })
}

export const saveRestaurant = (data = {}) => {
  const { loc = '', lat = '', lng = '', name = '', food = '', rating = 0 } = data;
  data = { ...data, id: uuid() }
  return ({
    type: 'SAVE_RESTAURANT',
    data
  })
}

export const removeRestaurant = ({id} = {}) => ({
  type: 'REMOVE_RESTAURANT',
  id
})

export const highlightRestaurant = (data = {}) => ({
  type: 'HIGHLIGHT_RESTAURANT',
  data
})