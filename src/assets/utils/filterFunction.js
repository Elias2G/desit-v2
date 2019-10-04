export const filterData = (bodyData, value, type) => {
  let newSearchObject = {
    ...bodyData.filter,
  }

  if(bodyData.filter[type] === undefined) {
    newSearchObject = {
      [type]: value,
      ...newSearchObject
    }
  } else {
    if(value === null) {
      newSearchObject = {
        ...newSearchObject
      }
      delete newSearchObject[type];
    } else {
      newSearchObject[type] = value;
    }
  }
  return newSearchObject;
}
