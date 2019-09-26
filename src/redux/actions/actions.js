import axios from 'axios';

function determine(type, data) {
  return {
    type,
    data
  }
}

function simpleFetch(type, url, config) {
  return dispatch => (
    fetch(url, config)
    .then(response => response.json())
    .then(response => dispatch(determine(type, response)))
    .catch(e => {
      return;
    })
  )
}

// function fetch(type, url, config) {
//   return dispatch =>
//   axios.get(url, config)
//   .then(response => {
//     dispatch(determine(type, response.data));
//   })
//   .catch(e => {
//     return;
//   })
// }

export {
  simpleFetch,
  // fetch,
  determine,
}
