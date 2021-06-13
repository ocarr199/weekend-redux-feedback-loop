import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {
    Provider
} from 'react-redux'
import logger from 'redux-logger';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';




// holding state of feedback data
const feedback = (state = {}, action) => {
    switch (action.type) {
        //   feeling key added inside state
        case 'ADD_FEELING':
            return {
                // show the rest of state and new feeling key
                ...state, feeling: action.payload
            };
            // understanding key added
        case 'ADD_UNDERSTANDING':
            return {
                ...state, understanding: action.payload
            };
            // support key
        case 'ADD_SUPPORT':
            return {
                ...state, support: action.payload
            };
            // comments key
        case 'ADD_COMMENTS':
            return {
                ...state, comments: action.payload
            };
            // state becomes an empty object again
        case 'FEEDBACK_CONFIRMED':
            return {}
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger)
);





ReactDOM.render( <
        Provider store = {
            reduxStore
        } > < App / > < /Provider>  , document.getElementById('root'));
        registerServiceWorker();