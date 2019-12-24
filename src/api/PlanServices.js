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
    return fetch(`http://localhost:8080/api/plans/${planId}`, requestOptions)
    .then(handleResponse)
}

function getPlanItems(planId) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://localhost:8080/api/planItems/${planId}`, requestOptions)
    .then(handleResponse)
}

function updatePlan(pointsInPlan, plan) {
    const planItems = pointsInPlan.map(point => point.id);
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            user: plan.user, 
            id: plan.id, 
            planItems: planItems.join(","),
            planTitle: plan.planTitle,
            city: plan.city
        }),
    };
    return fetch(`http://localhost:8080/api/addPlan`, requestOptions)
    .then(handleResponse)
}

function createPlan(user, pointsInPlan, planTitle, city) {
    const planItems = pointsInPlan.map(point => point.id);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, 
            planItems: planItems.join(","), 
            planTitle, 
            city}),
    };
    return fetch(`http://localhost:8080/api/addPlan`, requestOptions)
    .then(handleResponse)
}