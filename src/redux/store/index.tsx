import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducers from '../reducers';

const createBrowserHistory = require('history').createBrowserHistory;
const history = createBrowserHistory();
const rootReducer = combineReducers({
  ...reducers,
  router: connectRouter(history)
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(initialState?: AppState) {
  const middleware = [thunk, routerMiddleware(history)];

  const enhancers: any = [];
  const windowIfDefined =
    typeof window === 'undefined' ? null : (window as any);
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}

export { history };

// export type AppState = ReturnType<typeof rootReducer>;
