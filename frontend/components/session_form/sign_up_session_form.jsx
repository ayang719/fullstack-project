import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // componentDidMount() {
    //     this.props.clearErrors();
    // }

    componentWillUnmount() {
        this.props.clearErrors();
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
    
        return (
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
            <div className='login-page'>
                <div className="login-form-container">
                    <h3 className="login-form-header">Sign Up for Kelp</h3>
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <br />
                        <h3 className="switcher">Already on Kelp? {this.props.navLink}</h3>
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <label>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                    placeholder='Email'
                                />
                            </label>
                            <br/>
                            <label>
                                <input type="text"
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                    className="login-input"
                                    placeholder='Name'
                                />
                            </label>
                            <br />
                            <label>
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    placeholder='Password'
                                />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value="Sign Up!" />
                        </div>
                    </form>
                </div>
                <div className='login-image'>
                    <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" />
                </div>
            </div>
        );
    }
}

export default (SignUpSessionForm);
