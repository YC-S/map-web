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
    };
    return fetch(`http://localhost:8080/${username}/plans/${planId}`, requestOptions)
    .then(handleResponse)
}

function updatePlan(username, planId, pointsInPlan) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId, pointsInPlan}),
    };
    return fetch(`http://localhost:8080/${username}/plans/${planId}`, requestOptions)
    .then(handleResponse)
}

function createPlan(username, pointsInPlan, planTitle, city) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pointsInPlan, planTitle, city}),
    };
    return fetch(`http://localhost:8080/${username}/plans`, requestOptions)
    .then(handleResponse)
}