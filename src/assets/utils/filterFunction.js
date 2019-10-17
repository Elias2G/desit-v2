export const filterData = (bodyData, newFilterObj) => {
  // holds the old filter data
  let newSearchObject = bodyData.filter;
  // get the keys inside the passed object
  const objKeys = Object.keys(newFilterObj);

  for(let i = 0; i < objKeys.length; i++) {
    // checks if the object key already exist inside the old object and if the newValue passed is not null
    if(bodyData.filter[objKeys[i]] === undefined && newFilterObj[objKeys[i]] !== null) {
      newSearchObject = {
        // sets the
        [objKeys[i]]: newFilterObj[objKeys[i]],
        ...newSearchObject,
      }
    } else {
      if( newFilterObj[objKeys[i]] === null ) {
        delete newSearchObject[objKeys[i]];
      } else {
        newSearchObject[objKeys[i]] = newFilterObj[objKeys[i]]
      }
    }
  }
  return newSearchObject;
}

export const createReduxFilterObject = (data) => {
  // if the parameter data is a empty object quit the function and return null as value
  if(Object.entries(data).length === 0 && data.constructor === Object) { return null }

  let filterSetting = Object.keys(data);
  let newFilterObject;

  for(let i = 0; i < filterSetting.length; i++) {
    //extends the newFilterObject for every value in filterSetting with the value key and the corresponding value itself
    newFilterObject = {
      ...newFilterObject,
      [filterSetting[i]]: {
        value: data[filterSetting[i]],
      }
    }
  }
  return newFilterObject;
}
