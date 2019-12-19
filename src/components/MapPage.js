import React from 'react';
import TopNavBar from "./TopNavBar"
import Map from "./Map"
import MapSideBar from "./MapSideBar"
import * as QueryString from "query-string"
import { Switch, Icon } from 'antd';
import handleResponse from '../api/APIUtils';
import AuthorizationModal from './AuthorizationModal';

class MapPage extends React.Component {
    constructor(props) {
        super(props);
        const params = QueryString.parse(props.location.search);
        this.state = {
            location: [parseFloat(params.lng), parseFloat(params.lat)],
            data: [
                // {
                //     id: 1,
                //     lng: -122.335167,
                //     lat:  47.608013,
                //     imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc p, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
                // },
                // {
                //     id: 2,
                //     lng: -122.325167,
                //     lat:  47.608013,
                //     imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s",
                //     description: 'Lorem ipsum ',
                // },
                // {
                //     id: 3,
                //     lng: -122.345167,
                //     lat:  47.628013,
                //     imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
                // },
                // {
                //     id: 4,
                //     lng: -122.365167,
                //     lat:  47.618013,
                //     imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
                // },
                // {
                //     id: 5,
                //     lng: -122.345167,
                //     lat:  47.598013,
                //     imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
                // },
            ],
            pointsInPlan: [],
            planId: params.plan,
            planTitle: null,
            updatePlan: false,
            selectedPoint: null,
            showRoute: false,
            disableRoute: false,
            routeObj: null,
            visibleLogin: false,
            visibleRegister: false,
            popConfirmDisabled: true
        }
    }
    

    setRouteObj = (routeObj) => {
        this.setState({routeObj: routeObj});
    }

    addPointsToPlan = (point) => {
        if (this.state.pointsInPlan.length === 5) {
            this.setState({popConfirmDisabled: false});
        } 
        this.setState(prevState => ({pointsInPlan: [...prevState.pointsInPlan, point],
            updatePlan: true}));
    }

    disablePopConfirm = () => {
        this.setState({popConfirmDisabled: true});
    }

    deletePointsFromPlan = (pointId) => {
        this.setState(prevState => ({pointsInPlan: [...(prevState.pointsInPlan.filter(point => {return point.id != pointId}))],
            updatePlan: true}));
    }

    rearrangePointsInPlan = (destination_index, source_index, draggableId) => {
        const newPlan = Array.from(this.state.pointsInPlan);
        newPlan.splice(source_index, 1);
        let draggedPoint = null;
        this.state.pointsInPlan.forEach(point => {if (draggableId == point.id) draggedPoint = point});
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

    handleRouteSwitch = () => {
        this.setState(prevState => ({showRoute: !prevState.showRoute,
        updatePlan: true}));  
    }

    handleDisableRoute = () => {
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

    setToMap = () => {}

    componentDidMount() {
        // get top recommended items in that city
        fetch('http://localhost:8080/search/searchTerm')
        .then(handleResponse)
        .then(data => this.setState({data: data}))
        .catch (error => console.log(error));

        // fetch plan based on planId
        // **************** add code here ******************
        // set planTitle
        //
        //
    }

    render() {
        const {pointsInPlan, data, location, showRoute, selectedPoint, updatePlan, routeObj, disableRoute, planId, planTitle, popConfirmDisabled} = this.state;       
        return (
            <div className="map-page">
                <div className="nav-bar-other">
                    <TopNavBar showLogin={this.showLogin} showRegister={this.showRegister}/>
                </div>
                <div className="map-page-main">
                    <Map data={data} pointsInPlan={pointsInPlan} location={location} showRoute={showRoute} selectedPoint={selectedPoint} updatePlan={updatePlan} setUpdatePlan={this.setUpdatePlan} setRouteObj={this.setRouteObj}/>
                    <MapSideBar data={data} addPointsToPlan={this.addPointsToPlan} pointsInPlan={pointsInPlan} handleHoverSearchResult={this.handleHoverSearchResult} deletePointsFromPlan={this.deletePointsFromPlan} rearrangePointsInPlan={this.rearrangePointsInPlan} showRoute={showRoute} routeObj={routeObj} handleDisableRoute={this.handleDisableRoute} handleEnableRoute={this.handleEnableRoute} planId={planId} planTitle={planTitle} setPlanTitle={this.setPlanTitle} showLogin={this.showLogin} popConfirmDisabled={popConfirmDisabled} disablePopConfirm={this.disablePopConfirm}/>
                    <div className="show-route-container">
                        <span id="route-button-notation">Route</span>
                        <Switch id="route-switch" checkedChildren="On" unCheckedChildren="Off" checked={showRoute} onChange={this.handleRouteSwitch} disabled={disableRoute}/>
                    </div>
                </div>
                <AuthorizationModal visibleLogin={this.state.visibleLogin} visibleRegister={this.state.visibleRegister} hideForm={this.hideForm} setToMap={this.setToMap} showRegister={this.showRegister}/>
            </div>
        );
    }
}

export default MapPage;