import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';
import * as APIUtil from './actions/session_actions'
import { fetchBusinesses, fetchBusiness } from './actions/business_actions';

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
    window.getState = store.getState;
    window.fetchBusiness = fetchBusiness;
    window.fetchBusinesses = fetchBusinesses;
    const root = document.getElementById('root');

    ReactDom.render(<Root store={store}/>, root);


})