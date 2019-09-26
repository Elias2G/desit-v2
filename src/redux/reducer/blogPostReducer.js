import { FETCH_BLOGPOSTS_LIST, SET_BLOGPOSTS_LIST_CONFIG, ACTIVE_VIEW_POST} from '../actions/type';

const initState = {
  topPost: null,
  latest: null,
  blogList: null,
  total: null,
  loadFromBlogList: {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      filter: { published: true },
      limit: 10,
      skip: 0,
      populate: 1, // resolve linked collection items
    })
  },
  thisPost: null
}

export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_BLOGPOSTS_LIST:
      return {...state, blogList: action.data.entries, total: action.data.total }
    case SET_BLOGPOSTS_LIST_CONFIG:
      return {...state, loadFromBlogList: action.data }
    case ACTIVE_VIEW_POST:
      return {...state, thisPost: action.data }
    default:
      return state;
  }
}
