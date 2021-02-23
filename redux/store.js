import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import weatherReducer from './reducers/weatherReducer';
import searchReducer from './reducers/searchReducer';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  weather: weatherReducer,
  search: searchReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  }
  return combinedReducer(state, action);
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware, promise]));
};

export const wrapper = createWrapper(initStore);
