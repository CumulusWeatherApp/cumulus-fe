import React, { Component } from 'react';
import { signInUser, signUpUser } from './weather-api.js';

export default class Home extends Component {
    // set state
    state = {
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: ''
    }

    // add handleSignInClick
    handleSignInClick = async (e) => {
        e.preventDefault();

        // pass user info into signInUser function
        const user = await signInUser({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        })

        // handle user token
        this.props.handleToken(user.body.token)


        // reroute user to favorites list page
        this.props.history.push('/SearchPage')
    }

    // add handleSignInEmailChange
    handleSignInEmailChange = (e) => {
        this.setState({ signInEmail: e.target.value })
    }

    // add handleSignInPasswordChange
    handleSignInPasswordChange = (e) => {
        this.setState({ signInPassword: e.target.value })
    }

    // add handleSignUpClick
    handleSignUpClick = async (e) => {
        e.preventDefault();

        // pass user info into signUpUser function
        const user = await signUpUser({
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        })

        // handle user token
        this.props.handleToken(user.body.token)

        // reroute user to favorites list page
        this.props.history.push('/SearchPage')
    }

    // add handleSignUpEmailChange
    handleSignUpEmailChange = (e) => {
        this.setState({ signUpEmail: e.target.value })
    }

    // add handleSignUpPasswordChange
    handleSignUpPasswordChange = (e) => {
        this.setState({ signUpPassword: e.target.value })
    }


    render() {
        return (
            <div className="Home-Page">
                <h1 className="home-title">
                    Cumulus
                </h1>

                <h3>Welcome to your favorite weather app you've yet to discover <span className="cumulus">cumulus</span>. A not-so-average, visually stunning weather application for your everyday needs.</h3>
                <div className="auth-forms">
                    <form className="Sign-In" onSubmit={this.handleSignInClick}>
                        <h3>Sign In</h3>
                        <div className="email-password">
                            <label>
                                Email:
                                <input onChange={this.handleSignInEmailChange} type="text" value={this.state.signInEmail} />
                            </label>
                            <br/>
                            <label>
                                Password:
                                <input onChange={this.handleSignInPasswordChange} type="password" value={this.state.signInPassword} />
                            </label>
                        <button>Sign In!</button>
                        </div>
                    </form>

                    <form className="Sign-Up" onSubmit={this.handleSignUpClick}>
                        <h3>Sign Up</h3>

                        <div className="email-password">
                            <label>
                                Email:
                                <input onChange={this.handleSignUpEmailChange} type="text" value={this.state.signUpEmail} />
                            </label>
                            <br/>
                            <label>
                                Password:
                                <input onChange={this.handleSignUpPasswordChange} type="password" value={this.state.signUpPassword} />
                            </label>

                            <button>Sign Up!</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
