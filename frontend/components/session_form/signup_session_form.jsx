import React from 'react';
import {Link} from 'react-router-dom';

class signupSessionForm extends React.Component {

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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        // console.log(this.props.errors);
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    render() {
        return (
            <div>
                 
                <p>{this.props.navLink}</p>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <div>
                        <br/>
                        <label>Email:
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                             />
                        </label>
                        <label>Username:
                            <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                             />
                        </label>
                        <label>Password:
                            <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                             />
                        </label>
                        <br/>
                        <input type="submit" value={this.props.formType}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default signupSessionForm;