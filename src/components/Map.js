import React from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder/lib/index"

mapboxgl.accessToken = 'pk.eyJ1Ijoib2xpdmV5ZGVuZyIsImEiOiJjazM5MGQzMHUwYWc4M21tbXJtdzVxa3B2In0.DburhRKQkV_fO58wbVjn4w';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -122.335167,
            lat:  47.608013,
            zoom: 13
        };
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [lng, lat],
            zoom
        });

        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            marker: {
                color: 'orange'
            },
            mapboxgl: mapboxgl
        });

        map.addControl(geocoder);

        map.on('move', () => {
            const { lng, lat } = map.getCenter();

            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        const { lng, lat, zoom } = this.state;

        return (
            <div>

                <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
                    <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>

                </div>
                <div className={"map-container"}>
                    <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
                </div>

            </div>
        )
    }
}

export default Map;
