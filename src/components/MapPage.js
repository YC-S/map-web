import React from 'react';
import TopNavBar from "./TopNavBar"
import Map from "./Map"
import MapSideBar from "./MapSideBar"
import * as QueryString from "query-string"
import { Switch, Icon } from 'antd';
import handleResponse from '../api/APIUtils';
import AuthorizationModal from './AuthorizationModal';
import PlaceCard from './PlaceCard';
import cloneDeep from 'lodash/cloneDeep';
import { SearchService } from '../api/SearchServices';
import { PlanService } from '../api/PlanServices';

class MapPage extends React.Component {
    constructor(props) {
        super(props);
        const params = QueryString.parse(props.location.search);
        this.state = {
            location: [parseFloat(params.lng), parseFloat(params.lat)],
            data: [],
            pointsInPlan: [],
            planId: params.plan,
            planTitle: null,
            plan: null,
            updatePlan: false,
            selectedPoint: null,
            showRoute: false,
            disableRoute: false,
            routeObj: null,
            visibleLogin: false,
            visibleRegister: false,
            popConfirmDisabled: true,
            placeCardVisible: false,
            placeCardData: null,
        }
    }

    setPlaceCardData = (data) => {
        this.setState({placeCardData: data});
        if (!this.state.placeCardVisible) {
            this.setState({placeCardVisible: true});
        }
    }

    setPlaceCardVisibility = (visible) => {
        if (this.state.placeCardVisible !== visible) {
            this.setState({placeCardVisible: visible});
        }
    }

    setPlan = (plan) => {
        this.setState({plan: plan});
    }
    setPlanId = (id) => {
        this.setState({planId: id});
    }

    setRouteObj = (routeObj) => {
        this.setState({routeObj: routeObj});
    }

    addPointsToPlan = (point, index) => {
        if (this.state.pointsInPlan.length === 5) {
            this.setState({popConfirmDisabled: false});
        } 
        let newPoint = cloneDeep(point);
        const newPlan = Array.from(this.state.pointsInPlan);
        // assign a draggableId for dragging
        newPoint.draggingId = Math.floor(Math.random() * 1000000).toString();
        if (index === -1) {
            newPlan.splice(newPlan.length, 0, newPoint);
        } else {
            newPlan.splice(index, 0, newPoint);
        }
        this.setState({pointsInPlan: newPlan, updatePlan: true});
    }

    disablePopConfirm = () => {
        this.setState({popConfirmDisabled: true});
    }

    deletePointsFromPlan = (pointIndex) => {
        const newPlan = Array.from(this.state.pointsInPlan);
        newPlan.splice(pointIndex, 1);
        this.setState({pointsInPlan: newPlan, updatePlan: true});
    }

    rearrangePointsInPlan = (destination_index, source_index, draggableId) => {
        const newPlan = Array.from(this.state.pointsInPlan);
        newPlan.splice(source_index, 1);
        let draggedPoint = null;
        this.state.pointsInPlan.forEach(point => {if (draggableId == point.draggingId) draggedPoint = point});
        newPlan.splice(destination_index, 0, draggedPoint);
        this.setState({pointsInPlan: newPlan});
        this.setState({updatePlan: true});
    }

    findPos = (array, id) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    handleRouteSwitch = (change) => {
        this.setState({showRoute: change,
        updatePlan: true});  
    }

    handleDisableRoute = () => {
        // swicth it off and disable it
        this.setState({showRoute: false, disableRoute: true});
    }

    handleEnableRoute = () => {
        this.setState({disableRoute: false});
    }

    handleHoverSearchResult = (componentData) => (e) => {
        this.setState({selectedPoint: componentData});       
    }

    setUpdatePlan = (isUpdated) => {
        this.setState({updatePlan: isUpdated});
    }

    setPlanTitle = (title) => {
        this.setState({planTitle: title});
    }

    showLogin = () => {
        this.setState({
            visibleLogin: true,
            visibleRegister: false,
        });
    }

    showRegister = () => {
        this.setState({
            visibleLogin: false,
            visibleRegister: true
        });
    }

    hideForm = () => {
        this.setState({
            visibleLogin: false,
            visibleRegister: false
        })
    }

    handleSearchPlace = (searchTerm) => {
        SearchService.getSearchResult(searchTerm)
        .then(data => {
            const newData = this.extractData(data);
            this.setState({data: newData});
        })
        .catch(error => console.log(error))
    }

    extractData = (data) => {
        console.log(data);
        return data.map(e => {
            return {
                id: e.id,
                name: e.name,
                imgURL: e.image_url,
                lat: e.coordinates.latitude,
                lng: e.coordinates.longitude,
                category: e.categories[0].title,
                location: e.location,
                display_phone: e.display_phone,
                rating: e.rating,
                is_closed: e.is_closed,
                description: e.description,
            }
        });
    }

    componentDidMount() {
        // get top recommended items in the city
        SearchService.fetchInitialPlaces()
        .then(data => {
            const newData = this.extractData(data);
            this.setState({data: newData});
        })
            //this.setState({data: data})
        .catch (error => console.log(error));

        // fetch plan based on planId
        // **************** add code here ******************
        // set planTitle & points in plan
        if (this.state.planId) {
            PlanService.getPlan(this.state.planId)
            .then(plan => {
                this.setState({plan: plan});
                this.setState({planTitle: plan.planTitle});
                PlanService.getPlanItems(this.state.planId)
                .then(data => {
                    const pointsInPlan = this.extractData(data);
                    pointsInPlan.map(point => {
                        point.draggingId = Math.floor(Math.random() * 1000000).toString();
                        return point;
                    });
                    this.setState({pointsInPlan: pointsInPlan});
                })               
            })
            .catch(err => console.log(err));
        }

    }

    render() {
        const {pointsInPlan, data, location, showRoute, selectedPoint, updatePlan, routeObj, disableRoute, planId, planTitle, plan, popConfirmDisabled, placeCardVisible, placeCardData} = this.state;       
        return (
            <div className="map-page">
                <div className="nav-bar-other">
                    <TopNavBar showLogin={this.showLogin} showRegister={this.showRegister}/>
                </div>
                <div className="map-page-main">
                    <Map data={data} pointsInPlan={pointsInPlan} location={location} showRoute={showRoute} selectedPoint={selectedPoint} updatePlan={updatePlan} setUpdatePlan={this.setUpdatePlan} setRouteObj={this.setRouteObj} />
                    <MapSideBar data={data} addPointsToPlan={this.addPointsToPlan} pointsInPlan={pointsInPlan} handleHoverSearchResult={this.handleHoverSearchResult} 
                    deletePointsFromPlan={this.deletePointsFromPlan} rearrangePointsInPlan={this.rearrangePointsInPlan} 
                    showRoute={showRoute} routeObj={routeObj} handleDisableRoute={this.handleDisableRoute} 
                    handleEnableRoute={this.handleEnableRoute} planId={planId} planTitle={planTitle} plan={plan}
                    setPlanTitle={this.setPlanTitle} showLogin={this.showLogin} popConfirmDisabled={popConfirmDisabled} 
                    disablePopConfirm={this.disablePopConfirm} handleSearchPlace={this.handleSearchPlace}
                    setPlanId={this.setPlanId} setPlan={this.setPlan} setPlaceCardData={this.setPlaceCardData}/>
                    
                    {placeCardVisible ? <PlaceCard setPlaceCardVisibility={this.setPlaceCardVisibility} placeCardVisible={placeCardVisible} placeCardData={placeCardData}/> : null}
                    <div className="show-route-container">
                        <span id="route-button-notation">Route</span>
                        <Switch id="route-switch" checkedChildren="On" unCheckedChildren="Off" checked={showRoute} onChange={this.handleRouteSwitch} disabled={disableRoute}/>
                    </div>
                </div>
                <AuthorizationModal visibleLogin={this.state.visibleLogin} visibleRegister={this.state.visibleRegister} hideForm={this.hideForm} showRegister={this.showRegister}/>
            </div>
        );
    }
}

export default MapPage;