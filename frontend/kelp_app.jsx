import React from 'react';
import ReactDom from 'react-dom';
import * as sessionApiUtil from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDom.render(<h1>please</h1>, root);

    window.login = sessionApiUtil.login;
    window.signup = sessionApiUtil.signup;
    window.logout = sessionApiUtil.logout;
})