import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";

import RickAndMorty from "./reducer/reducer"

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <Provider store={ RickAndMorty }>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);
reportWebVitals();
