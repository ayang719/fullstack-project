import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';
import * as APIUtil from './actions/session_actions'
import { fetchBusinesses, fetchBusiness } from './actions/business_actions';
import {fetchReview} from './actions/review_actions';
import {createReview} from './util/review_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.dispatch = store.dispatch
    window.getState = store.getState;
    window.fetchBusiness = fetchBusiness;
    window.fetchBusinesses = fetchBusinesses;
    window.fetchReview = fetchReview;
    window.createReview = createReview;
    const root = document.getElementById('root');

    ReactDom.render(<Root store={store}/>, root);


})