const selectRestaurants = (restaurants, filters={} ) => {
  const { isDescending=false, text=''} = filters;

  return restaurants
  .filter(restaurant => {
    return restaurant.name.toLowerCase().includes(text.toLowerCase())
  })
  .sort((a,b) => {
    if (isDescending) {
      return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
    } else {
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    }
  })
};

export default selectRestaurants;