import {useReducer, useEffect} from 'react'
import appContext from './appContext'
import appReducer from './appReducer'
import {NAME_ADD, NAME_REMOVE, THEME_CHANGE, RESET_DATA} from './action'
import storage from '../helper/storage'

const AppState = ({children}) => {
  // initial state
  let initialState = {
    name: '',
    theme: storage.exist('theme') ? storage.get('theme') : 'light',
    categories: [],
    expressions: [],
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    initialState.name = storage.get('name')
    initialState.theme = storage.get('theme')
    console.log(state)
  })

  // add name
  const name_add = (name) => {
    dispatch({type: NAME_ADD, payload: name})
  }

  // remove name
  const name_remove = () => {
    dispatch({type: NAME_REMOVE})
  }

  // change theme
  const change_theme = (theme) => {
    dispatch({type: THEME_CHANGE, payload: theme})
  }

  // reset data
  const reset_data = () => {
    dispatch({type: RESET_DATA})
  }

  return (
    <appContext.Provider
      value={{
        state,
        name: state.name,
        name_add,
        name_remove,
        theme: state.theme,
        change_theme,
        reset_data,
      }}
    >
      {children}
    </appContext.Provider>
  )
}
export default AppState