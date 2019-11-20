import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import Landing from './components/landing';
import Experience from "./components/experience";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Experience/>
, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
