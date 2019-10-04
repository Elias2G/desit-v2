import {
  FETCH_PORTFOLIO_LIST,
  SET_PORTFOLIO_LIST_CONFIG,
  SET_PORTFOLIO_LIST_FILTER,
  ACTIVE_VIEW_PORTFOLIO,
  FETCH_PORTFOLIO_LATEST,
} from '../actions/type';

const initState = {
  latest: null,
  portfolioList: null,
  total: null,
  loadFromPortfolioList: {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      filter: { published: true },
      limit: 5,
      skip: 0,
      populate: 1, // resolve linked collection items
      sort: {_created: -1}
    })
  },
  thisPortfolio: null,
  filterBar: {
    search: {
      value: null,
    },
    category: {
      value: null,
      select: ['Design', 'Wissenswertes', 'Technologie']
    },
  }
}

export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_PORTFOLIO_LIST:
      return {...state, portfolioList: action.data.entries, total: action.data.total }
    case SET_PORTFOLIO_LIST_CONFIG:
      return {...state, loadFromPortfolioList: action.data }
    case ACTIVE_VIEW_PORTFOLIO:
      return {...state, thisPortfolio: action.data }
    case FETCH_PORTFOLIO_LATEST:
      return {
        ...state,
      latest: action.data.entries,
      total: action.data.total
    }
    case SET_PORTFOLIO_LIST_FILTER:
      return {
        ...state,
      filterBar: {
        ...state.filterBar,
        category: {
          ...state.filterBar.category,
          value: action.data,
        }
      }
    }
    default:
      return state;
  }
}
