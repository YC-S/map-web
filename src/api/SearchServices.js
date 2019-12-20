import handleResponse from './APIUtils';

export const SearchService = {
    getCategories,
    getSearchResult
}

// note: searchTerm needs to be a string without space
function getCategories(searchTerm) {
    searchTerm = encodeURIComponent(searchTerm);
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`http://localhost:8080/search/categories/${searchTerm}`, requestOptions)
    .then(handleResponse)
}

function getSearchResult(searchTerm) {
    searchTerm = encodeURIComponent(searchTerm);
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`http://localhost:8080/search/results/${searchTerm}`, requestOptions)
    .then(handleResponse)
}