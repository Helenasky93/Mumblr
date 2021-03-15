import React from 'react';
import GreetingContainer from './components/greeting/greeting_container'
import {AuthRoute, ProtectedRoute} from './util/route_util'
import LoginFormContainer from './components/session_form/login_form_container'
import SignupFormContainer from './components/session_form/signup_form_container'
import Dashboard from './components/dashboard/dashboard_container'
// import UserShowPage from './components/user_show_page/user_show_page';
import UserShowPage from './components/user_show_page/user_show_page_container';


const App = () => {
    return (
        <div>
            <GreetingContainer />
            <ProtectedRoute path='/users/:id' component={UserShowPage}/>
            <AuthRoute path="/demologin" component={LoginFormContainer} />

            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path='/' component={Dashboard}/>
        </div>
    );
};

export default App;