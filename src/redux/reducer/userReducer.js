import {
  GET_USER
} from '../actions/type';

const initState = {
  userList: null
}

export default function(state = initState, action) {
  switch(action.type) {
    case GET_USER:
      return action.data
    default:
      return state;
  }
}
