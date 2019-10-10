import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../_helpers/handle-response';
import '../_config/config';
import { jwtencode, jwtdecode } from './../_helpers/jwt'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    
    get currentUserValue () {         
        var decode = jwtdecode(localStorage.currentUser);
        return decode.user
    }
};

function login(userName, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, password })
    };

    // url: https://ing-web-project.herokuapp.com/login
    return fetch(`https://ing-web-project.herokuapp.com/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let encode = jwtencode(user)
            localStorage.setItem('currentUser', JSON.stringify(encode));
            currentUserSubject.next(user);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}
