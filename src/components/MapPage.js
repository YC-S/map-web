import React from 'react';
import TopNavBar from "./TopNavBar"
import App from "./App"
import MapSideBar from "./MapSideBar"

class MapPage extends React.Component {
    state = {
        data: [{
                id: 1,
                lng: -122.335167,
                lat:  47.608013,
                imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc p, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
            },
            {
                id: 2,
                lng: -121.335167,
                lat:  47.608013,
                imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
            },
            {
                id: 3,
                lng: -121.335167,
                lat:  48.608013,
                imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
            },
            {
                id: 4,
                lng: -121.335167,
                lat:  49.608013,
                imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
            },
            {
                id: 5,
                lng: -120.335167,
                lat:  49.608013,
                imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
            },
        ],
        pointsInPlan: []
    }

    addPointsToPlan = (point) => {
        this.setState(prevState => ({pointsInPlan: [...prevState.pointsInPlan, point]}));
    }

    render() {
        const {pointsInPlan, data} = this.state;
        return (
            <div className="map-page">
                <div className="nav-bar-other">
                    <TopNavBar />
                </div>
                <div className="map-page-main">
                    <App data={data} pointsInPlan={pointsInPlan}/>
                    <MapSideBar data={data} addPointsToPlan={this.addPointsToPlan}/>
                </div>
            </div>
        );
    }
}

export default MapPage;