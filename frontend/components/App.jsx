import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route } from 'react-router-dom'
import {AuthRoute} from '../util/route_util';

const App = () => (
    <div>
        <GreetingContainer/>
        <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer}/>
        <div className='footer-div'>
            <footer className="footer">
                <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/573fa19c8435/assets/img/structural/footer_cityscape.png"/>
            </footer>
        </div>
    </div>

);

export default App;