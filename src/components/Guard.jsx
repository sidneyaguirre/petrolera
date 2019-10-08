import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../_services/authentication.service';

export const Guard = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
        else {
            // Admin action forbbiden by an user            
            if (!(currentUser.role === "admin")) {
                return <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
            }
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)