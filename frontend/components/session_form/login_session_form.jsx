
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';


class loginSessionForm extends React.Component {

    constructor(props) {
        super(props);
        if(props.location.state && props.location.state.demo) {
            this.state = {
                username: 'demo',
                password: 'demodemo',
                email: 'demo@mail.com'
            }
        } else {
            this.state = {
                username:'',
                password: '',
                email: ''
            };

        }
             
             console.log(this.state);   
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {

        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    };
    render() {
        return (
            <div className='loginFormDiv'>
                {/* <p>{this.props.navLink}</p> */}
                <form className='loginForm' onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                   
                       
                        <label>
                            <input
                                type="text"
                                id='usernameLogin'
                                placeholder='username'
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <label>
                            <input
                                type="password"
                                id='passwordLogin'
                                placeholder='password'
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                    
                    <button className='loginButton'>{this.props.formType}</button>
                   
                </form>
            </div>
        )
    };
};

export default loginSessionForm;