import { connect } from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {login} from '../../actions/session_actions';
import SessionForm from './login_session_form';
import {clearErrors} from '../../actions/session_actions'

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link className='signup-link' to="/signup">Sign up</Link>
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        processForm: user => dispatch(login(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);