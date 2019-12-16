

export const userService = {
    login,
    logout,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:8080/users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            //if (user) {
                console.log("user is set");
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                // for later authorization 
                //user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('username', username);
            //}

            return user;
        })
        
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('username');
}

function handleResponse(response) {
    return response.text().then(text => {
        console.log(response);
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}