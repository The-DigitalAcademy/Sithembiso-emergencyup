import {NAME_ADD, NAME_REMOVE, THEME_CHANGE, RESET_DATA} from './action'

const appReducer = (state, action) => {
  switch (action.type) {
    case NAME_ADD:
      return {
        ...state,
        name: action.payload,
      }

    case NAME_REMOVE:
      return {
        ...state,
        name: '',
      }

    case THEME_CHANGE:
      return {
        ...state,
        theme: action.payload,
      }

    case RESET_DATA:
      return {
        name: '',
        theme: 'light',
        categories: [],
        expressions: [],
      }

    default:
      return {
        ...state,
      }
  }
}

export default appReducer