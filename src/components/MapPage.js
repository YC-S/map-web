import React from 'react';
import TopNavBar from "./TopNavBar"
import Map from "./Map"
import MapSideBar from "./MapSideBar"
import * as QueryString from "query-string"

class MapPage extends React.Component {
    constructor(props) {
        super(props);
        const params = QueryString.parse(props.location.search);
        this.state = {
            location: [parseFloat(params.lng), parseFloat(params.lat)],
            data: [{
                    id: 1,
                    lng: -122.335167,
                    lat:  47.608013,
                    imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc p, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
                },
                {
                    id: 2,
                    lng: -122.325167,
                    lat:  47.608013,
                    imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
                },
                {
                    id: 3,
                    lng: -122.345167,
                    lat:  47.628013,
                    imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
                },
                {
                    id: 4,
                    lng: -122.365167,
                    lat:  47.618013,
                    imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
                },
                {
                    id: 5,
                    lng: -122.345167,
                    lat:  47.598013,
                    imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
                },
            ],
            pointsInPlan: []
        }
    }
    

    addPointsToPlan = (point) => {
        if (this.state.pointsInPlan.length < 10) {
            this.setState(prevState => ({pointsInPlan: [...prevState.pointsInPlan, point]}));
        } else {
            alert('Maximum number of stops 10 is reached. Please delete some before adding more.');
        }

    }

    render() {
        const {pointsInPlan, data, location} = this.state;
        return (
            <div className="map-page">
                <div className="nav-bar-other">
                    <TopNavBar />
                </div>
                <div className="map-page-main">
                    <Map data={data} pointsInPlan={pointsInPlan} location={location}/>
                    <MapSideBar data={data} addPointsToPlan={this.addPointsToPlan} pointsInPlan={pointsInPlan}/>
                </div>
            </div>
        );
    }
}

export default MapPage;