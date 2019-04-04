// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'

// // Root combining all reducers (./reducers/index.js)
// import rootReducer from './Reducers'

// import throttle from 'lodash/throttle'

// import { loadState, saveState } from './localStorage'

// const persistedState = loadState()

// const middleware = [thunk]

// const store = createStore(
//   rootReducer,
//   persistedState,

//   compose(
//     applyMiddleware(...middleware)
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )

// store.subscribe(
//   throttle(() => {
//     saveState({
//       auth: store.getState().auth
//     })
//   }, 1000)
// )

// export default store
