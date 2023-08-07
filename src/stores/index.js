import {configureStore} from '@reduxjs/toolkit'

import reducers from '../reducers'

export const createStore = (state) => {
  return configureStore({
    reducer: reducers,
    preloadedState: state,
  })
}