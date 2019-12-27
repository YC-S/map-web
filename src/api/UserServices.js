import handleResponse from './APIUtils';

export const userService = {
    login,
    logout,
    register,
    getProfileImg
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:8080/api/users/login`, requestOptions)
        .then(handleResponseUser)
        .then((user) => {
            // login successful if there's a user in the response
            if (user) {
                console.log("user is logged in");
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                // for later authorization 
                //user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        })
        
}

function logout() {
    const requestOptions = {
        method: 'POST',
    };
    return fetch(`http://localhost:8080/api/users/logout`, requestOptions)
        .then(handleResponse)
        .then(() => {
            localStorage.removeItem('user');
        })
        .catch(err => console.log(err));
        // remove user from local storage 
}

function register(username, password, email) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email })
    };
    return fetch(`http://localhost:8080/api/users/register`, requestOptions)
        .then(handleResponseUser)
        .then((user) => {
            // login successful if there's a user in the response
            if (user) {
                console.log("user is registered and logged in");
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                // for later authorization 
                //user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        })
}

function getProfileImg(profile_id) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://localhost:8080/api/profileImage/${profile_id}`, requestOptions)
    .then(handleResponse)
}

function handleResponseUser(response) {
    return response.text().then(text => {
        //console.log(response);
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }
            const error = (data && data.message) || response.statusText || response.status + " error occured!";
            return Promise.reject(error);
        }
        return data;
    });
}