import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger] // array of middlewares, we only have one

/// ...midlewares spreads array into applyMiddleware arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store