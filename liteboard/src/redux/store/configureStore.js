import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { appRouter } from '../reducer';

export const configureStore = () => {
    const store = createStore(
        appRouter,
        compose(
            applyMiddleware(thunk, createLogger)
        )
    );
    return store;
};