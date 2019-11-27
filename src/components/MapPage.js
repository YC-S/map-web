import React from 'react';
import TopNavBar from "./TopNavBar"
import App from "./App"
import MapSideBar from "./MapSideBar"

class MapPage extends React.Component {
    render() {
        return (
            <div className="map-page">
                <div className="nav-bar-other">
                    <TopNavBar />
                </div>
                <div className="map-page-main">
                    <App />
                    <MapSideBar />
                </div>
            </div>
        );
    }
}

export default MapPage;