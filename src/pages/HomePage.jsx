import React, { Component } from 'react'

import { authenticationService } from '../_services/authentication.service';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
        };
    }

    componentDidMount() {
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div>
                <h1>Hi {currentUser.userName}!</h1>
                <p>You're logged in</p>
            </div>
        );
    }
}

export default HomePage;