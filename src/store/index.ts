import { combineReducers, createStore, applyMiddleware } from 'redux';
import products from './product';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  products,
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middlewares = [thunk];
  if (process.env.NODE_ENV === 'development') {
    // é necessário fazer um require do redux-logger somente quando estamos em modo de desenvolvimento
    // por isso estamos movendo o require para dentro do if
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    middlewares.push(require('redux-logger').default);
  }

  return createStore(rootReducer, applyMiddleware(...middlewares));
}