import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }
    // componentDidMount() {
    //     this.props.clearErrors();
    // }
    componentWillUnmount() {
        this.props.clearErrors();
    }

    demoLogin(e) {
        e.preventDefault();
        const demoUser = {email: "kelpman@gmail.com", password: "password"};
        this.props.processForm(demoUser);
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
            <div>
                <header className="yelp-header">
                    <a className='kelp-logo' href="/">
                        <img src="../../../app/assets/images/coollogo_com-31684455.png" />
                        <img className='logo-image' src="https://divineeventslv.com/wp-content/uploads/2018/04/yelp-logo-27.png" />
                    </a>
                </header>
                <div className='login-page'>
                    <div className="login-form-container">
                    <h3 className="login-form-header">Log In to Kelp</h3>
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <br />
                            <h3 className="switcher">New to Kelp? {this.props.navLink}</h3>
                            <button className='demo-button' onClick={this.demoLogin}>Log In with Demo User</button>
                            <fieldset className="or-line">
                                <legend align="center">OR</legend>
                            </fieldset>
                            {this.renderErrors()}
                            <div className="login-form">
                                <br />
                                <label>
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="login-input"
                                        placeholder="Email"
                                    />
                                </label>
                                <br />
                                <label>
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                        placeholder="Password"
                                    />
                                </label>
                                <br />
                                <input className="session-submit" type="submit" value='Log In' />
                            </div>
                        </form>
                    </div>
                    <div className='login-image'>
                        <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SessionForm);
