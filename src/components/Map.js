import React from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
let map;
let currentMarkers=[];
class Map extends React.Component {
  state = {
    lng: -122.335167,
    lat: 47.608013,
    zoom: 10
  }



  componentDidUpdate(prevProps, prevState, snapshot) {
    const { pointsInPlan } = this.props;
    // Could improve efficiency here? 
    if (currentMarkers!==null) {
      for (let i = currentMarkers.length - 1; i >= 0; i--) {
        currentMarkers[i].remove();
      }
      currentMarkers = [];
    }
    for (let i = 0; i < pointsInPlan.length; i++) {
      const marker = new mapboxgl.Marker({'color': '#008000'})// Create a new green marker
      marker.setLngLat([pointsInPlan[i].lng, pointsInPlan[i].lat]).addTo(map);
      currentMarkers.push(marker);
    }
  }

  componentDidMount() {
    const { zoom } = this.state;
    const center = this.props.location;
    map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [center[0], center[1]],
      zoom
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });

    map.addControl(geocoder, 'top-right');


    geocoder.on('result', function(data) { // When the geocoder returns a result
      const point = data.result.center; // Capture the result coordinates
      console.log(data);

      const marker = new mapboxgl.Marker({'color': '#008000'})// Create a new green marker
      marker.setLngLat(point).addTo(map); // Add the marker to the map at the result coordinates

    });

  }

  render() {
    const { lng, lat, zoom } = this.state;
    return (
        <div>

          {/*<div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">*/}
          {/*  /!*<div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>*!/*/}
          {/*</div>*/}
          <div className={"map-container"}>
            <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
          </div>

        </div>
    );
  }
}

export default Map;