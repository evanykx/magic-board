import React, { Component } from 'react';
import './login.scss';
import { login } from '../../redux/action/userActions';



class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            rememberme: false
        }
    }

    onUsernameChange = (evt) => {
        this.setState({
            username: evt.target.value,
            ...this.state
        });
    }
    
    onPasswordChange = (evt) => {
        this.setState({
            password: evt.target.value,
            ...this.state
        });
    }

    onRememberMeChecked = (evt) => {
        this.setState({
            password: evt.target.checked,
            ...this.state
        });
    }

    onSubmitClick = (evt) => {
        // Call api login here
        // TODO
        login(this.state);
        this.props.history.push('/')
    }

    render () {
        return (
            <div className="container form-container">
                <form>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" onChange={this.onUsernameChange} placeholder="Email address" required autoFocus />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" id="inputPassword" className="form-control" onChange={this.onPasswordChange} placeholder="Password" required />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="rememberme" onChange={this.onRememberMeChecked} />
                        <label className="form-check-label" htmlFor="rememberme">Remember me!</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onSubmitClick}>Sign in</button>
                    <div className="text-center">
                        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserLogin;