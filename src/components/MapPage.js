import React from 'react';
import TopNavBar from "./TopNavBar";
import MapSideBar from "./MapSideBar";
import Map from "./Map";

class MapPage extends React.Component {
    render() {
        return (
            <div className="map-page">
                <div className="nav-bar-other">
                    <TopNavBar />
                </div>
                <div className="map-page-main">
                    <MapSideBar/>
                    <Map/>
                </div>
            </div>
        );
    }
}

export default MapPage;