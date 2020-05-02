import React from 'react';
import GreetingContainer from './components/greeting/greeting_container'
import {AuthRoute, ProtectedRoute} from './util/route_util'
import LoginFormContainer from './components/session_form/login_form_container'
import SignupFormContainer from './components/session_form/signup_form_container'


const App = () => {
    return (
        <div>
            <GreetingContainer />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    );
};

export default App;