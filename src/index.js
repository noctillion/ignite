import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// redux
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const store = createStore(
  rootReducer,
composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);
