import handleResponse from './APIUtils';

export const PlanService = {
    getPlan,
    getPlanItems,
    updatePlan,
    createPlan,
    getPlans
}

function getPlan(planId) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://ec2-52-53-149-187.us-west-1.compute.amazonaws.com:8080/api/plans/${planId}`, requestOptions)
    .then(handleResponse)
}

function getPlanItems(planId) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://ec2-52-53-149-187.us-west-1.compute.amazonaws.com:8080/api/planItems/${planId}`, requestOptions)
    .then(handleResponse)
}

function updatePlan(user, pointsInPlan, plan) {
    const planItems = pointsInPlan.map(point => point.id);
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            user: user, 
            id: plan.id, 
            planItems: planItems.join(","),
            planTitle: plan.planTitle,
            city: plan.city
        }),
    };
    return fetch(`http://ec2-52-53-149-187.us-west-1.compute.amazonaws.com:8080/api/addPlan`, requestOptions)
    .then(handleResponse)
}

function createPlan(user, pointsInPlan, planTitle, city) {
    const planItems = pointsInPlan.map(point => point.id);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            user, 
            planItems: planItems.join(","), 
            planTitle, 
            city}),
    };
    return fetch(`http://ec2-52-53-149-187.us-west-1.compute.amazonaws.com:8080/api/addPlan/${user.id}`, requestOptions)
    .then(handleResponse)
}

function getPlans(user) {
    return fetch(`http://ec2-52-53-149-187.us-west-1.compute.amazonaws.com:8080/api/getPlans/${user.id}`)
    .then(handleResponse)
}