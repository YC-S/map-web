import handleResponse from './APIUtils';

export const ProfileService = {
    getProfile,
    getProfileImage,
    updateProfile,
}

function getProfile(user) {
    const profileId = user.cores_profile.id;
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://localhost:8080/api/profile/${profileId}`, requestOptions)
    .then(handleResponse)
}

function getProfileImage(user) {
    const profileId = user.cores_profile.id;
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://localhost:8080/api/profileImage/${profileId}`, requestOptions)
    .then(handleResponse)
}

function updateProfile(firstName, lastName, description, profileImage, profile) {
    const formData  = new FormData();
    formData.append("json", JSON.stringify({ 
        id: profile.id,
        firstName, 
        lastName,  
        description, 
        user: profile.user,
    }));
    formData.append("file", profileImage);
    const requestOptions = {
        method: 'POST',
        //headers: { 'Content-Type': 'multipart/form-data' },
        body: formData,
    };
    return fetch(`http://localhost:8080/api/saveProfile`, requestOptions)
    .then(handleResponse)
}