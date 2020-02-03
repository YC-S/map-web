import handleResponse from './APIUtils';

export const SearchService = {
    getCategories,
    getSearchResult,
    fetchInitialPlaces
}

function fetchInitialPlaces() {
    return fetch('http://ec2-52-53-149-187.us-west-1.compute.amazonaws.com:8080/landing')
    .then(handleResponse)
}

// note: searchTerm needs to be a string without space
function getCategories(searchTerm) {
    searchTerm = encodeURIComponent(searchTerm);
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`http://ec2-52-53-149-187.us-west-1.compute.amazonaws.com:8080/search/categories/${searchTerm}`, requestOptions)
    .then(handleResponse)
}

function getSearchResult(searchTerm) {
    searchTerm = encodeURIComponent(searchTerm);
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`http://ec2-52-53-149-187.us-west-1.compute.amazonaws.com:8080/search?keyword=${searchTerm}`, requestOptions)
    .then(handleResponse)
}