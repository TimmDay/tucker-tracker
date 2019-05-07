export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

export const toggleSort = () => ({
  type: 'TOGGLE_SORT',
});