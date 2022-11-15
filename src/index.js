require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';//it will provide store to App and nested components
import {store} from './store';
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);