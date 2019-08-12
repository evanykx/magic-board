import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'jquery';
import 'popper.js';
import 'bootstrap';

import './asset/css/index.css';
import './asset/bootstrap/bootstrap.min.css';
import './asset/bootstrap/bootstrap-grid.min.css';
import './asset/bootstrap/bootstrap-reboot.min.css';
import './asset/font-awesome/css/font-awesome.min.css';

import * as serviceWorker from './serviceWorker';
import { configureStore } from './redux/store/configureStore';
import AppRouter from './router';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <AppRouter />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
