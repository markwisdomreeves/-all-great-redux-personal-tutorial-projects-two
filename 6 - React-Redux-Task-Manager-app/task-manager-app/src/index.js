import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// we import the createStore to create a store
import { createStore } from 'redux';
// we import the Provider
import { Provider } from 'react-redux';
// we import the reducer function from the reducer file
import tasks from "./ReduxContainer/reducers";


// we are creating our store
const store = createStore(tasks);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
