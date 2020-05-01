import React from 'react';
import GreetingContainer from './components/greeting/greeting_container'
import {AuthRoute, ProtectedRoute} from './util/route_util'
import LoginFormContainer from './components/session_form/login_form_container'
import SignupFormContainer from './components/session_form/signup_session_form'


const App = () => {
    return (
        <div>
            <h1>Mumblr</h1>
            <GreetingContainer />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    );
};

export default App;