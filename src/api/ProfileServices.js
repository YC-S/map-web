import handleResponse from './APIUtils';

export const ProfileService = {
    getProfile,
    getProfileImage,
    updateProfile,
}

function getProfile(profileId) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://localhost:8080/api/profile/${profileId}`, requestOptions)
    .then(handleResponse)
}

function getProfileImage(profileId) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://localhost:8080/api/profileImage/${profileId}`, requestOptions)
    .then(response => response.blob())
    .then(blob => {
        return URL.createObjectURL(blob);
    })
}

function updateProfile(firstName, lastName, description, profileImage, profile) {
    const formData  = new FormData();
    const profileString = JSON.stringify({ 
        id: profile.id,
        firstName, 
        lastName,  
        description, 
        user: profile.user,
    });
    const parts = [
        new Blob([profileString], {type: 'application/json'}),
        'same way as you do with blob',
        new Uint16Array([33])
      ];
    const file = new File(parts, 'profile.json', {
        lastModified: new Date(0), // optional - default = now
        type: "application/json" // optional - default = ''
    });
    console.log(file);
    formData.append("json", file);
    formData.append("file", profileImage);
    const requestOptions = {
        method: 'POST',
        //headers: { 'Content-Type': 'multipart/form-data' },
        body: formData,
    };
    //delete requestOptions.headers['Content-Type'];
    return fetch(`http://localhost:8080/api/saveProfile`, requestOptions)
    .then(handleResponse)
}