import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/App";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./reducers";

import { fetcheImg } from "./action";
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState()));

store.dispatch(fetcheImg());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);