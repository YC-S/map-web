import handleResponse from './APIUtils';

export const PlanService = {
    getPlan,
    getPlanItems,
    updatePlan,
    createPlan
}

function getPlan(planId) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://localhost:8080/plans/${planId}`, requestOptions)
    .then(handleResponse)
}

function getPlanItems(planId) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://localhost:8080/planItems/${planId}`, requestOptions)
    .then(handleResponse)
}

function updatePlan(username, planId, pointsInPlan) {
    const planItems = pointsInPlan.map(point => point.id);
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, 
            id: planId, 
            planItems}),
    };
    return fetch(`http://localhost:8080/api/addPlan`, requestOptions)
    .then(handleResponse)
}

function createPlan(username, pointsInPlan, planTitle, city, privacy) {
    const planItems = pointsInPlan.map(point => point.id);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, planItems, planTitle, city, privacy}),
    };
    return fetch(`http://localhost:8080/api/addPlan`, requestOptions)
    .then(handleResponse)
}