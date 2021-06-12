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


// CREATE TABLE "feedback" (
//     "id" serial primary key,
//     "feeling" INT not null,
//     "understanding" INT not null,
//     "support" INT not null,
//     "comments" text,
//     "flagged" boolean default false,
//     "date" date not null default CURRENT_DATE
//   ); 


const feedback = (state = {
        // feeling: 0,
        // understanding: 0,
        // support: 0,
        // comments: ''
    }, action) => {
        switch (action.type) {
            // case of add a pizza to cart
            case 'ADD_FEELING':
                return {
                   ...state, feeling: action.payload
                };
            case 'ADD_UNDERSTANDING':
                return {
                    ...state, understanding: action.payload
                };
            case 'ADD_SUPPORT':
                return {
                    ...state, support: action.payload
                };
            case 'ADD_COMMENTS':
                return {
                   ...state,  comments: action.payload
                };
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