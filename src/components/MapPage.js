import React from 'react';
import TopNavBar from "./TopNavBar"
import Map from "./Map"
import MapSideBar from "./MapSideBar"
import * as QueryString from "query-string"
import { Switch, Icon } from 'antd';
import handleResponse from '../api/APIUtils';

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
            updatePlan: false,
            selectedPoint: null,
            showRoute: false,
        }
    }
    

    addPointsToPlan = (point) => {
        if (this.state.pointsInPlan.length < 10) {
            this.setState(prevState => ({pointsInPlan: [...prevState.pointsInPlan, point],
            updatePlan: true}));
        } else {
            alert('Maximum number of stops 10 is reached. Please delete some before adding more.');
        }

    }

    deletePointsFromPlan = (pointId) => {
        console.log("about to delete from db..id=" + pointId);

        this.setState(prevState => ({pointsInPlan: [...(prevState.pointsInPlan.filter(point => {return point.id != pointId}))],
            updatePlan: true}));
    }

    handleRouteSwitch = () => {
        this.setState(prevState => ({showRoute: !prevState.showRoute,
        updatePlan: true}));
        
    }

    handleHoverSearchResult = (componentData) => (e) => {
        this.setState({selectedPoint: componentData});       
    }

    setUpdatePlanFalse = () => {
        this.setState({updatePlan: false});
    }

    componentDidMount() {
        fetch('http://localhost:8080/search/searchTerm')
        .then(handleResponse)
        .then(data => this.setState({data: data}))
        .catch (error => console.log(error));
    }

    render() {
        const {pointsInPlan, data, location, showRoute, selectedPoint, updatePlan} = this.state;       
        return (
            <div className="map-page">
                <div className="nav-bar-other">
                    <TopNavBar />
                </div>
                <div className="map-page-main">
                    <Map data={data} pointsInPlan={pointsInPlan} location={location} showRoute={showRoute} selectedPoint={selectedPoint} updatePlan={updatePlan} setUpdatePlanFalse={this.setUpdatePlanFalse}/>
                    <MapSideBar data={data} addPointsToPlan={this.addPointsToPlan} pointsInPlan={pointsInPlan} handleHoverSearchResult={this.handleHoverSearchResult} deletePointsFromPlan={this.deletePointsFromPlan}/>
                    <div className="show-route-container">
                        <span id="route-button-notation">Route</span>
                        <Switch id="route-switch" checkedChildren="On" unCheckedChildren="Off" checked={showRoute} onChange={this.handleRouteSwitch}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MapPage;