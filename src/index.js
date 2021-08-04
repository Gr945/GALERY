import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {createStore} from 'redux'
import imageReducer from './Redux/imageReducer'

const store = createStore(imageReducer, composeWithDevTools())

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
