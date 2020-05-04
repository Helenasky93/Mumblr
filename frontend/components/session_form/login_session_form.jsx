
import React from 'react';
import { Link } from 'react-router-dom';


class loginSessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        console.log(this.props.errors);
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