import handleResponse from './APIUtils';

export const PlanService = {
    getPlan,
    updatePlan,
    createPlan
}

function getPlan(username, planId) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
    };
    return fetch(`http://localhost:8080/${username}/plans/${planId}`, requestOptions)
    .then(handleResponse)
}

function updatePlan(username, planId, pointsInPlan) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, planId, pointsInPlan}),
    };
    return fetch(`http://localhost:8080/${username}/plans/${planId}`, requestOptions)
    .then(handleResponse)
}

function createPlan(username, pointsInPlan, planTitle, city, privacy) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, pointsInPlan, planTitle, city, privacy}),
    };
    return fetch(`http://localhost:8080/${username}/plans`, requestOptions)
    .then(handleResponse)
}