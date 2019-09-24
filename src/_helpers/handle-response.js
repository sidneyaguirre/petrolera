import { authenticationService } from '../_services/authentication.service';

export function handleResponse(response) {
    console.log(response);

    return response.text().then(text => {
        const data = text && JSON.parse(text); //is the api's response    
        console.log(data);
        console.log(data.response.user);
        
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authenticationService.logout();
                //location.reload(true);
            }
            const error = (data && data.response.msg) || response.statusText;
            return Promise.reject(error);
        }

        return data.response.user;
    });
}