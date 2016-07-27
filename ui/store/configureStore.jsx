import { createStore } from 'redux'
import rootReducer from '../reducers'

export default () => {
  const store = createStore(rootReducer)
  
if (module.hot) {
    module.hot.accept('../reducers', () => {
      System.import('../reducers').then(nextRootReducer =>
        store.replaceReducer(nextRootReducer.default)
      )
    })
  }

  return store
}
